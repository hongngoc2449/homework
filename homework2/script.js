var arr=[];
function save(){
    var a ={
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        product: document.getElementById('product').value,
        qty: document.getElementById('qty').value,
        price: document.getElementById('price').value,
    }
    arr.push(a);
    console.log(a);
}
function show(){
    var html='';
    for(i in arr){
        var n = i;
        n++;
        html+='<tr>';
        html+='<td>'+n+'</td>';
        html+='<td>'+arr[i].name+'</td>';
        html+='<td>'+arr[i].id+'</td>';
        html+='<td>'+arr[i].product+'</td>';
        html+='<td>'+arr[i].qty+'</td>';
        html+='<td>'+arr[i].price+'</td>';
        html+='<td>'+parseFloat(arr[i].qty)*parseFloat(arr[i].price)+'</td>';
        html+='</tr>';
    }
    document.getElementById('tbl').innerHTML=html; 
}
function reset(){
    document.getElementById('name').value='';
    document.getElementById('id').value='';
    document.getElementById('product').value='';
    document.getElementById('qty').value='';
    document.getElementById('price').value='';
}