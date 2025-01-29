export default function Medal({ type, count }) {
    return (
      <div className={`medal ${type}`}>
        <span>{type.charAt(0).toUpperCase() + type.slice(1)}: {count}</span>
      </div>
    );
  }
  