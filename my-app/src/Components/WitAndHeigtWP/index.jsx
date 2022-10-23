import React , {useState, useEffect} from 'react'


export default function TestSecond(props) {
    const [w, setW] = useState(window.innerWidth);
    const [h, setH] = useState(window.innerWidth);

    useEffect( () => {
        window.addEventListener('resize', () => {
            setW(window.innerWidth);
            setH(window.innerHeight);
        })
    })
    
    return (
        <>
            <p>Width {w}</p>
            <p>Heigth {h}</p>
        </>
    );  
}
