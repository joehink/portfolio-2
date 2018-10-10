google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Subject', 'Hours of Studying'],
        ['JavaScript',    64.25],
        ['React',         62.75],
        ['HTML & CSS',    48.25],
        ['Node.js',       41.5],
        ['Python',        32.5],
        ['SQL',           21],
        ['GraphQL',       13.5],
        ['Golang',        12],
        ['MongoDB',       11.75],
        ['Vue.js',        10.5],
    ]);

    var options = {
        title: "350 hours of online video courses",
        chartArea:{width: 500,height:"100%"}
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}