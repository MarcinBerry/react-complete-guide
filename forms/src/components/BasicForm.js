import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: enteredFirstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameInputReset
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: enteredLastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameInputReset
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailInputReset
    } = useInput(value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));

    const firstNameInputClasses = enteredFirstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = enteredLastNameHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = enteredEmailHasError ? 'form-control invalid' : 'form-control';
    let formIsValid = false;

    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid)
        formIsValid = true;

    const submitFormHandler = (event) => {
      event.preventDefault();

        if(!formIsValid) {
            return;
        }

        console.log("Submitted")
      firstNameInputReset();
      lastNameInputReset();
      emailInputReset();
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName}/>
                    {enteredFirstNameHasError && <p className="error-text">First name should not be empty</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName}/>
                    {enteredLastNameHasError && <p className="error-text">Last name should not be empty</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
                {enteredEmailHasError && <p className="error-text">Email should be real</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
