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
          className="w-12 h-12 mx-auto"
        />
      </div>
    )}
    <div className="grid grid-cols-4 gap-2 text-white">
      <div className="text-center">
        <p className="text-[8px] md:text-xs font-semibold">Θερμοκρασία</p>
        <p className="text-[8px] md:text-xs">{weather.main.temp}°C</p>
      </div>
      <div className="text-center">
        <p className="text-[8px] md:text-xs font-semibold">Συνθήκες</p>
        <p className="text-[8px] md:text-xs">{weatherDescription}</p>
      </div>
      <div className="text-center">
        <p className="text-[8px] md:text-xs font-semibold">Υγρασία</p>
        <p className="text-[8px] md:text-xs">{weather.main.humidity}%</p>
      </div>
      <div className="text-center">
        <p className="text-[8px] md:text-xs font-semibold">Ταχύτητα Ανέμου</p>
        <p className="text-[8px] md:text-xs">{weather.wind.speed} m/s</p>
      </div>
    </div>
    </>
  );
};

export default Weather;