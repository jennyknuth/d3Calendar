var cal = new Calendar(1); // start week on Monday

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
var month = 8;
var year = 2015;

var weeks = cal.monthDays(year, month); // gets an array of arrays of the weeks
var table = d3.select("#calendar");
var header = table.append('thead');
var body = table.append('tbody');

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

console.log(weeks);
console.log(table);
// console.log(header);
console.log("month?", monthNames[month]);

weeks.forEach(function (week) {
  console.log(week[0]);
  body
    .append('tr') // append a row for each week
    .selectAll('td') // select all future table data boxes
    .data(week) // bind the each element in the week array to a td
    .enter() // for each new piece of data in week array
    .append('td') // append a new table data box
    .attr('class', function (d) {
          return d > 0 ? '' : 'empty';
        })
    .text(function (d) { // this accesses the number value of the day of the week
      return d > 0 ? d : '';
    });
});

// weeks.forEach(function (week) {
//   body
//     .append('tr')
//     .selectAll('td')
//     .data(week)
//     .enter()
//     .append('td')
//     .attr('class', function (d) {
//       return d > 0 ? '' : 'empty';
//     })
//     .text(function (d) {
//       return d > 0 ? d : '';
//     });
// });
