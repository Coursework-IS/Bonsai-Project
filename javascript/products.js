// these are the product data which are stored in the form of array of objects.
const data = [{title:'Azalea',description:'Azalea is a popular bonsai plant with delicate and vibrant blooms that come in a range of colors including pink, red, white, and purple. It is known for its glossy green leaves and attractive flowers that make it a desirable addition to any bonsai collection. Suitable for both indoor and outdoor growth, Azalea adds a touch of nature to any setting.',image:'azalea.jpg',price:'125',originalPrice:'200'},
                {title:'Chinese Elm',description:'The Chinese Elm is a popular bonsai species known for its gracefully curving branches and small, delicate leaves. Its versatility in adapting to different styles and its ability to tolerate a wide range of temperatures make it a favorite among bonsai enthusiasts. This evergreen tree is ideal for both indoor and outdoor display.',image:'chinese-elm.jpg',price:'200',originalPrice:'325'},
                {title:'Dwarf Boxwood',description:'Dwarf Boxwood is a popular choice for bonsai enthusiasts due to its miniature size and slow growth rate. This broadleaf evergreen features tiny, glossy leaves in a rich green hue that remain lush and vibrant all year long. Its compact shape and versatility make it a great addition to any bonsai collection, adding depth and texture to your designs.',image:'dwarf-boxwood.jpg',price:'200',originalPrice:'205'},
                {title:'Fir',description:'The Fir Bonsai is a stunning, low-maintenance bonsai with needle-like leaves and a conical shape. Ideal for indoor and outdoor displays, it offers a calming presence with its evergreen leaves and sculptural trunk and branches. An excellent choice for bonsai enthusiasts and novices alike.',image:'fir.jpg',price:'125',originalPrice:'400'},
                {title:'Japanese Maple',description:'The Japanese Maple is a beautiful and popular bonsai tree, known for its delicate leaves and stunning autumn colors. Its branches are graceful and delicate, making it an excellent choice for bonsai enthusiasts. This deciduous tree is hardy and adaptable, thriving in both indoor and outdoor environments.',image:'japanese-maple.jpg',price:'100',originalPrice:'200'},
                {title:'Juniper',description:'The Juniper is a popular choice for bonsai enthusiasts due to its versatility and ease of care. This coniferous evergreen features needle-like leaves that come in shades of green, blue, and yellow. With its capacity for intricate pruning and shaping, the Juniper bonsai can be molded into a variety of styles.',image:'juniper.jpg',price:'95',originalPrice:'200'},
                {title:'Pine',description:'The Pine Bonsai is a timeless classic, symbolizing resilience and longevity. With its needle-like leaves, delicate branches and natural grace, this bonsai tree is a breathtaking sight. Perfect for indoor or outdoor display, this slow-growing evergreen features a distinctive shape that can be trained and shaped over time to create a unique piece of living art.',image:'pine.jpg',price:'240',originalPrice:'200'},
                {title:'Weeping Fig',description:'The Weeping Fig (Ficus benjamina) is a popular bonsai species with a graceful, pendulous habit. Its glossy, dark green leaves are ovate in shape, and its branches are often trained to cascade, giving it a unique, flowing appearance. The trees are versatile in adapting to different bonsai styles and it is tolerant to low light.',image:'weeping-fig.jpg',price:'105',originalPrice:'200'},
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
    <tr><td colspan="2"><p class="productDescription">${item.description}</p></td></tr>
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




