// Function 2: calcAverageCalories
function calcAverageCalories(days) {
    if (days.length === 0) return 0;
    let allCalories = 0;
    for (let day of days) {
      allCalories += day.calories;
    }
    return allCalories / days.length;
  }

  function testCalcAverageCalories() {
    const output = document.getElementById('caloriesOutput');
    output.textContent = `
      Test 1: ${calcAverageCalories([
        { day: "monday", calories: 3010 },
        { day: "tuesday", calories: 3200 },
        { day: "wednesday", calories: 3120 },
        { day: "thursday", calories: 2900 },
        { day: "friday", calories: 3450 },
        { day: "saturday", calories: 3280 },
        { day: "sunday", calories: 3300 },
      ])}

      Test 2: ${calcAverageCalories([
        { day: "monday", calories: 2040 },
        { day: "tuesday", calories: 2270 },
        { day: "wednesday", calories: 2420 },
        { day: "thursday", calories: 1900 },
        { day: "friday", calories: 2370 },
        { day: "saturday", calories: 2280 },
        { day: "sunday", calories: 2610 },
      ])}

      Test 3: ${calcAverageCalories([])}
    `;
  }
