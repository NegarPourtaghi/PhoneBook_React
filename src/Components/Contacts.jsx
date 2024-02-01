import { useState } from "react";
import ContactsList from "./ContactsList";
import { Inputs } from "../Constants/Inputs";
import { v4 } from "uuid";
import styles from './Contacts.module.css'
const Contacts = () => {
    const [Contact , setContact]=useState({
        id:"",
        Name:"",
        LastName:"",
        Email:"",
        Number:""
    })
    const [Contacts , setContacts]=useState([])
    const [Alert, setAlert]=useState("")

    const ChangeHandler =(e) =>{
        setContact((Contact)=>({...Contact, [e.target.name]:e.target.value}));
    }


    const ClickHandler=()=>{
        if(!Contact.Name || !Contact.LastName || !Contact.Email || !Contact.Number){
            setAlert("Please complete the form");
            return;
        }
        setAlert("")
        const newContact={...Contact , id: v4()}
        setContacts((Contacts) =>[...Contacts, newContact]);
        setContact({
            Name:"",
            LastName:"",
            Email:"",
            Number:""
        })

    }
    return (
        <div className={styles.Container}>
            <div className={styles.Form}>
                {
                    Inputs.map((item,index) => <input key={index} type={item.type} name={item.name} value={Contact[item.name]} placeholder={item.placeholder} onChange={ChangeHandler}/>)
                }
          
                <button onClick={ClickHandler}>Add Contact</button>
                

            </div>
            <div className={styles.Alert} >{Alert && <p>{Alert}</p>}</div>
                <ContactsList Contacts={Contacts} setContacts={setContacts}/>
        </div>
    );
};

export default Contacts;