import styles from '../Components/Header.module.css'
const Header = () => {
    return (
            <div className={styles.HeaderContainer}>
                <h1>Contact App</h1>
              <p>
                <a href="#" >Botostart</a> | React.js Full Course
              </p>
            </div>
    );
};

export default Header;