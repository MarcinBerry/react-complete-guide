import classes from "./MyButton.module.css";

const MyButton = (props) => {
    return <button className={classes.mybutton}>{props.name}</button>;
}
export default MyButton;