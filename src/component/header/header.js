import styles from "./header.module.css";
import logo from "../../assets/your-resume-logo.png";
const Header = () => {
    return (
        <div className={`container ${styles["header-container"]}`}>
            <div className={styles.header}>
                <a className={styles["header-logo"]} href="/">
                    <img src={logo} className={styles["logo-img"]} />
                </a>
                <div className={styles["header-options"]}>
                    <li className={styles["header-submenu"]}>
                        <a
                            href="#about"
                            className={styles["header-submenu-links"]}
                        >
                            About Us
                        </a>
                    </li>
                    <li className={styles["header-submenu"]}>
                        <a
                            href="#contact-us"
                            className={styles["header-submenu-links"]}
                        >
                            Contact Us
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
};
export default Header;
