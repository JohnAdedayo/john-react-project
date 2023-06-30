import React,{ useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim()!== "") {
            setTodos([...todos, {text:newTodo.trim(),checked:false}]);
            setNewTodo("");
        }
    };
    const handleDeleteTodo =(index) => {
        const newTodos =[...todos ];
        newTodos.splice (index,1);
       setTodos(newTodos);

    };
    const handleToggleTodo = (index) => {
        const newTodos=[...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);

    };

return(
    <div>
        <h1> Task Items</h1>
        <input type ="text" value= {newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo,index) => (
                <li key={index} style={{display:"flex"}}>
                    <div style = {{display:"flex",alignItems:"center"}}>

                    </div>
                    <input type="checkbox"Checked={todo.checked} onChange={()=> handleToggleTodo(index)}/>
                     <span style ={{ marginRight:"10px", textDecoration:todo.checked?"line-through":"none"}}>{todo.text}</span>
                    <button style={{marginTop:"5px",marginbottom:"5px"}}onClick={() => handleDeleteTodo(index)}>
                    Delete</button>
                </li>
            ))}
        </ul>
    </div>
);

};
export default TodoList; 