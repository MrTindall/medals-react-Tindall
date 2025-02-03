import { useState } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  function handleIncrement(countryId, type) {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.id === countryId ? { ...country, [type]: country[type] + 1 } : country
      )
    );
  }

  function handleDecrement(countryId, type) {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.id === countryId && country[type] > 0
          ? { ...country, [type]: country[type] - 1 }
          : country
      )
    );
  }

  const totalGold = countries.reduce((sum, country) => sum + country.gold, 0);
  const totalSilver = countries.reduce((sum, country) => sum + country.silver, 0);
  const totalBronze = countries.reduce((sum, country) => sum + country.bronze, 0);
  const totalMedals = totalGold + totalSilver + totalBronze;

  return (
    <div>
      <header className="app-header">🏅 Olympic Medals 🏅</header>

      <h2>Total Medals: {totalMedals}</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <p style={{ color: "gold" }}>Gold: {totalGold}</p>
        <p style={{ color: "silver" }}>Silver: {totalSilver}</p>
        <p style={{ color: "brown" }}>Bronze: {totalBronze}</p>
      </div>


      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}

export default App;
