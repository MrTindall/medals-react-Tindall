export default function Country(props) {
    return (
        <div
            className="country"
        >
            <div>
                <h3>{props.country.name}</h3>
                <h4>Gold Medals: {props.country.gold}</h4>
            </div>

            <button onClick={() => props.onDelete(props.country.id)}>Delete</button>
        </div>
    );
}