import React from "react";
import Card from "./Card";
import Button from './Button';
import ReactDOM from "react-dom";
import classes from './Modal.module.css';

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onOkay} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onOkay}>Okay!!</Button>
            </footer>
        </Card>
    );
};
const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop onOkay={props.onOkay} />,
                document.getElementById('back-drop')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onOkay={props.onOkay} />,
                document.getElementById('errorModal')
            )}
        </>

    );
};

export default Modal;