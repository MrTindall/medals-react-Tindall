import Medal from "./Medal";

export default function Country({ country, medals, onDelete }) {
  return (
    <div className="country">
      <h3>{country.name}</h3>
      <div className="medals-container">
        {medals.map((medal) => (
          <Medal key={medal.id} type={medal.name} count={country[medal.name]} />
        ))}
      </div>
      <button onClick={() => onDelete(country.id)}>Delete</button>
    </div>
  );
}
