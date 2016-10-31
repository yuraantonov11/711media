{
    const ApiKey = '91db838bed9a01b318d9fa240fa8beab';
    let currentWeather = {};
    let list = $('#list');
    let cityField = $('#cityField');

    function gettingJSON(city) {

        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ApiKey}&units=metric`, function (json) {
            currentWeather.city = json.name;
            currentWeather.country = json.sys.country;
            currentWeather.tmp = json.main.temp;
            currentWeather.description = json.weather[0].description;

            addItem(currentWeather, list)
        });
    }

    function addItem(data, parent) {
        let pattern = `<li>${data.city}, ${data.country} ${data.tmp.toFixed(1)}°C, ${data.description}</li>`;
        parent.append(pattern);
    }

    $('#add').on('click', function () {
        gettingJSON(cityField.val());
    });
    $('#reset').on('click', function () {
        currentWeather = {};
        list.html('')
    });
}