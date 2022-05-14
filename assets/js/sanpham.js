/* Lam Chan Vu  */

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

var productsContainer = $('.products > .row')
var productAPI = '/api/product'
// var productList;

// fetch(productAPI)
//     .then(response => response.json())
//     .then(data => productList = data)
//     .then(() => {
//         Object.values($$('.products')).forEach((container) => {
//             let quantity = container.dataset.quantity || 0
//             let q = container.dataset.q || ''
//             displayProduct(productList, container.querySelector('.row'), quantity, q)
//         })
//     })

Object.values($$('.products')).forEach((container) => {
    let quantity = container.dataset.quantity || 0
    let q = container.dataset.q || ''
    displayProduct(productList, container.querySelector('.row'), quantity, q)
})

function displayProduct(productList, container, quantity = -1,  q = '') {
    // console.log(q)
    let count = 0
    Object.keys(productList).some((key, index) => {
        product = productList[key]
        // console.log(product)
        if(product.name.toLowerCase().search(q.toLowerCase()) == -1)
            return
        let item = document.createElement('div')
        item.classList = 'col l-3'
        item.innerHTML = `
            <div class="product">
                <figure class="product__figure">
                    <img
                        src="${product.img}"
                        alt=""
                    />
                </figure>
                <div class="product__body">
                    <div class="product__name">${product.name}</div>
                    <div class="product__cta">
                        <div class="price-box">
                            <div class="price">${product.price}₫</div>` +
                            (!product.discount ? '' : 
                            `<div class="prediscount_price">${product['prediscount-price']}</div>
                            <div class="discount-percent">-${product.discount}%</div>`) +
                        `</div>
                        <button onclick="addToCart('${key}')" class="product__btn btn">
                            <i class="fa-solid fa-bag-shopping icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
        container.append(item)

        count++
        return count == quantity
    })
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}
    if(!cart[id]) 
        cart[id] = 1
    else
        cart[id]++
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartIcon()
}