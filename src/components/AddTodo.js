import React, { useState } from 'react'

export default function AddTodo(props) {

    const [todoValue, setTodVvalue] = useState("");
    const [desValue, setdesValue] = useState("");
    function submit(e) {
        e.preventDefault();
        props.addTodo(todoValue, desValue);
        setTodVvalue("");
        setdesValue("");
    }


    return (
        <div className="container-fluid bg-dark text-white">
            <div className="row ">
                <div className="col-lg-4 col-md-12">
                    <h3 className="text-center pt-2">Add Todo To List</h3>
                </div>
                <div className="col-lg-8 col-md-12">
                    <form className=" d-flex bg-dark text-white" onSubmit={submit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control m-3 mr-1 text-secondary rounded "
                                placeholder="Add Todo"
                                value={todoValue}
                                onChange={(e) => { setTodVvalue(e.target.value); }}
                                id="todoName"
                                aria-label="todo"
                                aria-describedby="todo"
                                required
                            />
                            <div className="error d-none"></div>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control m-3 rounded text-secondary "
                                placeholder="Add description"
                                value={desValue}
                                onChange={(e) => { setdesValue(e.target.value) }}
                                id="description1"
                                aria-label="description"
                                aria-describedby="description"
                                required
                            />
                            <div className=""></div>
                        </div>
                        <button className="btn btn-outline-primary text-white border-none shadow-none my-2 rounded btn-sm" type="submit">Add Todo</button>
                    </form>
                </div>
            </div>
        </div >
    )
}