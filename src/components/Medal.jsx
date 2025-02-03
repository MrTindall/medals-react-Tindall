export default function Medal({ type, count, onIncrement, onDecrement, countryId }) {
  return (
    <div className="medal">
      <h4>{type.charAt(0).toUpperCase() + type.slice(1)} Medals: {count}</h4>
      <button onClick={() => onIncrement(countryId, type)}>+</button>
      <button onClick={() => onDecrement(countryId, type)} disabled={count === 0}>-</button>
    </div>
  );
}
