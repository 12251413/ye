// 全局变量
let cart = [];
let currentSlide = 0;

// 通知栏
const notificationBar = document.getElementById('notification-bar');
const closeNotification = document.querySelector('.close-notification');

// 显示通知栏
setTimeout(() => {
    if (notificationBar) {
        notificationBar.classList.add('show');
    }
}, 500);

// 关闭通知栏
if (closeNotification) {
    closeNotification.addEventListener('click', function() {
        notificationBar.classList.remove('show');
    });
}

// 搜索功能
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const mobileSearchForm = document.getElementById('mobile-search-form');
const mobileSearchInput = document.getElementById('mobile-search-input');

function handleSearch(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input').value.trim().toLowerCase();
    if (searchTerm) {
        // 这里可以添加实际的搜索逻辑
        alert(`搜索: ${searchTerm}`);
        this.querySelector('input').value = '';
    }
}

if (searchForm) {
    searchForm.addEventListener('submit', handleSearch);
}

if (mobileSearchForm) {
    mobileSearchForm.addEventListener('submit', handleSearch);
}

// 产品筛选功能
const applyFiltersBtn = document.getElementById('apply-filters');
const priceFilter = document.getElementById('price-filter');
const typeFilter = document.getElementById('type-filter');
const sortFilter = document.getElementById('sort-filter');

if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', function() {
        const priceValue = priceFilter.value;
        const typeValue = typeFilter.value;
        const sortValue = sortFilter.value;
        
        // 这里可以添加实际的筛选逻辑
        alert(`应用筛选:\n价格区间: ${priceValue}\n装备类型: ${typeValue}\n排序方式: ${sortValue}`);
    });
}

// 回到顶部按钮
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 产品数据
const products = [
    {
        id: 1,
        name: '四人专业帐篷',
        price: 1299,
        description: '专业户外帐篷，采用高强度防水面料，防风防雨，适合家庭露营和团队活动。搭建简单，空间宽敞，透气性好。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20camping%20tent%204%20person%20high%20quality&image_size=landscape_4_3',
        specs: [
            '容量：4人',
            '重量：3.5kg',
            '面料：210D牛津布',
            '防水指数：3000mm',
            '搭建时间：约10分钟'
        ]
    },
    {
        id: 2,
        name: '羽绒睡袋',
        price: 899,
        description: '高品质羽绒睡袋，保暖性能卓越，适合冬季露营。填充优质白鸭绒，重量轻，压缩性好，收纳方便。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=down%20sleeping%20bag%20winter%20camping%20high%20quality&image_size=landscape_4_3',
        specs: [
            '温度范围：-10℃ ~ 5℃',
            '填充：90%白鸭绒',
            '重量：1.2kg',
            '尺寸：200cm × 80cm',
            '收纳尺寸：φ20cm × 35cm'
        ]
    },
    {
        id: 3,
        name: '60L登山背包',
        price: 799,
        description: '专业登山背包，大容量设计，防水面料，多重收纳空间。背负系统舒适，适合长距离徒步和登山活动。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hiking%20backpack%2060L%20waterproof%20high%20quality&image_size=landscape_4_3',
        specs: [
            '容量：60L',
            '重量：2.1kg',
            '面料：防水尼龙',
            '背负系统：可调式铝合金支架',
            '尺寸：80cm × 35cm × 25cm'
        ]
    },
    {
        id: 4,
        name: '户外炉具',
        price: 499,
        description: '便携式户外炉具，高效燃烧，防风设计，适合野外烹饪。折叠式结构，收纳方便，火力调节灵活。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=camping%20stove%20portable%20high%20quality&image_size=landscape_4_3',
        specs: [
            '功率：3000W',
            '重量：350g',
            '尺寸：展开25cm × 25cm，收纳10cm × 10cm',
            '适用燃料：丁烷气罐',
            '燃烧时间：约1.5小时（250g气罐）'
        ]
    }
];

// DOM元素
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const heroSlider = document.getElementById('hero-slider');
const heroSlides = document.querySelectorAll('.hero-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const productModal = document.getElementById('product-modal');
const cartModal = document.getElementById('cart-modal');
const loginModal = document.getElementById('login-modal');
const cartBtn = document.getElementById('cart-btn');
const loginBtn = document.getElementById('login-btn');
const closeModals = document.querySelectorAll('.close-modal');
const viewDetailsBtns = document.querySelectorAll('.view-details');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const addToCartModalBtn = document.querySelector('.add-to-cart-modal');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.querySelector('.checkout-btn');
const contactForm = document.getElementById('contact-form');
const learnMoreBtn = document.getElementById('learn-more-btn');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 移动端菜单
mobileMenuBtn.addEventListener('click', function() {
    mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
});

// 英雄区域轮播
function showSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        // 暂停非活动幻灯片的视频
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
        }
    });
    heroSlides[index].classList.add('active');
    // 播放当前活动幻灯片的视频
    const activeVideo = heroSlides[index].querySelector('video');
    if (activeVideo) {
        activeVideo.play();
    }
    currentSlide = index;
}

function nextSlide() {
    const newIndex = (currentSlide + 1) % heroSlides.length;
    showSlide(newIndex);
}

function prevSlide() {
    const newIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(newIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 产品详情模态框
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const productId = parseInt(this.dataset.productId);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            document.getElementById('modal-product-image').src = product.image;
            document.getElementById('modal-product-title').textContent = product.name;
            document.getElementById('modal-product-price').textContent = `¥${product.price}`;
            document.getElementById('modal-product-description').textContent = product.description;
            
            const specsList = document.getElementById('modal-product-specs');
            specsList.innerHTML = '';
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec;
                specsList.appendChild(li);
            });
            
            // 存储当前产品ID到模态框
            productModal.dataset.productId = productId;
            productModal.classList.add('show');
        }
    });
});

// 关闭模态框
closeModals.forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.classList.remove('show');
    });
});

// 点击模态框外部关闭
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});

// 购物车功能
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">购物车为空</p>';
    } else {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                const itemTotal = product.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="cart-item-info">
                        <h4>${product.name}</h4>
                        <div class="item-price">¥${product.price}</div>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity" data-id="${item.id}">-</button>
                            <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                            <button class="increase-quantity" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                `;
                cartItems.appendChild(cartItem);
            }
        });
    }
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = `¥${total}`;
}

function addToCart(productId, quantity = 1) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity });
    }
    updateCart();
    alert('商品已加入购物车！');
}

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const productId = parseInt(this.dataset.productId);
        addToCart(productId);
    });
});

addToCartModalBtn.addEventListener('click', function() {
    const productId = parseInt(productModal.dataset.productId);
    const quantity = parseInt(document.getElementById('quantity').value);
    addToCart(productId, quantity);
    productModal.classList.remove('show');
});

// 购物车操作
cartItems.addEventListener('click', function(e) {
    if (e.target.classList.contains('decrease-quantity')) {
        const productId = parseInt(e.target.dataset.id);
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            item.quantity--;
            updateCart();
        }
    } else if (e.target.classList.contains('increase-quantity')) {
        const productId = parseInt(e.target.dataset.id);
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity++;
            updateCart();
        }
    } else if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
        const productId = parseInt(e.target.dataset.id || e.target.closest('.remove-item').dataset.id);
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }
});

// 数量输入框变化
cartItems.addEventListener('change', function(e) {
    if (e.target.classList.contains('quantity-input')) {
        const productId = parseInt(e.target.dataset.id);
        const quantity = parseInt(e.target.value);
        const item = cart.find(item => item.id === productId);
        if (item && quantity > 0) {
            item.quantity = quantity;
            updateCart();
        }
    }
});

// 购物车按钮
cartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    cartModal.classList.add('show');
    updateCart();
});

// 结算按钮
checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('购物车为空');
    } else {
        alert('结算功能开发中，敬请期待！');
        cartModal.classList.remove('show');
    }
});

// 登录/注册模态框
loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.add('show');
});

// 登录/注册切换
authTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabName = this.dataset.tab;
        
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(form => form.style.display = 'none');
        
        this.classList.add('active');
        document.querySelector(`.${tabName}-form`).style.display = 'block';
    });
});

// 登录/注册表单提交
const authFormsList = document.querySelectorAll('.auth-form form');
authFormsList.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('登录/注册功能开发中，敬请期待！');
        loginModal.classList.remove('show');
    });
});

// 联系表单提交
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('留言已提交，我们会尽快回复您！');
        this.reset();
    } else {
        alert('请填写完整的信息');
    }
});

// 了解更多按钮
learnMoreBtn.addEventListener('click', function() {
    window.location.href = 'about.html';
});

// 平滑滚动
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        // 检查是否是指向外部文件的链接
        if (targetId.includes('.html')) {
            // 不阻止默认行为，让链接正常跳转
            return;
        }
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            // 关闭移动端菜单
            mobileNav.style.display = 'none';
        }
    });
});

// 社交媒体链接
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('社交媒体功能开发中，敬请期待！');
    });
});

// 初始化
function init() {
    // 初始化轮播
    showSlide(0);
    // 初始化购物车
    updateCart();
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);