import React, { useContext } from 'react'
import styles from './Navbar.module.css';
import { Button } from '@chakra-ui/react';
import { ThemeContext } from '../context/ThemeContext';
const Navbar = () => {
    const { isLight, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={ styles.Navbar}>
       <h3>Navbar</h3>
           <p>Home</p>
           <p>About us </p>
           <p>Contact us</p>

<Button className={styles.btn} onClick={toggleTheme}>
    { `Make ${isLight ? "Dark" : "Light"}`}
</Button>
       
       
     </div>
  )
}

export default Navbar