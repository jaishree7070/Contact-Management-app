import React, { useState } from 'react';
import AddDetails from './Contacts/AddDetails';
import ContactList from './Contacts/ContactList';
function App() {
  const [contactList, setContactList] = useState([]);
  const addContacts = (cName, cNum) => {
    setContactList((prev) => {
      return [...prev, { name: cName, num: cNum, id:Math.random().toString() }];
    });
  };
  return (
    <>
      <AddDetails onAddContacts={addContacts} />
      <ContactList contactList={contactList} />
    </>
  );
}

export default App;
