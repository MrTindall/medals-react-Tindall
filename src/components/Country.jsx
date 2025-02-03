import Medal from "./Medal";

export default function Country({ country, onIncrement, onDecrement }) {
  const totalMedals = country.gold + country.silver + country.bronze;

  return (
    <div className="country">
      <h3>{country.name} - Total Medals: {totalMedals}</h3>
      <div className="medals-container">
        <Medal type="gold" count={country.gold} onIncrement={onIncrement} onDecrement={onDecrement} countryId={country.id} />
        <Medal type="silver" count={country.silver} onIncrement={onIncrement} onDecrement={onDecrement} countryId={country.id} />
        <Medal type="bronze" count={country.bronze} onIncrement={onIncrement} onDecrement={onDecrement} countryId={country.id} />
      </div>
    </div>
  );
}
