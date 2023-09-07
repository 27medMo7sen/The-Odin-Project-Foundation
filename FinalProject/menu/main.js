function showMenu(section) {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";

    const menuItems = {
        all: [
            { name: "Mocha", price: "$5" },
            { name: "Cappuccino", price: "$5" },
            { name: "Spring Rolls", price: "$10" },
            { name: "Pizza", price: "$45" },
            { name: "Mac & Cheese", price: "$45" },
            { name: "Macchiato", price: "$30" },
            { name: "Ristretto", price: "$44" },
        ],
        breakfast: [
            { name: "Mocha", price: "$5" },
            { name: "Cappuccino", price: "$5" },
            { name: "Spring Rolls", price: "$10" },
        ],
        lunch: [
            { name: "Pizza", price: "$45" },
        ],
        dinner: [
            { name: "Mac & Cheese", price: "$45" },
        ],
        budget: [
            { name: "Macchiato", price: "$30" },
        ],
        buffet: [
            { name: "Ristretto", price: "$44" },
        ],
    };

    menuItems[section].forEach(item => {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
        menuCard.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        `;
        menuContainer.appendChild(menuCard);
    });
}
