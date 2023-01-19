var cartItem = []

const cart = document.getElementById('cart');

if(typeof(window) != undefined){
    var products = window.localStorage.getItem("cart")
    cartItem = JSON.parse(products);
    console.log("old"+cartItem)
}

console.log(cartItem)

if((cartItem == null) || cartItem.length == 0){
    console.log("Empty Cart")
    cart.innerHTML = `
        <div class="emptyCartContainer">
            <div class="cartText">
                <p>Empty</p>
                <img src="./../assets/icons/shopping-cart.png" />
            </div>
        </div>
    `
}else{
    cart.innerHTML = cartItem.map((item,index) => {
        return(`
        <table>
        <tr><td colspan="2"><img src="./../assets/productImages/${item.image}" class="productImage"/></td></tr>
        <tr><td colspan="2"><p class="productTitle">${item.title}</p></td></tr>
        <tr><td colspan="2"><p class="productDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiut aliquip ex ea commodo consequat. Duis aute irure dt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td></tr>
        <tr class="buttonsContainer">
            <td><div class="priceContainer"><p class="removeText">Remove</p></div></td>
            <td><div class="addToCart" onclick="checkoutCart('${index}')">Checkout</div></td>
        </tr>
        </table>
        `)
    }).join("")
}

const checkoutCart = (index) => {
    cartItem = cartItem.filter((item,filterIndex)=>{
        return index!=filterIndex;
    })
    window.localStorage.setItem("cart",JSON.stringify(cartItem))
    console.log("new:"+cartItem)
    window.location.reload()
}