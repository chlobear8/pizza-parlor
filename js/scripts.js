//Business Logic

function Pizza(size, checkedToppings) {
  this.size = size;
  this.topping = checkedToppings;
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
    this.cost += 8;
  } else if (this.size === "medium") {
    this.cost += 10;
  } else {
    (this.size === "large") 
    return this.cost += 12;
  }
};

//UI Logic

function handleForm(e) {
  e.preventDefault();
  const pizzaSize = document.querySelector("input[name='size']:checked").value;
  const toppings = getElementByName("topping");
  const checkedToppings = [];
  for (let i=0, i<topping.length; i+=1) {
    if (toppings[i].checked === true) {
      checkedToppings.push(toppings[i].value);
    }
  }

  let pizzaOrder = new Pizza(size, checkedToppings);
  

// Pizza.prototype.getCost = function() {
//   if (this.size === "small") {
//     getCost = (this.cost += 8);
//   }
// }



// Pizza.prototype.toppingSelection = function() {
//   for (let i=0, i<getAvailableToppings.length; i+=1) {
//     if (toppings[i] === pepperoni) {
//       toppingSelection.push(toppings[i]);
//     }
//   }
// };