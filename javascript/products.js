// these are the product data which are stored in the form of array of objects.
const data = [{title:'Azalea',description:'Here is the description',image:'azalea.jpg',price:'125',originalPrice:'200'},
                {title:'Chinese Elm',description:'Here is the description',image:'chinese-elm.jpg',price:'325',originalPrice:'200'},
                {title:'Dwarf Boxwood',description:'Here is the description',image:'dwarf-boxwood.jpg',price:'205',originalPrice:'200'},
                {title:'Fir',description:'Here is the description',image:'fir.jpg',price:'125',originalPrice:'400'},
                {title:'Japanese Maple',description:'Here is the description',image:'japanese-maple.jpg',price:'100',originalPrice:'200'},
                {title:'Juniper',description:'Here is the descriptioa',image:'juniper.jpg',price:'95',originalPrice:'200'},
                {title:'Pine',description:'Here is the description',image:'pine.jpg',price:'240',originalPrice:'200'},
                {title:'Weeping Fig',description:'Here is the descriptionx',image:'weeping-fig.jpg',price:'105',originalPrice:'200'},
]

// accessing corresponding element from html 
const image = document.querySelector(".image");
const title = document.querySelector('.productTitle');
const description = document.querySelector('.productDescription');
const price = document.querySelector('.priceContainer')

const productContainer = document.getElementById('productContainer')




var cart = [];


const addToTheCart = (index) => {
    const cartItem = data[index];
    cart.push(cartItem);
    const cartArray = JSON.stringify(cart);

    console.log(index)

    if(typeof(window) != undefined){
        window.localStorage.setItem("cart",cartArray);
    } 
}


// path which holds the images for the products.
const path = "./../assets/productImages"

/**
 * map is being used to traverse through elements from the array 
 * and it returns the table tag which holds product data .
 */
productContainer.innerHTML = data.map((item,index) => {
    return (`
    <table>
    <tr><td colspan="2"><img src="./../assets/productImages/${item.image}" class="productImage"/></td></tr>
    <tr><td colspan="2"><p class="productTitle">${item.title}</p></td></tr>
    <tr><td colspan="2"><p class="productDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiut aliquip ex ea commodo consequat. Duis aute irure dt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td></tr>
    <tr class="buttonsContainer">
        <td><div class="priceContainer"><s class="originalPrice">$${item.originalPrice}</s><p class="discountedPrice">$${item.price}</p></div></td>
        <td><div class="addToCart" onclick="openPopUp('${item.title}','${item.price}');addToTheCart('${index}')">Add to Cart</div></td>
    </tr>
    </table>
    `)
}).join("");
/* join("") is chained at the end of map(), since map return array the elements are separated by comma 
and join("") adds nothing between the array elements.*/



const loadCart = () => {
    const array = window.localStorage.getItem("cart")
    cart = JSON.parse(array).map((item) => item);
    console.log("load"+cart)
}
loadCart()




