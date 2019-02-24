google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Position' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Education', 'Shoreline Community College', new Date(2016, 0, 3), new Date(2017, 5, 13) ],
      [ 'Education', 'Edmonds Community College', new Date(2017, 8, 23), new Date(2018, 5, 13) ],
      [ 'Education', 'General Assembly', new Date(2018, 11, 10), new Date(2019, 2, 21) ],
      [ 'Internships', 'Destination Marketing', new Date(2015, 9, 14), new Date(2017, 6, 8) ],
      [ 'Internships', 'Clatter & Din', new Date(2017, 0, 3), new Date(2017, 6, 14) ],
      [ 'Internships', 'SkyMuse Studios', new Date(2017, 5, 7), new Date(2017, 9, 11) ],
      [ 'Internships', 'Labs8', new Date(2018, 2, 1), new Date(2018, 5, 16) ],
    ]);

    chart.draw(dataTable);
  }
