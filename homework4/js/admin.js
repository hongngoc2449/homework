var roomAdmin = function() {
    var listRoom = "";
    for (var i in room) {
        var data = JSON.parse(JSON.stringify(room[i]));
        listRoom = '<tr>';
        listRoom += '<td>' + data.id + '</td>';
        listRoom += '<td>' + data.name + '</td>';
        listRoom += '<td>' + data.floor + '</td>';
        listRoom += '<td>' + data.type + '</td>';
        listRoom += '<td>' + data.price + '</td>';
        listRoom += '<td><button onclick="updateRoom('
            + i + ')" class="btn btn-outline-primary" data-toggle="modal" data-target="#updateRoom"><i class="fas fa-cogs"></i></button>';
        listRoom += '<button onclick="deleteRoom('
            + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listRoom += '</tr>';

        document.getElementById("room-admin").innerHTML += listRoom;
    }
};

var addRoom = function() {
    var roomObj = {
        id: "P" + parseInt(room.length + 1),
        name: document.getElementById("name").value,
        floor: document.getElementById("floor").value,
        type: document.getElementById("type").value,
        price: document.getElementById("price").value
    };
    room.push(roomObj);
    localStorage.setItem('listRoom', JSON.stringify(room));
    window.location.reload();
};

// Xóa phòng
var deleteRoom = function(i) {
    room.splice(i, 1);
    localStorage.setItem('listRoom', JSON.stringify(room));
    window.location.reload();
};

// Sửa phòng
var updateRoom = function(i) {
    var selectedRoom = room[i];
    document.getElementById("idUpdate").value = selectedRoom.id;
    document.getElementById("nameUpdate").value = selectedRoom.name;
    document.getElementById("floorUpdate").value = selectedRoom.floor;
    document.getElementById("typeUpdate").value = selectedRoom.type;
    document.getElementById("priceUpdate").value = selectedRoom.price;
    document.getElementById("idUpdate").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-primary mt-3" onclick="submitUpdate(' + i + ')">Cập nhật</button>';
};

var submitUpdate = function(i) {
    var selectedRoom = room[i];
    selectedRoom.id = document.getElementById("idUpdate").value;
    selectedRoom.name = document.getElementById("nameUpdate").value;
    selectedRoom.floor = document.getElementById("floorUpdate").value;
    selectedRoom.type = document.getElementById("typeUpdate").value;
    selectedRoom.price = document.getElementById("priceUpdate").value;
    localStorage.setItem('listRoom', JSON.stringify(room));
    window.location.reload();
};

// Quản lý người dùng
var userAdmin = function() {
    var listUser = "";
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]));
        listUser = '<tr>';
        listUser += '<td>' + data.id + '</td>';
        listUser += '<td>' + data.username + '</td>';
        listUser += '<td>' + data.email + '</td>';
        listUser += '<td><button onclick="updateUser('
            + i + ')" class="btn btn-outline-primary" data-toggle="modal" data-target="#updateUser"><i class="fas fa-cogs"></i></button>';
        listUser += '<button onclick="deleteUser('
            + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listUser += '</tr>';

        document.getElementById("user-admin").innerHTML += listUser;
    }
};


roomAdmin();
userAdmin();
