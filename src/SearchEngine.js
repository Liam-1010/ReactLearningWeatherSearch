import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [cityWeatherText, setCityWeatherText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //alert(`Searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function cityWeather(props) {
    setCityWeatherText(`The weather in ${city} is Sunny`);
    alert(`The weather in ${city} is Sunny`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" onClick={cityWeather} />
      <h2>{cityWeatherText}</h2>
    </form>
  );
}
