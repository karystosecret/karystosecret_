import React from 'react';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

interface WeatherProps {
  weather: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-white">
      <div className="text-center">
        <p className="text-lg font-semibold">Θερμοκρασία</p>
        <p className="text-3xl">{weather.main.temp}°C</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">Συνθήκες</p>
        <p className="text-xl">{weather.weather[0].description}</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">Υγρασία</p>
        <p className="text-xl">{weather.main.humidity}%</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">Ταχύτητα Ανέμου</p>
        <p className="text-xl">{weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;