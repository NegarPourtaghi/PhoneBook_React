import styles from './Contactsitem.module.css'
const ContactItem = ({data:{id, Name , LastName,Email,Number},deleteHandler}) => {
    return (
        <div>
             <li className={styles.Item}>
                        <p>{Name}   {LastName}</p>
                        <p><span>📩</span>{Email}</p>
                        <p><span>📞</span>{Number}</p>

                        <button onClick={()=>deleteHandler(id)}>🗑️</button>


                </li>
        </div>
    );
};

export default ContactItem;