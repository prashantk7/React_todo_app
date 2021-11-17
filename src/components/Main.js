import Todos from "./Todos"
function Main(props) {
    return (
        <section>
            <div className="container d-flex flex-column align-items-center justify-content-between">
                <Todos onDelete={props.onDelete} todolist={props.todolist} />
            </div>
        </section>
    );
}
export default Main;
