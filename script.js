const productsData = [
    { id: 1, category: "Casual Shoes", name: "Red Casual Shoes", price: 480000, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" },
    { id: 2, category: "Casual Shoes", name: "Classic Canvas Shoes", price: 390000, img: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=400" },
    { id: 15, category: "Casual Shoes", name: "Everyday Low Sneakers", price: 430000, img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400" },
    { id: 16, category: "Casual Shoes", name: "Black Casual Sneakers", price: 510000, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400" },
    { id: 17, category: "Casual Shoes", name: "Retro Street Shoes", price: 560000, img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400" },
    { id: 3, category: "Special Edition", name: "invincible Collab:ເກີບບັກຄົງກະບື", price: 920000, img: "https://i.redd.it/custom-invincible-shoes-v0-92zb5k7k33qe1.jpg?width=2048&format=pjpg&auto=webp&s=23709d62d7865df2c1b6ceab523a824ed12e7e0f" },
    { id: 4, category: "Special Edition", name: "Limited Colorway Sneakers", price: 980000, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 18, category: "Special Edition", name: "Manga Print Sneakers", price: 890000, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
    { id: 5, category: "Runner Shoes", name: "Lightweight Running Shoes", price: 620000, img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400" },
    { id: 6, category: "Runner Shoes", name: "Premium Walking Shoes", price: 780000, img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400" },
    { id: 21, category: "Runner Shoes", name: "Marathon Runner Pro", price: 840000, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400" },
    { id: 22, category: "Runner Shoes", name: "Li-Ning Shoes", price: 590000, img: "https://sportscorner.qa/media/catalog/product/cache/79d48e83850b5fb72f5e01b7ff7455ae/Y/K/YKFW080_1_3_d75c.PNG" },
    { id: 23, category: "Runner Shoes", name: "Trail Runner Grip", price: 760000, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400" },
    { id: 36, category: "Runner Shoes", name: "CHICMARK Mens Lightweight", price: 810000, img: "https://m.media-amazon.com/images/I/71NRut66IlL._AC_SL1500_.jpg" },
    { id: 7, category: "Sport Shoes", name: "Training Shoes", price: 520000, img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400" },
    { id: 8, category: "Sport Shoes", name: "Red Sport Shoes", price: 610000, img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400" },
    { id: 24, category: "Sport Shoes", name: "Gym Flex Trainers", price: 570000, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400" },
    { id: 25, category: "Sport Shoes", name: " Running Sport Casual", price: 680000, img: "https://s.alicdn.com/@sc04/kf/H0c1f888562134e18987dbf5ae7802318d.jpg?avif=close&webp=close" },
    { id: 9, category: "Football Shoes", name: "Firm Ground Football Boots", price: 690000, img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400" },
    { id: 10, category: "Football Shoes", name: "Turf Football Shoes", price: 640000, img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400" },
    { id: 27, category: "Football Shoes", name: "Speed Control Boots", price: 720000, img: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=400" },
    { id: 28, category: "Football Shoes", name: "Cristiano Ronaldo's new Nike", price: 580000, img: "https://www.thesun.co.uk/wp-content/uploads/2018/06/boots1.jpg?strip=all&w=563" },
    { id: 11, category: "Formal Shoes", name: "Leather Loafers", price: 690000, img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
    { id: 12, category: "Formal Shoes", name: "Egoss Comfortable", price: 740000, img: "https://egoss.in/cdn/shop/files/197013_BLACK.jpg?v=1753878625&width=800" },
    { id: 30, category: "Formal Shoes", name: "Formal Oxford Shoes", price: 790000, img: "https://redtape.com/cdn/shop/files/RTE5642B_1.jpg?v=1756810040" },
    { id: 31, category: "Formal Shoes", name: "Alberto Torresi", price: 710000, img: "https://www.albertotorresi.com/cdn/shop/files/DSC_1033.jpg?v=1754295384" },
    { id: 32, category: "Formal Shoes", name: "Bacca Bucci VICTORIA", price: 860000, img: "https://baccabucci.com/cdn/shop/products/MG_7666-min_1e99cd5a-e357-41a4-8048-56df9c9b30cc.jpg?v=1774854994&width=1800" },
    { id: 13, category: "Limited Edition", name: "GOLDCITY D409", price: 25000000, img: "https://mpics-cdn-acc.mgronline.com/pics/Images/564000003615401.JPEG.webp" },
    { id: 14, category: "Limited Edition", name: "GOLDCOOL", price: 28000000, img: "https://www.facebook.com/photo/?fbid=3008982849200755&set=a.652147236939692&__cft__[0]=AZZASrTUSN93MPOGRjOO8Sh1a692vKqEN7hX9VbCBoVZOFLEINbvj_yLMvbYAqzeh3-4EwSFcCHWdX_vxRFRy7QhUpUO73-wmwxwG59tUK92sfGnUw6eBOFEt5YLSis598dwNCApTmBychWd8wkI4CjN&__tn__=EH-R" },
    { id: 33, category: "Limited Edition", name: "YAMADA water Guard", price: 340000, img: "https://img.th.my-best.com/product_images/dcb2d26a5a90323f69af0a373c16e09e.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=90419311f3eed356c8cc96a184280a27" }
];

const shoeSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const localizedEmptyBagText = "ຍັງບໍ່ໄດ້ເລືອກສິນຄ້າ";
const basket = [];
let promoCode = "";

const productList = document.getElementById('product-list');
const categoryTemplate = document.getElementById('category-template');
const productCardTemplate = document.getElementById('product-card-template');
const bagItemTemplate = document.getElementById('bag-item-template');
const cartMoreButton = document.getElementById('cart-more-btn');
let isCartListExpanded = false;

cartMoreButton.addEventListener('click', () => {
    isCartListExpanded = !isCartListExpanded;
    renderBagItems();
});

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
        option.textContent = `ເບີ ${size}`;
        sizeSelect.appendChild(option);
    });

    card.querySelector('button').addEventListener('click', () => addToCart(product, sizeSelect));
    return card;
}

function addToCart(product, sizeSelect) {
    if (!sizeSelect.value) {
        alert("ກະລຸນາເລືອກເບີເກີບ.");
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
    
    // ดึงจำนวนสิทธิ์การใช้ล่าสุดมาตรวจสอบราคาสุทธิ
    let usedCount = parseInt(localStorage.getItem('promo_LAOS2024_used_count')) || 0;
    
    // เงื่อนไขคำนวณส่วนลด: โค้ดต้องถูกต้อง และ สิทธิ์ต้องใช้รวมกันยังไม่เกิน 50 ครั้ง
    const discount = (promoCode === "LAOS2024" && usedCount < 50) ? Math.round(subtotal * 0.1) : 0;
    const total = Math.max(subtotal - discount, 0);

    document.getElementById('bag-count-text').innerText = `${basket.length} ລາຍການ`;
    document.getElementById('subtotal-text').innerText = `${subtotal.toLocaleString()} Kip`;
    document.getElementById('discount-text').innerText = `-${discount.toLocaleString()} Kip`;
    document.getElementById('final-total-text').innerText = `${total.toLocaleString()} Kip`;
    document.getElementById('discount-row').classList.toggle('is-hidden', discount === 0);
    renderBagItems();
}

function applyPromoCode() {
    // ดึงค่า, ตัดช่องว่าง และแปลงเป็นตัวพิมพ์ใหญ่ทันทีเพื่อรองรับทั้งพิมพ์เล็ก/พิมพ์ใหญ่
    const code = document.getElementById('promoCode').value.trim().toUpperCase();
    const promoMessage = document.getElementById('promo-message');

    // โหลดจำนวนสิทธิ์การใช้ล่าสุดจากหน่วยความจำ
    let usedCount = parseInt(localStorage.getItem('promo_LAOS2024_used_count')) || 0;

    if (code === "LAOS2024") {
        // ตรวจสอบว่าสิทธิ์เต็ม 50 ครั้งหรือยัง
        if (usedCount >= 50) {
            promoCode = "";
            promoMessage.textContent = "ລະຫັດນີ້ຖືກນຳໃຊ້ຄົບ 50 ຄັ້ງແລ້ວ (ສິດເຕັມແລ້ວ).";
            promoMessage.className = "error";
        } else {
            promoCode = code;
            const remaining = 50 - usedCount;
            promoMessage.textContent = `LAOS2024: ຫຼຸດ 10% (ເຫຼືອສິດນຳໃຊ້ ${remaining} ຄັ້ງ)`;
            promoMessage.className = "success";
        }
    } else {
        promoCode = "";
        promoMessage.textContent = code ? "ລະຫັດສ່ວນຫຼຸດບໍ່ຖືກຕ້ອງ." : "";
        promoMessage.className = "error";
    }
    renderUI();
}

function renderBagItems() {
    const cartList = document.getElementById('cart-list-text');

    if (basket.length === 0) {
        cartList.textContent = localizedEmptyBagText;
        cartList.classList.remove('has-overflow', 'is-collapsed');
        cartMoreButton.classList.add('is-hidden');
        cartMoreButton.classList.remove('is-expanded');
        return;
    }

    if (basket.length <= 2) {
        isCartListExpanded = false;
    }

    const bagItems = document.createDocumentFragment();
    basket.forEach((item, index) => bagItems.appendChild(createBagItem(item, index)));
    cartList.replaceChildren(bagItems);
    updateCartMoreButton(cartList);
}

function updateCartMoreButton(cartList) {
    const hasOverflowItems = basket.length > 2;

    cartList.classList.toggle('has-overflow', hasOverflowItems);
    cartList.classList.toggle('is-collapsed', hasOverflowItems && !isCartListExpanded);
    cartMoreButton.classList.toggle('is-hidden', !hasOverflowItems);
    cartMoreButton.classList.toggle('is-expanded', isCartListExpanded);
}

function createBagItem(item, index) {
    const bagItem = bagItemTemplate.content.cloneNode(true);

    bagItem.querySelector('.bag-item-number').textContent = index + 1;
    bagItem.querySelector('.bag-item-main strong').textContent = item.name;
    bagItem.querySelector('.bag-item-main span').textContent = `ເບີ ${item.size}`;
    bagItem.querySelector('.bag-item-side strong').textContent = `${item.price.toLocaleString()} Kip`;
    bagItem.querySelector('button').addEventListener('click', () => removeCartItem(index));

    return bagItem;
}

function removeCartItem(index) {
    basket.splice(index, 1);
    renderUI();
}

function resetCart() {
    if (confirm("ຕ້ອງການລ້າງລາຍການທັງໝົດບໍ?")) {
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
        alert("ກະລຸນາໃສ່ຂໍ້ມູນໃຫ້ຄົບ ແລະ ເລືອກສິນຄ້າ.");
        return;
    }

    // หากมีการใช้โค้ดส่วนลด และสิทธิ์ยังไม่เต็ม ให้ระบบหักโควตาออก 1 สิทธิ์ลงฐานข้อมูลจำลอง
    if (promoCode === "LAOS2024") {
        let usedCount = parseInt(localStorage.getItem('promo_LAOS2024_used_count')) || 0;
        if (usedCount < 50) {
            localStorage.setItem('promo_LAOS2024_used_count', usedCount + 1);
        } else {
            alert("ຂໍອະໄພ, ສິດລະຫັດສ່ວນຫຼຸດນີ້ເຕັມແລ້ວໃນລະຫວ່າງການເຮັດລາຍການ.");
            renderUI();
            return;
        }
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
