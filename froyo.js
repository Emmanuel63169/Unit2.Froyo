//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

let flavors = window.prompt(
    "Enter your flavors below",
"vanilla,vanilla,vanilla,strawberry,coffee,coffee")
console.log(flavors);

let froyoFlavors = flavors.split(",");

const order = {};

for (let i = 0; i < froyoFlavors.length; i++) {
    if (order[froyoFlavors[i]]) {
        order[froyoFlavors[i]]++;
    } else{
        order[froyoFlavors[i]] = 1
    }
}

console.log(order);