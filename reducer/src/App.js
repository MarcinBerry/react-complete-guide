import React, {useContext} from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import MyButton from "./components/UI/MyButton/MyButton";

function App() {
    const ctx = useContext(AuthContext);
    return (
        <>
            <MainHeader/>
            <MyButton/>
            {/*<main>*/}
            {/*  {!ctx.isLoggedIn && <Login />}*/}
            {/*  {ctx.isLoggedIn && <Home />}*/}
            {/*</main>*/}
        </>
    );
}

export default App;
