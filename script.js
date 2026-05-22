const productsData = [
    { id: 1, category: "Casual Shoes", name: "White Casual Shoes", price: 480000, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" },
    { id: 2, category: "Casual Shoes", name: "Classic Canvas Shoes", price: 390000, img: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=400" },
    { id: 15, category: "Casual Shoes", name: "Everyday Low Sneakers", price: 430000, img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400" },
    { id: 16, category: "Casual Shoes", name: "Black Casual Sneakers", price: 510000, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400" },
    { id: 17, category: "Casual Shoes", name: "Retro Street Shoes", price: 560000, img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400" },
    { id: 3, category: "Special Edition", name: "invincible Collab:ເກີບບັກຄົງກະພັນ", price: 920000, img: "https://i.redd.it/custom-invincible-shoes-v0-92zb5k7k33qe1.jpg?width=2048&format=pjpg&auto=webp&s=23709d62d7865df2c1b6ceab523a824ed12e7e0f" },
    { id: 4, category: "Special Edition", name: "Limited Colorway Sneakers", price: 980000, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 18, category: "Special Edition", name: "Manga Print Sneakers", price: 890000, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
    { id: 5, category: "Runner Shoes", name: "Lightweight Running Shoes", price: 620000, img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400" },
    { id: 6, category: "Runner Shoes", name: "Premium Walking Shoes", price: 780000, img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400" },
    { id: 21, category: "Runner Shoes", name: "Marathon Runner Pro", price: 840000, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400" },
    { id: 22, category: "Runner Shoes", name: "Daily Jogger Shoes", price: 590000, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 23, category: "Runner Shoes", name: "Trail Runner Grip", price: 760000, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400" },
    { id: 36, category: "Runner Shoes", name: "CHICMARK Mens Lightweight", price: 810000, img: "https://m.media-amazon.com/images/I/71NRut66IlL._AC_SL1500_.jpg" },
    { id: 7, category: "Sport Shoes", name: "Training Shoes", price: 520000, img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400" },
    { id: 8, category: "Sport Shoes", name: "Red Sport Shoes", price: 610000, img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400" },
    { id: 24, category: "Sport Shoes", name: "Gym Flex Trainers", price: 570000, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400" },
    { id: 25, category: "Sport Shoes", name: " Running Sport Casual", price: 680000, img: "https://s.alicdn.com/@sc04/kf/H0c1f888562134e18987dbf5ae7802318d.jpg?avif=close&webp=close" },
    { id: 9, category: "Football Shoes", name: "Firm Ground Football Boots", price: 690000, img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400" },
    { id: 10, category: "Football Shoes", name: "Turf Football Shoes", price: 640000, img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400" },
    { id: 27, category: "Football Shoes", name: "Speed Control Boots", price: 720000, img: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=400" },
    { id: 28, category: "Football Shoes", name: "Indoor Futsal Shoes", price: 580000, img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400" },
    { id: 11, category: "Formal Shoes", name: "Leather Loafers", price: 690000, img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
    { id: 12, category: "Formal Shoes", name: "Egoss Comfortable", price: 740000, img: "https://egoss.in/cdn/shop/files/197013_BLACK.jpg?v=1753878625&width=800" },
    { id: 30, category: "Formal Shoes", name: "Formal Oxford Shoes", price: 790000, img: "https://redtape.com/cdn/shop/files/RTE5642B_1.jpg?v=1756810040" },
    { id: 31, category: "Formal Shoes", name: "Alberto Torresi", price: 710000, img: "https://www.albertotorresi.com/cdn/shop/files/DSC_1033.jpg?v=1754295384" },
    { id: 32, category: "Formal Shoes", name: "Bacca Bucci VICTORIA", price: 860000, img: "https://baccabucci.com/cdn/shop/products/MG_7666-min_1e99cd5a-e357-41a4-8048-56df9c9b30cc.jpg?v=1774854994&width=1800" },
    { id: 13, category: "Limited Edition", name: "GOLDCITY ช้างบุก รุ่น D409", price: 25000000, img: "https://mpics-cdn-acc.mgronline.com/pics/Images/564000003615401.JPEG.webp" },
    { id: 14, category: "Limited Edition", name: "PUMA", price: 28000000, img: "https://stylebyattractions.com/cdn/shop/files/WhatsAppImage2024-09-10at2.30.29PM_1.jpg?v=1725965615" },
    { id: 33, category: "Limited Edition", name: "YAMADA water Guard", price: 340000, img: "https://img.th.my-best.com/product_images/dcb2d26a5a90323f69af0a373c16e09e.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=90419311f3eed356c8cc96a184280a27" }
];

const shoeSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const emptyBagText = "ຍັງບໍ່ໄດ້ເລືອກສິນຄ້າ";
const basket = [];
let promoCode = "";

const productList = document.getElementById('product-list');
const categoryTemplate = document.getElementById('category-template');
const productCardTemplate = document.getElementById('product-card-template');
const bagItemTemplate = document.getElementById('bag-item-template');

renderProducts();
renderUI();

function renderProducts() {
    const categories = [...new Set(productsData.map(product => product.category))];
    const pageContent = document.createDocumentFragment();

    categories.forEach(category => {
        const section = categoryTemplate.content.cloneNode(true);
        const productsGrid = section.querySelector('.category-products');

        section.querySelector('h2').textContent = category;
        productsData
            .filter(product => product.category === category)
            .forEach(product => productsGrid.appendChild(createProductCard(product)));

        pageContent.appendChild(section);
    });

    productList.replaceChildren(pageContent);
}

function createProductCard(product) {
    const card = productCardTemplate.content.cloneNode(true);
    const image = card.querySelector('img');
    const sizeSelect = card.querySelector('.size-select');

    image.src = product.img;
    image.alt = product.name;
    card.querySelector('h3').textContent = product.name;
    card.querySelector('.product-info span').textContent = product.category;
    card.querySelector('.product-info p').textContent = `${product.price.toLocaleString()} Kip`;

    shoeSizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = `Foot size ${size}`;
        sizeSelect.appendChild(option);
    });

    card.querySelector('button').addEventListener('click', () => addToCart(product, sizeSelect));
    return card;
}

function addToCart(product, sizeSelect) {
    if (!sizeSelect.value) {
        alert("ເລືອກເບີເກີບ.");
        return;
    }

    basket.push({
        name: product.name,
        price: product.price,
        size: sizeSelect.value
    });

    renderUI();
}

function renderUI() {
    const subtotal = basket.reduce((sum, item) => sum + item.price, 0);
    const discount = promoCode === "LAOS2024" ? Math.round(subtotal * 0.1) : 0;
    const total = Math.max(subtotal - discount, 0);

    document.getElementById('cart-count').innerText = basket.length;
    document.getElementById('bag-count-text').innerText = `${basket.length} ລາຍການ`;
    document.getElementById('subtotal-text').innerText = `${subtotal.toLocaleString()} Kip`;
    document.getElementById('discount-text').innerText = `-${discount.toLocaleString()} Kip`;
    document.getElementById('final-total-text').innerText = `${total.toLocaleString()} Kip`;
    document.getElementById('discount-row').classList.toggle('is-hidden', discount === 0);
    renderBagItems();
}

function applyPromoCode() {
    const code = document.getElementById('promoCode').value.trim().toUpperCase();
    const promoMessage = document.getElementById('promo-message');

    promoCode = code === "LAOS2024" ? code : "";
    promoMessage.textContent = code && !promoCode ? "ໂຄ້ດຍໍ່ຖືກຕ້ອງ." : (promoCode ? "LAOS2024: ຫຼຸດ5%" : "");
    promoMessage.className = promoCode ? "ສຳເລັດ" : "ບໍ່ພົບ";
    renderUI();
}

function renderBagItems() {
    const cartList = document.getElementById('cart-list-text');

    if (basket.length === 0) {
        cartList.textContent = emptyBagText;
        return;
    }

    const bagItems = document.createDocumentFragment();
    basket.forEach((item, index) => bagItems.appendChild(createBagItem(item, index)));
    cartList.replaceChildren(bagItems);
}

function createBagItem(item, index) {
    const bagItem = bagItemTemplate.content.cloneNode(true);

    bagItem.querySelector('.bag-item-number').textContent = index + 1;
    bagItem.querySelector('.bag-item-main strong').textContent = item.name;
    bagItem.querySelector('.bag-item-main span').textContent = `Size ${item.size}`;
    bagItem.querySelector('.bag-item-side strong').textContent = `${item.price.toLocaleString()} Kip`;
    bagItem.querySelector('button').addEventListener('click', () => removeCartItem(index));

    return bagItem;
}

function removeCartItem(index) {
    basket.splice(index, 1);
    renderUI();
}

function resetCart() {
    if (confirm("ລືບລາຍການທັງໝົດ?")) {
        basket.length = 0;
        promoCode = "";
        document.getElementById('promoCode').value = "";
        document.getElementById('promo-message').textContent = "";
        renderUI();
    }
}

function confirmPurchase() {
    const name = document.getElementById('custName').value;
    const tel = document.getElementById('custTel').value;
    const loc = document.getElementById('custLoc').value;
    const total = document.getElementById('final-total-text').innerText;
    const discount = document.getElementById('discount-text').innerText;

    if (!name || !tel || basket.length === 0) {
        alert("ກະລຸນາໃສ່ຂໍ້ມູນໃຫ້ຄົບ.");
        return;
    }

    const orderData = {
        name,
        tel,
        loc,
        items: basket,
        promo: promoCode,
        discount,
        total,
        date: new Date().toLocaleString()
    };

    localStorage.setItem('myOrder', JSON.stringify(orderData));
    window.location.href = 'receipt.html';
}
