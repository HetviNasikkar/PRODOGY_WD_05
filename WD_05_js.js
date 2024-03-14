function getWeather() {
    const locationInput = document.getElementById('location-input').value;
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
      });
  }
  
  function displayWeather(weatherData) {
    const weatherInfoDiv = document.getElementById('weather-info');
  
    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
  
    const weatherHtml = `
      <h2>Current Weather in ${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;
  
    weatherInfoDiv.innerHTML = weatherHtml;
  }
  