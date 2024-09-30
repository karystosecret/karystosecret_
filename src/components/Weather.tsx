import React from 'react';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string; // Add the 'icon' field here
  }>;
  wind: {
    speed: number;
  };
}

interface WeatherProps {
  weather: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ weather }) => {
  const weatherDescription = weather.weather.length > 0 ? weather.weather[0].description : 'No data';
  const weatherIcon = weather.weather.length > 0 ? weather.weather[0].icon : null; // Get the icon code

  return (
    <>
    {weatherIcon && (
      <div className="text-center">
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={weatherDescription}
          className="w-16 h-16 mx-auto"
        />
      </div>
    )}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      <div className="text-center">
        <p className="text-sm font-semibold">Θερμοκρασία</p>
        <p className="text-sm">{weather.main.temp}°C</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold">Συνθήκες</p>
        <p className="text-sm">{weatherDescription}</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold">Υγρασία</p>
        <p className="text-sm">{weather.main.humidity}%</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold">Ταχύτητα Ανέμου</p>
        <p className="text-sm">{weather.wind.speed} m/s</p>
      </div>
    </div>
    </>
  );
};

export default Weather;