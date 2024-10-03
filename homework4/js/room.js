var room = [
    {
        id:"P1",
        name:"Phòng đôi 2 giường nhỏ",
        price:500000,
        floor:"Tầng 1",
        type:"VIP"
    },
    {
        id:"P2",
        name:"Phòng đôi 1 giường lớn",
        price:400000,
        floor:"Tầng 1",
        type:"VIP"
    },
    {
        id:"P3",
        name:"Phòng đơn 1 giường nhỏ",
        price:300000,
        floor:"Tầng 1",
        type:"VIP"
    },
    {
        id:"P4",
        name:"Phòng đơn 1 giường lớn",
        price:500000,
        floor:"Tầng 2",
        type:"Thường"
    },
    {
        id:"P6",
        name:"Phòng đơn 1 giường lớn",
        price:500000,
        floor:"Tầng 3",
        type:"Thường"
    },
    {
        id:"P7",
        name:"Phòng đôi 2 giường lớn",
        price:600000,
        floor:"Tầng 3",
        type:"Thường"
    },
];

// Đẩy mảng room vào local
function Save(){
    localStorage.setItem('listRoom', JSON.stringify(room));
}

// Lấy dữ liệu phòng từ LocalStorage
function load(){
    room = JSON.parse(localStorage.getItem('listRoom'));
}

// Kiểm tra và tải dữ liệu từ LocalStorage
if (localStorage.getItem("listRoom") != null) {
    load();
}
Save();

// Xuất dữ liệu phòng ra HTML
var listLocal = function(){
    var listRoom = "";
    for (var i in room){
        var data = JSON.parse(JSON.stringify(room[i]));
        var listRoom = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listRoom += '<div class="card room p-2" style="width:auto">'; 
        // listRoomHTML += '<img class="card-img-top" src="img/' + data.img +'" alt="...">'; 
        listRoom += '<div class="card-title room-title text-center h5" >'+data.name+'</div>';
        listRoom += '<div class="floor text-center h6">Tầng: '+data.floor+'</div>';
        listRoom += '<div class="type text-center h6">Loại: '+data.type+'</div>';
        listRoom += '<div class="price text-center h6">'+data.price+'₫</div>';
        listRoom +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-price="'+data.price+'" onclick="tks()">';
        listRoom +=  '<a>';
        listRoom +=  '<i class="fas fa-cart-plus"></i>';
        listRoom +=  '</a>';
        listRoom +=  '</span>';
        listRoom += '</div>';
        listRoom += '</div>';

        document.getElementById("banchay").innerHTML += listRoom;
    }
    Save();
}

listLocal();
