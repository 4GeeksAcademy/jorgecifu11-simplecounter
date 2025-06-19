import { useState, useEffect } from "react";
import { Digito } from "./Digito.jsx";
import {Emoji} from "./Emoji.jsx";
export const SecondCounter = () => {

    const [second, setSecond] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
            setSecond(previous=>previous + 1)
        }, 1000)

        return ()=> clearInterval(interval)
    }, [])

    let digit1 = Math.floor(second % 10)
    let digit2 = Math.floor(second / 10)%10
    let digit3 = Math.floor(second / 100)%10
    let digit4 = Math.floor(second / 1000)%10
    let digit5 = Math.floor(second / 10000)%10
    let digit6 = Math.floor(second / 100000)%10


    return (
        <div className="container-fluid d-flex gap-2 bg-black justify-content-center p-4">
            <Emoji/>
            <Digito digit={digit6}/>
            <Digito digit={digit5}/>
            <Digito digit={digit4}/>
            <Digito digit={digit3}/>
            <Digito digit={digit2}/>
            <Digito digit={digit1} />
        </div>
    )
}
