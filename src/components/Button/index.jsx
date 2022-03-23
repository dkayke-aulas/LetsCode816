import style from "./style.module.css";

function Button(props) {

    return (
        <button {...props} className={style.button}>
            { props.children ? props.children : "Clique" }
        </button>
    );
}

export default Button;