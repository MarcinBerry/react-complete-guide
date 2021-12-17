import Todo from "../models/todo";
import React, {useState} from "react";

type TodosContextObj = {
    items: Todo[];
    addTodo: (todoText: string) => void;
    removeTodo: (id: string) => void;
}
export const TodosContext = React.createContext<TodosContextObj
>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => {
            return prevState.concat(newTodo);
        });
    };
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== todoId);
        });
    };
    const contextValue:TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodoContextProvider;
