import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
        <div className={styles.textContainer}>
            <h2>About Me</h2>
            <p>I live in Denver, CO with my wife and our two pups, Wendell and Peaches. I grew up in Colorado, and am still delighted to call it home!</p>
            <p>I studied Game Design and Development at the University of Colorado Colorado Springs, and more recently attended Coding Temple, an online intensive coding school.</p>
            <p>Professionally, I have worked in graphic design, videography, and hospitality. One of my greatest passions is video game development, and I recently collaborated with a friend to develop and publish our own mobile game.</p>
            <p>Game development has instilled in me a love for programming, that I hope to turn into a new career. I look forward to building bigger and better games and other applications, as I become a more skilled developer.</p>
            <p>I value kindness, humor, integrity, and creative expression in work, and in all aspects of life.</p>
            <p>On a personal note, I am a multifaceted nerd who loves all kinds of games, from cozy indie games to frantic first-person shooters. Likewise, I love quiet drama films, big-budget superhero movies, pulpy horror classics, and everything in between. I love Dungeons & Dragons, LEGO, pour over coffee, and a nice, juicy IPA!</p>
        </div>
    </div>
  )
}

export default About
