import React, {useContext, useEffect, useReducer, useState} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {value: action.val, isValid: action.val.includes("@")};
    }
    if (action.type === "INPUT_BLUR") {
        return {value: state.value, isValid: state.value.includes("@")};
    }
    return {value: "", isValid: false};
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {value: action.val, isValid: action.val.trim().length > 6};
    }
    if (action.type === "INPUT_BLUR") {
        return {value: state.value, isValid: state.value.trim().length > 6};
    }
    return {value: "", isValid: false};
};
const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: true,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: true,
    });
    const authCtx = useContext(AuthContext);
    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;
    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        };
    }, []);

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({type: "USER_INPUT", val: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: "USER_INPUT", val: event.target.value});
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: "INPUT_BLUR"});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: "INPUT_BLUR"});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input id="email"
                       label="Email"
                       type="email"
                       isValid={emailIsValid}
                       value={emailState.value}
                       onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="password"
                        isValid={passwordIsValid}
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
