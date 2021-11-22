

function TodoItems(props) {
    return (
        <div className="container">
            <h3 className="text-center">Todo List</h3>
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
                    {
                        props.todolist.length !== 0 ?
                            props.todolist.map((todo, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{++index}</th>
                                        <td>{todo.todo}</td>
                                        <td>{todo.des}</td>
                                        <td><i className="fa fa-trash text-danger fa-2x" onClick={() => props.onDelete(todo)}></i></td>
                                    </tr>
                                );
                            })
                            :
                            <tr>
                                <th className="text-center" colSpan={4}
                                >There is no todo left.</th>
                            </tr>
                    }
                </tbody>
            </table>
        </div >
    );
}

export default TodoItems