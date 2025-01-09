const products = document.querySelectorAll(".product");
const productValue = document.querySelectorAll(".product__quantity-value");
const cartProducts = document.querySelector(".cart__products");

products.forEach((product,i) => {
    products[i].addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target;
        if (target.classList.contains("product__quantity-control_dec")) {
            if (productValue.item(i).textContent > 1) {
                productValue.item(i).textContent--;
            }

        }
        if (target.classList.contains("product__quantity-control_inc")) {
            productValue.item(i).textContent++;
        }
        if (target.classList.contains("product__add")) {

        }
        if (target.classList.contains("product__add")) {
            let targetImage = target.closest(".product").querySelector("img").getAttribute("src");
            let targetId = target.closest(".product").dataset.id;
            let targetValue = target.closest(".product").querySelector(".product__quantity-value").textContent;
            if (cartProducts.children.length !== 0) {
                if (cartProducts.querySelector(`[data-id="${targetId}"]`)) {
                    cartProducts.querySelector(`[data-id="${targetId}"]`).querySelector('.cart__product-count').textContent = Number(cartProducts.querySelector(`[data-id="${targetId}"]`).querySelector('.cart__product-count').textContent) + Number(targetValue);
                } else {
                    cartProducts.innerHTML += `<div class="cart__product" data-id="${targetId}">
                    <img class="cart__product-image" src="${targetImage}">
                        <div class="cart__product-count">${targetValue}</div>
                </div>`
                }
            } else {
                cartProducts.innerHTML += `<div class="cart__product" data-id="${targetId}">
                    <img class="cart__product-image" src="${targetImage}">
                        <div class="cart__product-count">${targetValue}</div>
                </div>`
            }
        }
    })
});