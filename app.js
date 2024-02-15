const apiUrl = 'data.json';

// Counter to track the number of items added to the cart
let cartCounter = 0;

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const productList = document.getElementById('product-list');

        // Create a container for the product cards
        const container = document.createElement('div');
        container.classList.add('container');

        // Create a row for the product cards
        const row = document.createElement('div');
        row.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-3'); // Horizontal cards on medium screens

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col'); // Bootstrap column class

            const cardBody = document.createElement('div');
            cardBody.classList.add('card', 'h-100'); // Add Bootstrap card class and make it full height

            const productName = document.createElement('h3');
            productName.classList.add('card-title'); // Add Bootstrap card title class
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.classList.add('card-text'); // Add Bootstrap card text class
            productPrice.textContent = `Price: ₱${product.price}`;

            const productDescription = document.createElement('p');
            productDescription.classList.add('card-text'); // Add Bootstrap card text class
            productDescription.textContent = `Description: ${product.description}`;

            // Create "Add to Cart" button
            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('btn', 'btn-primary'); // Add Bootstrap button classes
            addToCartButton.textContent = 'Add to Cart';

            // Event listener to handle click on "Add to Cart" button
            addToCartButton.addEventListener('click', () => {
                // Increment cart counter
                cartCounter++;
                // Update cart button text
                addToCartButton.textContent = `Add to Cart (${cartCounter})`;
            });

            cardBody.appendChild(productName);
            cardBody.appendChild(productPrice);
            cardBody.appendChild(productDescription);
            cardBody.appendChild(addToCartButton); // Add button to card body

            productCard.appendChild(cardBody);
            row.appendChild(productCard);
        });

        container.appendChild(row);
        productList.appendChild(container);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();
