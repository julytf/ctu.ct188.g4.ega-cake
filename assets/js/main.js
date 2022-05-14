/* Lam Chan Vu  */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// remove btn
Object.values($$('.close')).forEach((entity, index)=>{
    entity.onclick = (e)=>{
        e.target.parentElement.remove()
    }
})

// nav btn
var navRadio1 = $('#navRadio1') 
var navRadio2 = $('#navRadio2') 
var navList = $('.nav__list') 

navRadio1.onclick = () => {
    navList.style.marginTop = "0"
}

navRadio2.onclick = () => {
    navList.style.marginTop = "-45px"
}

// searchform validation
Object.values($$('.search-form')).forEach((form, index)=>{
    form.onsubmit = (e)=>{
        console.log(form.querySelector('input').value)
        if (form.querySelector('input').value.length == 0) 
            return false;
    }
}
)

// cart-icon update
updateCartIcon()    

window.onstorage = updateCartIcon

function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}
    let sum = Object.values(cart).reduce((sum, quantity) => sum + quantity , 0)
    if(!sum)
        return
    $('.cart-quantity').textContent = sum < 10 ? sum : '9+'
    $('.cart-quantity').classList.remove('cart-quantity--hide')
}