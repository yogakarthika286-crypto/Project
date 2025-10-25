
    let cartCount = 0;
    const cartCountDisplay = document.getElementById('cartCount');
    const addButtons = document.querySelectorAll('.add-cart');

    addButtons.forEach(button => {
      button.addEventListener('click', () => {
        cartCount++;
        cartCountDisplay.textContent = cartCount;
        alert('Item added to cart successfully!');
      });
    });

    const searchInput = document.getElementById('searchInput');
    const filters = document.querySelectorAll('.filter');
    const products = document.querySelectorAll('.product-card');

    function filterProducts() {
      const searchValue = searchInput.value.toLowerCase();
      const activeFilters = Array.from(filters)
        .filter(f => f.checked)
        .map(f => f.value);

      products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        const category = product.dataset.category;

        const matchesSearch = name.includes(searchValue);
        const matchesFilter =
          activeFilters.length === 0 || activeFilters.includes(category);

        if (matchesSearch && matchesFilter) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }

    searchInput.addEventListener('input', filterProducts);
    filters.forEach(f => f.addEventListener('change', filterProducts));