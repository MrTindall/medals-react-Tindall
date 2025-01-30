import { useState, useRef } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States"},
    { id: 2, name: "China"},
    { id: 3, name: "France"},
  ]);

  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  function handleDelete(countryId) {
    setCountries(countries.filter((c) => c.id !== countryId));
  }

  return (
    <div>
      <header className="app-header">Medals</header>
      {countries.map((country) => (
        <Country key={country.id} country={country} medals={medals.current} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
