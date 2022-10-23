import React from 'react'
import styles from "./Hello.module.css";



export default function Hello(props) {
  const {name} = props;
  return (
    <>
    {/* <p>Hello, React!!!, {props.userName}</p> */}
    <p>Hello, React!!!, {name}</p>
    <p className={styles.wrapper_hello_react}>Hello</p>
    </>
  )
}

