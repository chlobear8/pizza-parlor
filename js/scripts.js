function Pizza(size, toppingSelection) {
  this.size = size;
  this.topping = toppingSelection;
}

Pizza.prototype.getAvailableToppings = function() {
  return [
    "pepperoni",
    "pineapple",
    "jalapenos",
    "olives",
    "onion"
  ];
};

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



// Pizza.prototype.toppingSelection = function() {
//   for (let i=0, i<getAvailableToppings.length; i+=1) {
//     if (toppings[i] === pepperoni) {
//       toppingSelection.push(toppings[i]);
//     }
//   }
// };