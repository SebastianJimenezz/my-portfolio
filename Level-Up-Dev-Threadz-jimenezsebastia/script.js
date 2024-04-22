function showAllProducts(products) {
  products.forEach((product) => {
    newProductCard(product);
  });
}

function getFilteredProducts(productNames, query) {
  return productNames.filter((productName) =>
    productName.toLowerCase().includes(query.toLowerCase())
  );
}

function getConvertedPrices(productPrices, currency) {
  const conversionRates = {
    usd: 1,
    gbp: 0.74, // 1 USD = 0.74 GBP
    jpy: 114.32, // 1 USD = 114.32 JPY
  };

  return productPrices.map((price) =>
    (price * conversionRates.usd) / conversionRates[currency]
  );
}

function getCartTotal(cartPrices) {
  return cartPrices.reduce((total, price) => total + price, 0);
}

showAllProducts(PRODUCTS);
