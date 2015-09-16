var cal = new Calendar(1); // start week on Monday

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
var month = 8;
var year = 2015;

var weeks = cal.monthDays(year, month); // gets an array of arrays of the weeks
var table = d3.select("#calendar"); // select and name the element from the dom
var header = table.append('thead'); // append header to the element
var body = table.append('tbody'); // append a body to the element

header
  .append('tr')
  .append('td')
  .attr('colspan', 7)
  .style('text-align', 'center')
  .text(monthNames[month]);

header
  .append('tr')
  .selectAll('td')
  .data(dayNames)
  .enter()
  .append('td')
  .style('text-align', 'center')
  .text(function (d){
    return d;
  });

weeks.forEach(function (week) {
  body
    .append('tr') // append a row for each week
    .selectAll('td') // select all future table data boxes (define the selection to which data will be joined)
    .data(week) // get your data
    .enter() // for each new piece of data in week array
    .append('td') // append a new table data box
    .attr('class', function (d) {
          return d > 0 ? '' : 'empty';
        })
    .text(function (d) { // this accesses the number value of the day of the week
      return d > 0 ? d : '';
    });
});
