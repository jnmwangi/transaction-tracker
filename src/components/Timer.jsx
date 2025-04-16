import React, { useEffect, useState } from 'react'

export const Timer = () => {

    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());

    // When there is no dependancies, useEffect callback will be triggered

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)
    }, []); // callback, dependancies

    return (
        <>
            <div >{new Date().toTimeString()}</div>
        </>
    )
}
