import React, { useState } from 'react'
import styled from 'styled-components'
import Objectstate from '../../containers/useState/objectstate';

const Btnstate = ({ primary, text }) => {

    const [show, setShow] = useState(false)

    const Button = styled.button`
    background: ${primary ? 'transparent' : 'red'};
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: ${primary ? 'palevioletred' : 'white'};
    margin: 0.5em 1em;
    padding: 0.25em 1em;`;

    console.log(show);
    return (
        <div>
            <Button onClick={() => setShow(!show)}>Consultar github</Button>
            <div>
                {show || <Objectstate />}
            </div>
        </div>
    )
}

const Item = () => {
    return (
        <div>
            <p>item</p>
        </div>
    )
}


export default Btnstate
