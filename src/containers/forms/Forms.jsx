import React, { Component } from 'react'


const options = [
    {
        value: '',
        label: '-- Select Country--',
    },
    {
        value: 'Finland',
        label: 'Finland',
    },
    {
        value: 'Sweden',
        label: 'Sweden',
    },
    {
        value: 'Norway',
        label: 'Norway',
    },
    {
        value: 'Denmark',
        label: 'Denmark',
    },
]


const selectiOoption = options.map(({ value, label }) => (
    <option value={value}>{label}</option>
))

export class Forms extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
            html: false,
            css: false,
            javascript: false,
        },
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.state);
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { firstName, color, dateOfBirth } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}
                    style={{
                        marginLeft: "10px",
                        marginTop: "10px"
                    }}>
                    <input style={{
                        marginBottom: "10px"
                    }}
                        name='firstName'
                        type="text"
                        placeholder="nombre"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="date"
                        name="dateOfBirth"
                        placeholder="fecha nacimiento"
                        value={dateOfBirth}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="color"
                        name="color"
                        placeholder="color"
                        value={color}
                        onChange={this.handleChange} />
                    <br />
                    <select
                        name="country"
                        onChange={this.handleChange}>
                        {selectiOoption}
                    </select>
                </form>
            </div>
        )
    }
}




export default Forms
