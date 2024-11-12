document.getElementById('showFormButton').addEventListener('click', function() {
    const form = document.getElementById('placeForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Hàm gọi API để lấy dữ liệu sản phẩm
async function getPlaces() {
    try {
        const response = await fetch('https://671a16dcacf9aa94f6a91334.mockapi.io/tourism/place');
        const data = await response.json();
        renderPlaces(data);
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    }
}

// Hàm render dữ liệu sản phẩm
function renderPlaces(data) {
    const placeTableBody = document.getElementById('placeTableBody');
    let rows = '';
    data.forEach(place => {
        rows += `
            <tr>
                <td class="table-cell">${place.id}</td>
                <td class="table-cell">${place.name}</td>
                <td class="table-cell">${place.cost}$</td>
                <td class="table-cell">${place.area}</td>
                <td class="table-cell" style="text-align: center;">
                    <img src="${place.image}" alt="${place.name}" class="place-image">
                </td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="updateRow(this)">Update</button>
                    <button class="btn btn-danger btn-sm" onclick="deletePlace('${place.id}')">Delete</button>
                </td>
            </tr>`;
    });
    placeTableBody.innerHTML = rows;
}

// Hàm thêm dữ liệu vào API
async function addDataToAPI(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Lỗi khi thêm dữ liệu');
        }

        const result = await response.json();
        handleAddDataResponse(null, result);
    } catch (error) {
        handleAddDataResponse(error, null);
    }
}

// Xử lý phản hồi khi thêm dữ liệu
function handleAddDataResponse(error, result) {
    if (error) {
        console.error('Lỗi', error.message);
        alert('Lỗi khi thêm dữ liệu: ' + error.message);
    } else {
        console.log('Thêm dữ liệu vào API thành công:', result);
        alert('Thêm dữ liệu thành công');
        renderPlaces([result]);  // Render thêm dữ liệu mới vào bảng
    }
}

// Gọi hàm getPlaces để tải dữ liệu ban đầu
getPlaces();

const apiUrl = 'https://671a16dcacf9aa94f6a91334.mockapi.io/tourism/place';

function addData() {
    const newData = {
        name: document.getElementById('placeName').value,
        cost: document.getElementById('placeCost').value,
        area: document.getElementById('placeArea').value,
        image: document.getElementById('placeImage').value,
    };
    addDataToAPI(apiUrl, newData);
}

// Xử lý sự kiện submit form
document.getElementById('placeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addData();
    this.reset();
    this.style.display = 'none';
});





//Ham xoa toan bo du lieu
function deleteDataFromAPI(url,callback){
    fetch(url,{
        method: 'DELETE',
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('Lỗi khi xóa dữ liệu');
        }
        return response.json();
    })
    .then(result => callback(null,result))
    .catch(error => callback(error,null));
}






