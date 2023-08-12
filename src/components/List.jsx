/* eslint-disable react/prop-types */
export default function List({ data }) {
    const groceries = data;
    return (
        <div className="list">
            <ul>
                {groceries.map((grocery) => (
                    <ListItem item={grocery} key={grocery.id} />
                ))}
            </ul>
        </div>
    );
}

function ListItem({ item }) {
    const grocery = item;
    return (
        <li key={grocery.id}>
            <input type="checkbox" />
            <span
                style={
                    grocery.checked ? { textDecoration: "line-through" } : {}
                }
            >
                {grocery.name} - {grocery.quantity}
            </span>
        </li>
    );
}
