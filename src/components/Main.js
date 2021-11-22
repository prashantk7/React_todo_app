import Todos from "./Todos"
import AddTodo from './AddTodo'
// import "./Main.css"
function Main(props) {
    const style = {
        minHeight: "calc(100vh - 30vh)"
    }
    return (
        <section className="main" style={style}  >
            <AddTodo addTodo={props.addTodo} />
            <div className="container d-flex flex-column align-items-center justify-content-between">
                <Todos onDelete={props.onDelete} todolist={props.todolist} />
            </div>
        </section>
    );
}
export default Main;
