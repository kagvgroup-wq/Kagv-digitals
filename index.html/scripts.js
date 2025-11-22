// ==================== CART LOGIC ====================
let cart = JSON.parse(localStorage.getItem("kagvCart")) || [];

const cartCountElem = document.querySelector(".cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartPopup = document.getElementById("cart-popup");
const cartTotalElem = document.getElementById("cart-total");

// Initialize Cart UI
updateCartUI();

// Add to Cart
document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const productDiv = btn.parentElement;
        const id = productDiv.dataset.id;
        const name = productDiv.dataset.name;
        const price = parseInt(productDiv.dataset.price);

        const existing = cart.find(item => item.id === id);
        if(existing){
            existing.qty += 1;
        } else {
            cart.push({id, name, price, qty: 1});
        }

        saveCart();
        updateCartUI();
        showMessage("Added to Cart!");
    });
});

// Cart icon click
cartCountElem.addEventListener("click", () => {
    cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
});

// Close cart
document.getElementById("close-cart").addEventListener("click", () => {
    cartPopup.style.display = "none";
});

// Remove item from cart
cartItemsContainer.addEventListener("click", e => {
    if(e.target.classList.contains("remove-btn")){
        const id = e.target.dataset.id;
        cart = cart.filter(i => i.id !== id);
        saveCart();
        updateCartUI();
    }
});

// Update Cart UI
function updateCartUI(){
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCountElem.innerText = `🛒 Cart (${totalQty})`;

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item=>{
        totalPrice += item.price * item.qty;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name} x ${item.qty} - ₹${item.price * item.qty}</span>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
    });
    cartTotalElem.innerText = totalPrice;
}

// Save cart to localStorage
function saveCart(){
    localStorage.setItem("kagvCart", JSON.stringify(cart));
}

// ==================== DARK MODE ====================
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ==================== LOGIN POPUP ====================
const loginBtn = document.querySelector(".login-btn");
const loginPopup = document.getElementById("login-popup");
const loginMethod = document.getElementById("login-method");
const usernameFields = document.getElementById("username-fields");
const emailFields = document.getElementById("email-fields");
const mobileFields = document.getElementById("mobile-fields");
const closeLogin = document.getElementById("close-login");
const loginBtns = document.querySelectorAll("#login-btn");

// Open login popup
loginBtn.addEventListener("click", () => {
    loginPopup.style.display = "block";
});

// Close login popup
closeLogin.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// Show fields based on dropdown selection
loginMethod.addEventListener("change", () => {
    const value = loginMethod.value;
    usernameFields.style.display = value === "username" ? "block" : "none";
    emailFields.style.display = value === "email" ? "block" : "none";
    mobileFields.style.display = value === "mobile" ? "block" : "none";
});

// Login button functionality
loginBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = loginMethod.value;
        if(value === "username"){
            const user = document.getElementById("username").value;
            const pass = document.getElementById("userpass").value;
            if(user && pass) showMessage(`Logged in as ${user}`);
            else showMessage("Enter Username and Password");
        } else if(value === "email"){
            const email = document.getElementById("email").value;
            const pass = document.getElementById("emailpass").value;
            if(email && pass) showMessage(`Logged in with Email: ${email}`);
            else showMessage("Enter Email and Password");
        } else if(value === "mobile"){
            const mobile = document.getElementById("mobile").value;
            const otp = document.getElementById("otp").value;
            if(mobile && otp) showMessage(`Logged in with Mobile: ${mobile}`);
            else showMessage("Enter Mobile and OTP");
        }
        loginPopup.style.display = "none";
    });
});

// ==================== TOAST MESSAGE ====================
function showMessage(msg){
    const box = document.createElement("div");
    box.innerText = msg;
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
    setTimeout(()=> box.remove(),2000);
}
