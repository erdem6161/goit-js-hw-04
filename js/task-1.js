 // Function 1: isEnoughCapacity
 function isEnoughCapacity(products, containerSize) {
    let total = 0;
    for (let value in products) {
      total += products[value];
    }
    return total <= containerSize;
  }

  function testIsEnoughCapacity() {
    const output = document.getElementById('capacityOutput');
    output.textContent = `
      Test 1: ${isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)}
      Test 2: ${isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)}
      Test 3: ${isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)}
      Test 4: ${isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)}
    `;
  }
