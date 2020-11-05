import React, { useState } from 'react'
import { list } from '../../list'
import styled from 'styled-components'

const Home = () => {

    const [text, setText] = useState(list)

    const Card = styled.div`
        padding: 0.25em 1em;
    `

    const remove = (e) => {
        let newText = list.filter((item) => item.id != e)
        setText(newText)
    }

    return (
        <div>
            {
                text.map((item, index) => (
                    <Card key={index}>
                        <small>{item.title}</small>
                        <button onClick={() => remove(item.id)}>eliminar</button>
                    </Card>

                ))
            }
            <button onClick={() => setText([])}>limpiar</button>
        </div>
    )
}

export default Home
