var room = [
    {
        id:"P1",
        img:"1.jpg",
        name:"Phòng đôi 2 giường nhỏ",
        price:500000,
        floor:"Tầng 1",
        type:"VIP"
    },
    {
        id:"P2",
        img:"2.jpg",
        name:"Phòng đôi 1 giường lớn",
        price:400000,
        floor:"Tầng 1",
        type:"VIP"
    },
    {
        id:"P3",
        img:"3.jpg",
        name:"Phòng đơn 1 giường nhỏ",
        price:300000,
        floor:"Tầng 1",
        type:"VIP"
    },
    {
        id:"P4",
        img:"4.jpg",
        name:"Phòng đơn 1 giường lớn",
        price:500000,
        floor:"Tầng 2",
        type:"Thường"
    },
    {
        id:"P5",
        img:"5.jpg",
        name:"Phòng đơn 1 giường lớn",
        price:500000,
        floor:"Tầng 3",
        type:"Thường"
    },
    {
        id:"P6",
        img:"6.jpg",
        name:"Phòng đơn 1 giường lớn",
        price:500000,
        floor:"Tầng 3",
        type:"Thường"
    },
    {
        id:"P7",
        img:"7.jpg",
        name:"Phòng đôi 2 giường lớn",
        price:600000,
        floor:"Tầng 3",
        type:"Thường"
    },
    {
        id:"P8",
        img:"7.jpg",
        name:"Phòng đôi 2 giường lớn",
        price:800000,
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
        listRoom += '<img style="width:100%;height:200px;" src="img/' + data.img +'" alt="...">'; 

        listRoom += '<div class="card-title room-title text-center h5" >'+data.name+'</div>';
        listRoom += '<div class="floor text-center h6">Tầng: '+data.floor+'</div>';
        listRoom += '<div class="type text-center h6">Loại: '+data.type+'</div>';
        listRoom += '<div class="price text-center h6">'+data.price+'₫</div>';
        listRoom += '<button onclick="location.href=\'room-detail.html?code='+data.id+'\'" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer; font-size: 16px; display: inline-flex; align-items: center; justify-content: center;">Xem chi tiết</button>';
        listRoom += '</div>';
        listRoom += '</div>';

        document.getElementById("banchay").innerHTML += listRoom;
    }
    Save();
}

listLocal();
