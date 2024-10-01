var femaleProduct = [
    {
        name : "Quần jean nữ",
        id : "KO0002",
        salePrice : "269.000 vnđ",
        price : "370.000 vnđ",
        img: "https://i.pinimg.com/236x/fa/02/0b/fa020b655db9df752e73449bff9927d4.jpg"
    },
    {
        name : "Áo khoác nữ",
        id : "VN0002",
        salePrice : "249.000 vnđ",
        price : "369.000 vnđ",
        img : "https://i.pinimg.com/236x/91/b4/3b/91b43b7e67bcaf2f4ad268582b8e9b1d.jpg"
    },
    {
        name : "Áo phông nữ",
        id : "US0002",
        salePrice : "159.000 vnđ",
        price : "390.000 vnđ",
        img : "https://i.pinimg.com/236x/5b/54/29/5b542934271bc14dc715d48441148021.jpg"
    }
]
var maleProduct = [
    {
        name : "Quần short kaki",
        price : "250.000 vnđ",
        img: "https://i.pinimg.com/236x/de/92/f1/de92f11a3303ec8dcba6cc8161ecdcc5.jpg"
    },
    {
        name : "Quần baggy đen",
        price : "398.000 vnđ",
        img : "https://i.pinimg.com/236x/c8/9a/ef/c89aef970eef00e03f0121600415039b.jpg"
    },
    {
        name : "Quần short kaki",
        price : "300.000 vnđ",
        img : "https://i.pinimg.com/236x/a0/9a/06/a09a0671abbbb7e7d0546c8f263f986f.jpg"
    },
    {
        name : "Quần short kaki",
        price : "300.000 vnđ",
        img : "https://i.pinimg.com/236x/e2/44/91/e24491533ba5580b8bd515b1dc043427.jpg"
    }
]
function showProducts(category) {
    const productContainer = document.getElementById('products');
    const categoryTitle = document.getElementById('category-title');
    productContainer.innerHTML = '';

    let products = [];
    let title = '';

    if (category === 'male') {
        products = maleProduct;
        title = 'THỜI TRANG NAM';
    } else if (category === 'female') {
        products = femaleProduct;
        title = 'THỜI TRANG NỮ';
    }
    categoryTitle.textContent = title;

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <h3 class="product-name">${product.name}</h3>
            ${product.salePrice ? `<p class="product-sale-price">${product.salePrice}</p>` : ''}
            <p class="product-price" style="${category === 'male' ? 'text-decoration: none;' : ''}">${product.price}</p>
            <button class="btn-order">Đặt Mua</button>
        `;
        productContainer.appendChild(productElement);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    showProducts('female');
});