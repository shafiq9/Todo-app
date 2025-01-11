import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (newItem.trim() === "") return; // Prevent submission of empty or whitespace-only items

        onSubmit(newItem.trim()); // Pass the trimmed value to the parent

        setNewItem(""); // Clear the input field after adding a new item
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="btn" type="submit">
                Add
            </button>
        </form>
    );
}
