import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Createref extends Component {

    firstName = React.createRef()

    handleSubmit = (e) => {
        console.log(this.firstName.current.value);
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="nombre"
                        ref={this.firstName} />
                    <button type="submit">enviar</button>

                </form>
            </div>
        )
    }


}

export default Createref
