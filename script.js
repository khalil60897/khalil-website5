document.getElementById("darkModeToggle").onclick = function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    const products = [
        { title: "فستان وردي", category: "فساتين", price: "45$", image: "images/dress1.jpg" },
        { title: "عباية أنيقة", category: "عبايات", price: "60$", image: "images/abaya1.jpg" },
        { title: "بلوزة بيضاء", category: "عروض", price: "25$", image: "images/top1.jpg" }
    ];

    const grid = document.getElementById("productGrid");
    products.forEach(item => {
        const card = document.createElement("div");
        card.className = "product";
        card.setAttribute("data-category", item.category);
        card.innerHTML = \`
            <img src="\${item.image}" alt="\${item.title}">
            <h3>\${item.title}</h3>
            <p>السعر: \${item.price}</p>
            <button onclick="alert('تمت إضافة المنتج إلى السلة')">أضف إلى السلة</button>
        \`;
        grid.appendChild(card);
    });
};

function filterItems(category) {
    document.querySelectorAll(".product").forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
