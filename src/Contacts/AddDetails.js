import React, { useState ,useRef } from 'react';
import classes from './AddDetails.module.css';
import Card from '../UI/Card.js'
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const AddDetails = (props) => {
    const [error, setError] = useState();
    const enteredContactName=useRef();
    const enteredContactNum=useRef();
    function containsNumbers(str) {
        return /[0-9]/.test(str);
    }
    function validatePhoneNumber(input_str) {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return re.test(input_str);
    }
    const addDetailsHandler = (event) => {
        event.preventDefault();
        const name=enteredContactName.current.value;
        const num=enteredContactNum.current.value;
        if (name.trim().length === 0 || num.trim().length === 0) {
            setError({
                title: 'Empty Detail!',
                message: 'Please fill the contact details ',
            });
            return;
        }
        if (containsNumbers(name) || !(validatePhoneNumber(num))) {
            setError({
                title: 'Invalid Details!',
                message: 'Please fill the contact details with proper name and 10 digits phone number ',
            });
            return;
        }
        props.onAddContacts(name,num);
        enteredContactName.current.value="";
        enteredContactNum.current.value="";
    };
    const errorHandler=()=>{
        setError(null);
    };
    return (
        <>
            {error && <Modal title={error.title} message={error.message} onOkay={errorHandler}></Modal>}
            <Card className={classes.input}>
                <form onSubmit={addDetailsHandler}>
                    <label htmlFor='name'>Contact-Name</label>
                    <input id="name" type='text' ref ={enteredContactName} />
                    <label htmlFor='tel'>Contact-Number</label>
                    <input id="tel" type='tel' ref={enteredContactNum} />
                    <Button type='submit'>Add</Button>
                </form>
            </Card>
        </>
    );
};
export default AddDetails;