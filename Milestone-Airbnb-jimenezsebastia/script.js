function filterByCity(targetCity, listingCityArray) {
  const indices = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      indices.push(i);
    }
  }
  return indices;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  const indices = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      indices.push(i);
    }
  }
  return indices;
}

function filterByTypes(targetTypes, listingTypeArray) {
  const indices = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    for (let j = 0; j < targetTypes.length; j++) {
      if (listingTypeArray[i] === targetTypes[j]) {
        indices.push(i);
        break; // Once a match is found, no need to continue searching
      }
    }
  }
  return indices;
}
