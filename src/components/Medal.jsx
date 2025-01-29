export default function Medal({ type, count }) {
    return (
      <div className={`medal ${type}`}>
        <h4>{type.charAt(0).toUpperCase() + type.slice(1)}: {count}</h4>
      </div>
    );
  }
  