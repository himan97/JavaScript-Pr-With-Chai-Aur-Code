const myCart = {
product : "watch",
quantity : 2,
price : 999,

purchaseDetails( ){

console.log(`Your Product ${this.product} with quantity ${this.quantity} and your purchase is ${this.price}`);

}

}

myCart.purchaseDetails();