

function TodoItems(props) {
    return (
        <>
            <h1 className="text-center">Todo List</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Details</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todolist.map((todo, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{todo.sNO}</th>
                                <td>{todo.todo}</td>
                                <td>{todo.des}</td>
                                <td><i className="fa fa-trash text-danger fa-2x" onClick={() => props.onDelete(todo)}></i></td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </>
    );
}

export default TodoItems