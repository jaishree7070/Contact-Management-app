import React from "react";
import Card from "../UI/Card";
import classes from './ContactList.module.css'

const ContactList = (props) => {
    return (
        <Card className={classes.contacts}>
        <ul>
            {props.contactList.map(
                (contact) => <li key={contact.id}>{contact.name} PhNo.{contact.num}</li>
                )
            }
        </ul>
        </Card>
    );
};

export default ContactList;