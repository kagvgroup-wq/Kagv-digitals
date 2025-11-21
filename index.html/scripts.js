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
