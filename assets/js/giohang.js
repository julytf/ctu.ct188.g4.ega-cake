var container = document.querySelector('.cart-sum tbody')
var sumSpan = document.querySelector('span.sum')
var sum = 0

Object.values(productList).some((product) => {
    let quantity = localStorage.getItem(product.id)
    if(!quantity)
        return;
    let tr = document.createElement('tr')
    tr.classList = 'sanpham'
    tr.innerHTML = `
        <td class="sanpham">
            <img src="${product.img}" alt="" />
            <p>${product.name}</p>
        </td>
        <td class="gia">
            <p>
                <span>${product.price}</span><sup>đ</sup>
            </p>
        </td>
        <td class="soluong">
            <input type="number" name="" id="" value="${quantity}" min="0" />
        </td>
        <td class="tongtien">
            <p>
                <span>${product.price*quantity}</span><sup>đ</sup>
            </p>
        </td>
    `
    sum += product.price*quantity
    sumSpan.textContent = sum
    container.append(tr)
})
