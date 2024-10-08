'use client';

import React, { useState, useEffect } from "react";
import axios from 'axios';

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

import dynamic from 'next/dynamic'

const Weather = dynamic(() => import("@/components/Weather"), { ssr: false })

const Shops = () =>  {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get<WeatherData>('/api/weather');
                setWeather(response.data);
                setLoading(false);
            } catch (err) {
                setError('Αποτυχία λήψης δεδομένων καιρού');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);
    return (
        <div id="Ships" className="animate-fadeInAnimation p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5]  z-0 w-full md:pt-8 overflow-hidden pb-40 md:pb-40">
        <p className="text-4xl md:text-5xl text-white font-bold text-center  mb-12 z-10 drop-shadow-md tracking-tight">Δρομολόγια Πλοίων</p>
        <p className="text-lg font-semibold text-white text-center mt-0">Ραφήνα - Μαρμάρι</p>
        <div className="grid w-full shadow-xl rounded-md items-center z-10 mt-2 md:mt-4">
            <div className="grid grid-cols-8 grid rows-3 z-10">
                <div className="w-full md:w-40"></div>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-tl-md text-center">Δευτέρα</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Τρίτη</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Τετάρτη</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Πέμπτη</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Παρασκευή</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Σάββατο</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-tr-md text-center">Κυριακή</p>
                
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-tl-md text-center">Ραφήνα-Μαρμάρι </p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center" >9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>

                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-bl-md text-center">Μαρμάρι-Ραφήνα </p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 rounded-br-md text-center" >9:00, 16:00</p>
            </div>
        </div>
        <p className="text-lg font-semibold text-white text-center mt-10">Αγία Μαρίνα - Νέα Στύρα</p>
        <div className="grid w-full shadow-xl items-center mt-2 md:mt-4">
            <div className="grid grid-cols-8 grid rows-3">
                <div className="w-full md:w-40"></div>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-tl-md text-center">Δευτέρα</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Τρίτη</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Τετάρτη</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Πέμπτη</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Παρασκευή</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 text-center">Σάββατο</p>
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-tr-md text-center">Κυριακή</p>
                
                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-tl-md text-center">Αγία Μαρίνα-Νέα Στύρα</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 rounded-bl-md text-center">9:00, 16:00</p>

                <p className="text-[6px] md:text-xs text-black outline outline-1 md:outline-2 outline-white p-1 rounded-bl-md text-center">Νέα Στύρα-Αγία Μαρίνα </p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 text-center">9:00, 16:00</p>
                <p className="text-[8px] md:text-xs outline outline-1 md:outline-2 outline-white p-2 rounded-br-md text-center">9:00, 16:00</p>
            </div>
        </div>
        <div className="mt-16 bg-white bg-opacity-10 rounded-md shadow-md md:shadow-xl p-2">
                <h2 className="text-lg font-semibold text-white text-center mb-0">Ο Καιρός στην Κάρυστο</h2>
                {loading ? (
                    <p className="text-white text-center">Φόρτωση δεδομένων καιρού...</p>
                ) : error ? (
                    <p className="text-white text-center">Σφάλμα: {error}</p>
                ) : weather ? (
                    <Weather weather={weather} />
                ) : null}
            </div>
        </div>   
    );
};

export default Shops;