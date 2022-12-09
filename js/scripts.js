function Pizza(size, topping) {
  this.size = size;
  this.topping = [];
}

Pizza.prototype.sizeSelection = function() {
  if (this.size === "small") {
    sizeSelection;
  } else if (this.size === "medium") {
    sizeSelection;
  } else {
    (this.size === "large") 
    return sizeSelection;
  }
};

//Pizza.prototype.toppingOptions = function() {
  //let t1 = "pepperoni";
//}

Pizza.prototype.toppingSelection = function() {
  let t1 = "pepperoni";
  if (this.topping === t1) {
    toppingSelection.push(this.topping);
  }


//   for (let i = 0, i < toppings.length; i += 1) {
//     if (toppings[i] === 0) {
//       return toppingSelection.push(toppings[i].value);
//     }
//   }
// };