{
    const ApiKey = '91db838bed9a01b318d9fa240fa8beab';
    let currentWeather = {};
    let list = $('#list');
    let cityField = $('#cityField');
    let resetBtn = $('#reset');

    gettingJSON = (city) => {

        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ApiKey}&units=metric`, (json) => {
            currentWeather.city = json.name;
            currentWeather.country = json.sys.country;
            currentWeather.tmp = json.main.temp;
            currentWeather.description = json.weather[0].description;

            addItem(currentWeather, list)
        });
    };

    addItem = (data, parent) => {
        let pattern = `<li><span>${data.city}</span>, ${data.country} ${data.tmp.toFixed(1)}°C, ${data.description}</li>`;
        parent.append(pattern);
      resetBtn.show()
    };

    resetForm = () => {
      currentWeather = {};
      list.html('');
      resetBtn.hide()
    };

    $('#add').on('click', () => {
      if (cityField.val()) gettingJSON(cityField.val())
    });

    resetBtn.on('click', resetForm);
}