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
        let status
        let btntext

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
                <Button text={this.state.login ? 'fuera' : 'ingresar'} onClick={this.handleButton} />
            </div>
        )
    }
}

const Button = ({ text, onClick }) => (
    <button onClick={onClick}> {text}</button>
)

export default Render
