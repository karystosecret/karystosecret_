import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace with your actual weather API URL and key
    const apiKey = '29b6de5e19a5c1388ee114c1e3f2ace1';
    const city = 'Karystos'; // or any other location
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const weatherData = await response.json();
    return NextResponse.json(weatherData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}