import React, { Component } from 'react'

export class Form extends Component {

    //declarar el state
    state = {
        firstName: '',
        lastName: '',
        country: '',
    }


    handleChange = (e) => {

        const { name, value } = e.target

        this.setState({ [name]: value })

    }

    handleSubmit = (e) => {
        //funciion
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        const { firstName, lastName, country } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={this.handleChange} />
                    <button> enviar</button>
                </form>
            </div>
        )
    }
}

export default Form
