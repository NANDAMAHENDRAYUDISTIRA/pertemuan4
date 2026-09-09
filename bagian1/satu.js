let price = 20000;
let discountpercent = 5

function calculateDiscountedPrice(price, discountPercent) {
 return price - (price * discountPercent) / 100;
}
console.log(calculateDiscountedPrice(price, discountPercent));