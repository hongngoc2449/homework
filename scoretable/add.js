var id=0;
function add(){
    id++;
    var pname = form.pname.value;
    var qty = form.qty.value;
    var pri = form.pri.value;
    var sub = qty*pri;
    var row = "<tr>";
    row += "<td>"+id+"</td>";
    row += "<td>"+pname+"</td>";
    row += "<td>"+qty+"</td>";
    row += "<td>"+pri+"</td>";
    row += "<td>"+sub+"</td>";
    row += "<tr>";

    var total = document.getElementById('total').innerHTML;

    total = parseInt(total) + parseInt(sub);

    var row_total = "<tr>";
        row_total += "<td>Total</td>";
        row_total += "<td></td>";
        row_total += "<td></td>";
        row_total += "<td></td>";
        row_total += "<td id='total'>"+total+"</td>";
        row_total += "<tr>";

    document.getElementById('thead').innerHTML += row;
    document.getElementById('tbody').innerHTML = row_total;
}
