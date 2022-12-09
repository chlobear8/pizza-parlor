Describe: Pizza()

Test: "It should return a Pizza object with a size small."
Code: const myPizza = new Pizza("small");
Expected Output: Pizza {size: "small"}

Test: "It should return a Pizza object with a size medium."
Code: const myPizza = new Pizza("medium");
Expected Output: Pizza {size: "medium"}

Test: "It should return a Pizza object with a size large."
Code: const myPizza = new Pizza("large");
Expected Output: Pizza {size: "large"}

Test: "It should return a Pizza object with a topping."
Code: const myPizza = new Pizza(["pepperoni]);
Expected Output: Pizza {toppings: ["pepperoni"]}

Test: "It should return a Pizza object with two toppings."
Code: const myPizza = new Pizza(["pepperoni", "pineapple"]);
Expected Output: Pizza {toppings: ["pepperoni", "pineapple"]}

