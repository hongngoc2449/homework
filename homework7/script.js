// Hàm gọi API để lấy dữ liệu sản phẩm
document.getElementById('showFormButton').addEventListener('click', function() {
    const form = document.getElementById('placeForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

function getPlaces(callback) {
    fetch('https://671a16dcacf9aa94f6a91334.mockapi.io/tourism/place')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Callback function để xử lý kết quả trả về từ API
function handlePlaces(error, data) {
    if (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    } else {
        const placeTableBody = document.getElementById('placeTableBody');
        data.forEach(place => {
            const row = `
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">${place.id}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${place.name}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${place.cost}$</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${place.area}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                        <img src="${place.image}" alt="${place.name}" style="width:100px; height:auto; border-radius: 5px;">
                    </td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="updateRow(this)">Update</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
                    </td>
                </tr>`;
            placeTableBody.innerHTML += row;
        });
    }
}

// Gọi hàm getProducts với callback handleProducts
getPlaces(handlePlaces);

function addDataToAPI(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Lỗi khi thêm dữ liệu');
        }
        return response.json();
    })
    .then(result => callback(null, result))
    .catch(error => callback(error, null));
}

function handleAddDataResponse(error, result) {
    if (error) {
        console.error('Lỗi', error.message);
        alert('Lỗi khi thêm dữ liệu: ' + error.message);
    } else {
        console.log('Thêm dữ liệu vào API thành công:', result);
        alert('Thêm dữ liệu thành công');
        const placeTableBody = document.getElementById('placeTableBody');
        const row = `
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">${result.id}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${result.name}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${result.cost}$</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${result.area}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                    <img src="${result.image}" alt="${result.name}" style="width:100px; height:auto; border-radius: 5px;">
                </td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="updateRow(this)">Update</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
                </td>
            </tr>`;
        placeTableBody.innerHTML += row;
    }
}

const apiUrl = 'https://671a16dcacf9aa94f6a91334.mockapi.io/tourism/place';

function addData() {
    const newData = {
        name: document.getElementById('placeName').value,
        cost: document.getElementById('placeCost').value,
        area: document.getElementById('placeArea').value,
        image: document.getElementById('placeImage').value,
    };
    addDataToAPI(apiUrl, newData, handleAddDataResponse);
}

document.getElementById('placeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addData();
    document.getElementById('placeForm').reset();
    document.getElementById('placeForm').style.display = 'none';
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


