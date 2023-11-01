import React from "react";
import styles from "./footer.module.css"
// const footerstyle ={
//     padding: 20,
//     backgroundColor:'black',
//     color:'white',
//     fontWeight:700,
//     textAlign:"center",
//     fontSize:30,
//     marginTop:30

// }

const Footer = ()=>{
    return(
        <footer className={styles.footer}>


        <article className={styles.footercard1}>
            <div className={styles.footercard1question}>Questions? Call 000-800-919-1694</div>
            <div className={styles.footercard1buttons}>
                <button className={styles.footercard1button}>FAQ</button>
                <button className={styles.footercard1button}>Media Centre</button>
                <button className={styles.footercard1button}>Ways to Watch</button>
                <button className={styles.footercard1button}>Cookie Preferences</button>
                <button className={styles.footercard1button}>Speed Test</button>
            </div>
            <div className={styles.footersection2}>
                <div className={styles.langDropdown}>
                    <select name={styles.language}>
                        <option>English</option>
                        <option>Tamil</option>
                        <option>Telugu</option>
                    </select>
                </div>


            </div>
            <p className={styles.footerText}>Netflix India</p>

        </article>
        <article className={styles.footercard1}>
            <div className={styles.footercard1question}></div>
            <div className={styles.footercard1buttons}>
                <button className={styles.footercard1button}>Help Centre</button>
                <button className={styles.footercard1button}>Investor Relations</button>
                <button className={styles.footercard1button}>Terms of Use</button>
                <button className={styles.footercard1button}>Corporate Information</button>
                <button className={styles.footercard1button}>Legal Notices</button>
            </div>

        </article>
        <article className={styles.footercard1}>
            <div className={styles.footercard1question}></div>
            <div className={styles.footercard1buttons}>
                <button className={styles.footercard1button}>Account</button>
                <button className={styles.footercard1button}>Jobs</button>
                <button className={styles.footercard1button}>Privacy</button>
                <button className={styles.footercard1button}>Contact Us</button>
                <button className={styles.footercard1button}> Only on Netflix</button>
            </div>

        </article>

    </footer>
    
    )
}

export default Footer;