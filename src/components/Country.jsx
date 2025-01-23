import React, { useState } from "react";

function Country() {
    const[name, setName] = useState("United States")
    const [goldMedals, setGoldMedals] = useState(0);

    function handleClick() {
        setGoldMedals(goldMedals + 1);
    }

    return (
        <div
            className="country"
            style={{
                border: `solid 2px red`,
                borderRadius: `8px`,
                padding: `10px`,
            }}
        >
            <div style={{ padding: `10px` }}>
                <label htmlFor="gold-medals" style={{ paddingRight: `10px` }}>
                    {name}
                </label>
                <input
                    type="number"
                    name="gold-medals"
                    id="gold"
                    style={{ width: `100px`, textAlign: "center" }}
                    value={goldMedals}
                />
            </div>

            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Country;