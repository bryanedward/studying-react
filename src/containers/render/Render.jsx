import { render } from '@testing-library/react'
import React, { Component } from 'react'

export class Render extends Component {

    state = {
        login: false
    }

    handleButton = () => {
        this.setState({
            login: !this.state.login
        })
    }

    render() {
        //asignacion de variables
        let status
        let btntext

        const teaches = ['grace', 'victoria', 'little']

        if (this.state.login) {
            status = <h2>usted esta fuera de session</h2>
            btntext = 'ingresar'
        } else {
            status = <h2>bienvenido ed</h2>
            btntext = 'salir'
        }

        return (
            <div>
                <p>{status}</p>
                <Teach teach={teaches} />
                <Button text={this.state.login ? 'fuera' : 'ingresar'} onClick={this.handleButton} />
            </div>
        )
    }
}

const Button = ({ text, onClick }) => (
    <button onClick={onClick}> {text}</button>
)

const Teach = ({ teach }) => {
    //funcion de react
    return (
        <div>
            {teach.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )
}

export default Render
