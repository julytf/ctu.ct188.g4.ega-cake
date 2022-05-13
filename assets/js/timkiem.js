const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

// console.log(params)
const q = params.q

if(q) {
    document.querySelector('.section.search .search-input').value = q
    document.querySelector('.products').dataset.q = q;
}
