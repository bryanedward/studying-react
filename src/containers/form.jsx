import React, { useState } from 'react';
import "./form.css";

const Form = () => {

    const [person, setPerson] = useState({ firstname: '', email: '' })
    const [people, setPeople] = useState([])

    const handData = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({ ...person, [name]: value })
    }

    const handSubmit = (e) => {
        e.preventDefault()
        if (person.firstname && person.email) {
            const newPerson = { ...person, id: new Date().getTime().toString() }
            setPeople([...people, newPerson])
            setPerson({ firstname: ' ', email: ' ' })
        }
    }
    return (
        <div className="form">
            <form>
                <div className="form_container">
                    <label htmlFor="name">nombre</label>
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        value={person.firstname}
                        onChange={handData} />
                </div>
                <div className="form_container">
                    <label htmlFor="email">email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={person.email}
                        onChange={handData} />
                </div>
                <button type="submit" onClick={handSubmit} >enviar</button>
            </form>
            {
                people.map((item, index) => (
                    <div>
                        <small>{item.firstname}</small>
                        <p>{item.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Form
