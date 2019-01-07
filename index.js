var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  Math.floor(Math.random() * 100) + 1; 
  var newItem = {itemName:item, itemPrice: Math.floor(Math.random() * 100) + 1 }
  cart.push(newItem)
  return `${item} has been added to your cart.`
}


function viewCart() {
if (cart.length === 0) {
    return ("Your shopping cart is empty.")
  } 
var aa = 'In your cart,'
var bb = 'you have'
var w
for (let i = 0; i< cart.length ; i++){

return 'In your cart, you have at.'
}

}  


function total(item) {
   let cost = 0
   for (let i = 0; cart.length > i; i++){
    for (item in cart[i][item])
    {t += cart[i][item]
   }}
     return cost
}

function removeFromCart(item){
let iteminCart = false

for (let i = 0; cart.length > i; i++){
if (cart[i].hasOwnProperty(item))
{iteminCart = true}
cart.splice(0, i)
}

if (false === iteminCart)
return "That item is not in your cart."
}

function placeOrder(cardNumber){
var zzz = "Sorry, we don't have a credit card on file for you."
var xxx = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
if(cardNumber) {
   setCart([]);
 return xxx
  }

else
{return zzz }
}


