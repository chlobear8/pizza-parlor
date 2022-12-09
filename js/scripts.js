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

Pizza.prototype.toppingSelection = function() {
  const t1 = "pepperoni";
  if (this.topping === t1) {
    this.toppingSelection;
  }
};

// Pizza.prototype.toppingSelection = function() {
//   const pepperoni = "pepperoni";
//   let toppings = [pepperoni];
//   for (let i=0, i<toppings.length; i+=1) {
//     if (toppings[i] === 0) {
//       toppingSelection.push(toppings[i].value);
//     }
//   }
// };