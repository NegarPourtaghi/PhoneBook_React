import ContactItem from "./ContactItem";
import styles from './ContactsList.module.css'
const ContactsList = ({Contacts , setContacts}) => {
   const deleteHandler=(id)=>{
    const newContacts=Contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
   }
    return (
        <div className={styles.Container}>
            <h3>Contacts List</h3>
           {
            Contacts.length === 0
            ?<p className={styles.Message}>no Contact</p>
            : <ul className={styles.List}>
            {Contacts.map((Contact) => <ContactItem key={Contact.id} data={Contact} setContacts={setContacts} deleteHandler={deleteHandler} />)}
            </ul>
           }
        </div>
    );
};

export default ContactsList;