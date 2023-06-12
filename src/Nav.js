import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <>
        <h2 className='name'>ShowFlix Movies</h2>
        </>

    )
}

export default Nav
