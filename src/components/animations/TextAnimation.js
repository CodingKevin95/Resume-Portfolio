import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useInterval } from 'react-use'
import { useEffect } from 'react'

export default function TextAnimation() {
    const experienceArray = "experiences.".split("")
    const lifeArray = "life.".split("")
    const [items, setItems] = useState(experienceArray)
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(false)

    useInterval(() => {
        setItems(experienceArray)
        setCount(count + 1)

        if (count == 1) {
            setCount(0)
            setItems(lifeArray)
        }
    }, play ? 6000 : null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setItems(lifeArray)
            setPlay(true)
        }, 5975)

        return() => clearTimeout(timer)
    }, [])

    return(
        <Wrapper>
            {items.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; filter: blur(10px); transform: skewY(10deg) skewX(10deg) rotateZ(10deg)}
    25% { opacity: 1; transform: translateX(0); filter: blur(0px); }
    75% { opacity: 1; transform: translateX(0); }
    100% { opacity: 0; transform: translateX(550px); }
`

const Wrapper = styled.span`
    display: inline-block;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`