//SHITTY MUSIC//
$(document).ready(function () {
    let track = document.getElementById('track');

    let controlBtn = document.getElementById('play-pause');

    function playPause() {
        if (track.paused) {
            track.play();
            controlBtn.textContent = "Pause";
            controlBtn.className = "pause";
        } else {
            track.pause();
            controlBtn.textContent = "Play";
            controlBtn.className = "play";
        }
    }

    $(controlBtn).on("click", playPause);
    $(track).on("ended", function () {
        controlBtn.className = "play";
    });
});
//END SHITTY MUSIC//


//BUTTON SHITTY MUSIC//
$('#guitar').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Guitareaccoustique.wav";
    obj.play();
});
$('#guitarelectric').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Guitareelectrique.wav";
    obj.play();
});
$('#ukulele').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Ukulele.wav";
    obj.play();
});
$('#ukuleleE').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/UkuleleE.wav";
    obj.play();
});
$('#violon').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Violon.wav";
    obj.play();
});
$('#violoncelle').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Violoncelle.wav";
    obj.play();
});
$('#mandoline').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Mandoline.wav";
    obj.play();
});
$('#bass').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Bass.wav";
    obj.play();
});
$('#tambourin').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Tambourin.wav";
    obj.play();
});
$('#drums').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Drums.wav";
    obj.play();
});
$('#djembe').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Djembe.wav";
    obj.play();
});
$('#maracas').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Oeufs.wav";
    obj.play();
});
$('#trompette').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Trompette.wav";
    obj.play();
});
$('#harmonica').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Harmonica.wav";
    obj.play();
});
$('#cor').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Cor.wav";
    obj.play();
});
$('#flute').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Flute.wav";
    obj.play();
});
$('#piano').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Piano.wav";
    obj.play();
});
$('#melodica').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Melodica.wav";
    obj.play();
});
$('#synth').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Synthe.wav";
    obj.play();
});
$('#accordeon').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Accordeon.wav";
    obj.play();
});
$('#thing').on('click', function () {
    var obj = document.createElement("audio");
    obj.src = "./sounds/Thing.wav";
    obj.play();
});

//MODALE//
// RECUP LA MODALE
// let modale = $('#modalePanier');

// RECUP LE BOUTON QUI OUVRE LA MODALE --> panier
// let btnpanier = $('#panier');

// RECUP L'ELEMENT QUI FERME LA MODALE --> croix
// let fermeLaModale = $('.fermeture-modale');

// $(function () {
// OUVERTURE DE LA MODALE AU CLIC DU PANIER
// $(btnpanier).click(function () {
//     let Name = $('.AddToCart').attr('data-name');
//     let Price = $('.AddToCart').attr('data-price');
//     $(modale).css('display', 'block');
//     $('#BasketItem').add();
// });
// FERMETURE DE LA MODALE AU CLIC DE LA CROIX
//     $(fermeLaModale).click(function () {
//         $(modale).css('display', 'none');
//     });
// });
//FIN MODALE//



//POP UP ITEM
$(function () {
    $('[data-toggle="popover"]').popover();

});
//FIN POP UP ITEM//





//SHOPPING BASKET//

//this goes to get all the buttons 'I want this'
let carts = document.querySelectorAll('.AddToCart');
//array of all the products
let products = [{
        instrument: 'Guitare accoustique',
        tag: 'guitareaccoustique',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Guitare électrique',
        tag: 'guitareélectrique',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Ukulélé',
        tag: 'ukulélé',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Ukulélé électrique',
        tag: 'ukuléléélectrique',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Violon',
        tag: 'violon',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Violoncelle',
        tag: 'violoncelle',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Mandoline',
        tag: 'mandoline',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Basse électrique', 
        tag: 'basseélectrique',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Tambourin',
        tag: 'tambourin',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Batterie',
        tag: 'batterie',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Djembé',
        tag: 'djembé',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Maracas',
        tag: 'maracas',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Trompette',
        tag: 'trompette',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Harmonica',
        tag: 'harmonica',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Cor',
        tag: 'cor',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Flûte',
        tag: 'flûte',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Super cool piano',
        tag: 'supercoolpiano',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Melodica Power',
        tag: 'melodicapower',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Synth',
        tag: 'synth',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'Awesome accordian',
        tag: 'awesomeaccordian',
        price: 150,
        inCart: 0
    },
    {
        instrument: 'African Thingy',
        tag: 'africanthingy',
        price: 150,
        inCart: 0
    },

]
//console.log(products);
//this is a loop to add items to cart
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
//this won't run unless we call it
// Checks if local storage has existing product numbers. Display on screen what is currently in local storage.
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.quantity').textContent = productNumbers;
    }
}

// This function is to know how many items are being added to the cart.
function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers); //turns product number into a number
    let quantity = document.querySelector('.quantity');
    //this condition is to check if there are already items in local storage 

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    //this just updates our info in local storage
    if (action == "decrease") {
        localStorage.setItem('cartNumbers', productNumbers - 1)
        quantity.textContent = productNumbers - 1;
    } else if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        quantity.textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        quantity.textContent = 1;
    }

    setItems(product);
}

// Function that tells us which item is clicked
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems); //this needs to be passed as a JSON object into the local storage. Must stingify
    //if there is something already in the cart then we want to increase the quantity
    if (cartItems != null) {
        //here we're checking to see if the next product clicked is undefined then we want to update the cart by keeping what's in in (...rest operator from JS)
        //then we put in the new product objectS
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        } //this is the first time you click when there's nothing in the cart
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// Tells us the total price.
function totalCost(product, action) {
    // console.log('The product price is ', product.price);

    let cartCost = localStorage.getItem('totalCost');

    // console.log('My cartCost is ', cartCost);
    // console.log(typeof cartCost);

    if (action == "decrease") {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost - product.price);
    } else if (cartCost != null) {
        cartCost = parseInt(cartCost); //need to update this variable because local storage returns a string and we need a number!
        localStorage.setItem('totalCost', cartCost + product.price);

    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

// This function displays what we have in the cart.
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    let totalProducts = document.querySelector('.total-products');
    totalProducts.innerHTML =   
    `<div class="basketTotalContainer">
    <h4>YOUR CART IS EMPTY, ARE YOU SERIOUS?!</h4>
    </div>`
    ;
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=
                `
                <div class="container-product d-flex mb-2">
                <div class="product col-3 col-md-5 d-flex flex-wrap flex-md-nowrap pl-0">
                    <img src="Images/noun_Cross_2811271.svg" class="remove">
                    <img src="Images/Instruments/${item.tag}.png" id="tagImage" class="ml-1 ml-md-0 mt-md-2 mb-md-2">
                    <div class="d-flex align-items-center ml-1">
                        <span id="${item.tag}" class="nameItem" style="color: black;">${item.instrument}</span>
                    </div>
                </div>
                <div class="priceItem col-3 col-md-1 text-right">${item.price}</div>
                <div class="quantityItem col-3 col-md-3 text-center pr-0 d-flex justify-content-center align-items-start">
                    <img src="Images/noun_Minus_2811258.svg" class="decrease">
                    <span class="inCart ml-1 mr-1" style="color: black;">${item.inCart}</span>
                    <img src="Images/noun_Plus_2811257.svg" class="increase">
                </div>
                <div class="total-price col-3 col-md-3 text-right pl-2">€${item.inCart * item.price},00</div>
            </div>
            `;//back ticks to inject variables inside with a string
            let totalProducts = document.querySelector('.total-products');
            totalProducts.innerHTML = `  
            <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                TOTAL ITEMS
            </h4>
            <h4 class="basketTotal">
            €${cartCost},00
            </h4> 
            </div>
            `;
        });  
    }
    
    deleteButtons();
    upDownQuantity();


}


// Remove items from our cart.
function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.remove');
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    let totalProducts = document.querySelector('.total-products');
   


    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            
            productName = deleteButtons[i].parentElement.querySelector('span').id.trim().toLowerCase().replace(/ /g, '');
            localStorage.setItem('cartNumbers', productNumbers - (cartItems[productName].inCart));

            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            

            displayCart();
            onLoadCartNumbers();
            // totalProducts.innerHTML = `<h4 class="basketTotal">Your cart is empty... ARE YOU SERIOUS??</h4>`
            // ;
             
        });
    
    }

  
}


// To increase or decrease our items in the cart.
function upDownQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);
    

    for (let i = 0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            //we don't want to show zero
            if ((cartItems[currentProduct].inCart > 1)) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));

                displayCart(); //to refresh cart show new values
            }
            console.log(decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim());
        });
    }
    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;

            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();

            {
                cartItems[currentProduct].inCart += 1;
                cartNumbers(cartItems[currentProduct], "increase");
                totalCost(cartItems[currentProduct], "increase");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart(); //to refresh cart show new values
               //console.log(currentProduct);
            }
        })
    }
    
}

onLoadCartNumbers();
displayCart();

//FIN SHOPPING BASKET//