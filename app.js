//update casing Quantity
function updateProduct(product,price,isIncresing) {
    let productQuantity = document.getElementById(product + '-quantity');
    let productQuantityValue = productQuantity.value;

    if(isIncresing == true) {
        productQuantityValue = parseInt(productQuantityValue) + 1;
    } else if(productQuantityValue > 0) {
        productQuantityValue = parseInt(productQuantityValue) - 1;
    }
    productQuantity.value = productQuantityValue;

    //update product total price
   let productTotalPrice = document.getElementById(product + '-total-price');
   let productTotalAmount = productQuantityValue * price;
   productTotalPrice.innerText = productTotalAmount;

   //update subTotal
   calculateTotalBill()
}

//get product quantity
function getProductQuantity(product) {
    let productQuantity = document.getElementById(product + '-quantity');
    let productQuantityNumber = parseInt(productQuantity.value);
    return productQuantityNumber;
}

//calculate total bill 
function calculateTotalBill() {
    //subtotal
    let phoneBill = getProductQuantity('phone') * 1200;
    let casingBill = getProductQuantity('casing') * 60;
    let subTotal = phoneBill + casingBill;
    document.getElementById('sub-total').innerText = subTotal;
    //tax
    let taxAmount = (subTotal / 100) * 10;
    document.getElementById('tax-amount').innerText = taxAmount;
    //totalBill
    let totalBill = subTotal + taxAmount;
    document.getElementById('total-amount').innerText = totalBill;
}



//phone increse button
document.getElementById('phone-increment').addEventListener('click', function() {
    updateProduct('phone', 1200, true)
})

//phone decrease button
document.getElementById('phone-decrement').addEventListener('click', function() {
    updateProduct('phone', 1200, false)
})


//casing increment button
document.getElementById('casing-increment').addEventListener('click', function() {
   updateProduct('casing',60,true)
})


//casing decrement button
document.getElementById('casing-decrement').addEventListener('click', function() {
    updateProduct('casing',60, false)
 })


