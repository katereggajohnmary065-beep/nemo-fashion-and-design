et cartCount = 0;

function addToCart() {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert("Product added to your cart ⚡");
}


function searchProducts() {

    let search =
        document.getElementById("search").value.toLowerCase();

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        let name =
            product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}

/* =========================================
   VOLTEX SCROLL REVEAL
   ========================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function(element) {

    revealObserver.observe(element);

});
