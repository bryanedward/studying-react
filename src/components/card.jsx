import React from 'react'
import styled from 'styled-components'

const card = ({ title, children }) => {

    // const {title, description} = props

    const Container = styled.div`
        border: 1px solid black;
        `

    const Title = styled.h1`
        color: #234;
        text-align: center;
        text-transform :uppercase;
    `

    return (
        <Container className="">
            <Title>{title}</Title>
            <small>{children}</small>
        </Container>
    )
}

export default card
