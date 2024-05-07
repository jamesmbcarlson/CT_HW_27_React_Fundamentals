import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
        <div className={styles.containerContainer}>
            <div className={styles.textContainer}>
                <h2>Contact Me!</h2>
                <p>Go on! Feel free!</p>
                <h3><a href="mailto:jamesmbcarlson@gmail.com">jamesmbcarlson@gmail.com</a></h3>
                <h4><a href="https://www.jamesmbcarlson.com/">My Real Portfolio</a></h4>
                <h4><a href="https://www.linkedin.com/in/james-carlson-12098683/">LinkedIn</a></h4>
                <h4><a href="https://jamescarlson.netlify.app/">Another Other Portfolio</a></h4>
            </div>
        </div>
        <p>&copy; 2024 James Carlson</p>
    </div>
        
  )
}

export default Contact
