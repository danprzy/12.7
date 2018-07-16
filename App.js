// ZMIENNE DO KOMUNIKACJI Z SERWEREM
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3193',
    'X-Auth-Token': '6056ef129460ec2f7a7d18767ffd1d56'
};
//dodania nagłówków bez konieczności umieszczania ich w każdym zapytaniu osobno
$.ajaxSetup({
    headers: myHeaders
});
//FUNKCJA ODPYTUJĄCA SERWER O ZASÓB TABLICY
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});


function setupColumns(columns) {
    columns.forEach(function(column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col); //createColumn() w pliku Column.js).
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function(card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(cardObj); //createCard() w pliku Card.js).
    });
}