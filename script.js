function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const celsiusInput = document.getElementById('celsius-input');
    
    if (fahrenheitInput.value === '') {
      alert('Please enter a value in Fahrenheit');
      return;
    }
    
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    
    celsiusInput.value = celsius.toFixed(2);
  }
  
  function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    
    if (celsiusInput.value === '') {
      alert('Please enter a value in Celsius');
      return;
    }
    
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
  