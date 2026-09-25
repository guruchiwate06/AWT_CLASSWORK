import React from "react";

function Child({ name, array, number, object }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Number: {number}</p>
            <ul>
                {array.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <pre>{JSON.stringify(object, null, 2)}</pre>
        </div>
    );
}

export default Child;