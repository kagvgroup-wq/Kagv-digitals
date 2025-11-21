function buyProduct(name){
    alert("You selected " + name + " from KAGV Digitals!");
}
// ----- Simple Cart System -----
let cartCount = 0;

// Load saved cart count
if (localStorage.getItem("cartCount")) {
    cartCount = parseInt(localStorage.getItem("cartCount"));
    updateCart();
}

// Target all "Add to Cart" buttons
const buttons = document.querySelectorAll(".product button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        addToCart();
        showMessage("Item added to cart!");
    });
});

// Add item to cart
function addToCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    updateCart();
}

// Update Cart Icon Number
function updateCart() {
    const cartElement = document.querySelector(".cart");
    cartElement.innerHTML = `🛒 Cart (${cartCount})`;
}

// Simple popup message
function showMessage(text) {
    let msg = document.createElement("div");
    msg.innerText = text;

    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.right = "20px";
    msg.style.padding = "10px 20px";
    msg.style.background = "#ffa41c";
    msg.style.color = "#000";
    msg.style.borderRadius = "6px";
    msg.style.fontWeight = "bold";
    msg.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    msg.style.zIndex = "1000";

    document.body.appendChild(msg);

    // Remove message after 2 seconds
    setTimeout(() => msg.remove(), 2000);
}


let cartCount = 0;

// load saved cart
if (localStorage.getItem("flipkartCart")) {
    cartCount = parseInt(localStorage.getItem("flipkartCart"));
    updateCart();
}

document.querySelectorAll(".product button").forEach(btn => {
    btn.addEventListener("click", () => {
        addToCart();
        showMessage("Added to Cart!");
    });
});

function addToCart() {
    cartCount++;
    localStorage.setItem("flipkartCart", cartCount);
    updateCart();
}

function updateCart() {
    document.querySelector(".cart").innerHTML = `🛒 Cart (${cartCount})`;
}

// toast popup
function showMessage(msgText) {
    const box = document.createElement("div");
    box.innerText = msgText;

    box.style.position = "fixed";
    box.style.bottom = "25px";
    box.style.right = "25px";
    box.style.padding = "12px 20px";
    box.style.background = "#ff9f00";
    box.style.color = "#000";
    box.style.fontWeight = "bold";
    box.style.borderRadius = "6px";
    box.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

    document.body.appendChild(box);

    setTimeout(() => box.remove(), 2000);
}
