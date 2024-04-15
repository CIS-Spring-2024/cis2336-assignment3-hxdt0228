const menuItems = [
    {
        name: "Coffee",
        description: "Hot brewed coffee",
        price: "$2.50",
        image: "coffee.jpg" 
    },
    {
        name: "Sandwich",
        description: "Classic ham and cheese sandwich",
        price: "$5.00",
        image: "sandwich.jpg"
    },
    {
        name: "Chicken Tenders",
        description: "Classic ham and cheese sandwich",
        price: "$7.00",
        image: "chickentender.jpg"
    },
    {
        name: "Cookie",
        description: "Crisp, chewy, flavorful baked delight.",
        price: "$1.00",
        image: "cookie.jpg"
    }

   
];

const menuContainer = document.getElementById('menu');

function displayMenu() {
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const details = document.createElement('div');
        details.classList.add('menu-item-details');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: ${item.price}`;

        details.appendChild(itemName);
        details.appendChild(itemDesc);
        details.appendChild(itemPrice);

        menuItem.appendChild(img);
        menuItem.appendChild(details);

        menuContainer.appendChild(menuItem);
    });
}

displayMenu();

function placeOrder(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    let orderSummary = "Order Summary:\n";

    for (const [itemName, quantity] of formData.entries()) {
        if (quantity > 0) {
            orderSummary += `${itemName}: ${quantity}\n`;
        }
    }
    alert(orderSummary);
}

displayMenu();

const orderForm = document.createElement('form');
orderForm.id = 'orderForm';
orderForm.addEventListener('submit', placeOrder);

menuContainer.appendChild(orderForm);


menuItems.forEach(item => {
    const itemInput = document.createElement('input');
    itemInput.type = 'number';
    itemInput.name = item.name;
    itemInput.min = 0;
    itemInput.value = 0;

    const itemLabel = document.createElement('label');
    itemLabel.textContent = `${item.name} (${item.price})`;
    itemLabel.appendChild(itemInput);

    orderForm.appendChild(itemLabel);
});

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Place Order';

orderForm.appendChild(submitButton);

