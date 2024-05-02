function calculateBMI() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const resultDiv = document.getElementById('result');

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.innerText = 'Please enter valid height and weight values.';
    return;
  }

  const bmi = calculateBMIValue(height, weight);
  const bmiCategory = getBMICategory(bmi);

  resultDiv.innerHTML = `<p>Your BMI: <strong>${bmi.toFixed(2)}</strong></p>
                         <p>Category: <strong>${bmiCategory}</strong></p>`;
}

function calculateBMIValue(height, weight) {
  return weight / ((height / 100) * (height / 100));
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obesity';
  }
}
