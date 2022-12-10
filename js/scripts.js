//Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getAvailableToppings = function() {
  return [
    ["pepperoni", 3],
    ["pineapple", 2],
    ["jalapeno", 1],
    ["olive", 1],
    ["onion", 1]
  ];
};

Pizza.prototype.getAvailableSizes = function() {
  return [
    "small",
    "medium",
    "large"
  ];
};

Pizza.prototype.sizeSelection = function() {
  let cost = 0;
  if (this.size === "small") {
    cost += 8;
  } else if (this.size === "medium") {
    cost += 10;
  } else {
    cost += 12;
  }

  const selectableToppings = this.getAvailableToppings();
  for(let i=0; i<this.toppings.length; i++) {
    for(let j=0; j<selectableToppings.length; j++) {
      if(this.toppings[i] === selectableToppings[j][0]) {
        cost += selectableToppings[j][1];
      }
    }
  }
  return cost;
};

//UI Logic

function handleFormSubmission (e) {
  e.preventDefault();
  const size = document.getElementById("size").value;
  let toppings = document.querySelectorAll('input[type=checkbox][name=topping]:checked');
  let checkedToppings = [];
  for (let i = 0; i < toppings.length; i++) {
    checkedToppings.push(toppings[i].value);
    };
    
  const pizzaOrder = new Pizza(size, checkedToppings);
  document.getElementById("display-price").innerHTML = "Your pizza will cost: $" + pizzaOrder.sizeSelection(); 
};

window.addEventListener("click", function() {
  document.querySelector("form#radio-form").addEventListener("submit", handleFormSubmission);
});



