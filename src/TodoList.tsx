import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && <p>No Todos</p>}
            {todos.map((todo) => (
                <TodoItem
                    {...todo}
                    key={todo.id} // Fixed the key to use `todo.id` instead of `todos.id`
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}
