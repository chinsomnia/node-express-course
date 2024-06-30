document.getElementById('productButton').addEventListener('click', () => {
    fetch('/api/v1/products')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('productContainer');
            productContainer.innerHTML = ''; // Clear previous content

            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.textContent = `Product Name: ${product.name}, Price: ${product.price}`;
                productContainer.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            const productContainer = document.getElementById('productContainer');
            productContainer.innerHTML = 'Failed to load products.';
        });
});
