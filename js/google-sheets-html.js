/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1JJUBz6oa5ORsnqZvoRig1Gh6pCslBc97XQADlPPtjxk&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U label A "StartDate", B "dbegin", C "Campus", D "Room", E "Title", F "CRN", G "Term", H "Dept", I "Section", J "Hours", K "Fee", L "EndDate", M "#ses", N "#Days", O "StartTime", P "EndTime", Q "Instructor", R "Resp" , S "Enrl*20181010", T"Real-time", U"Bookstore" ');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
