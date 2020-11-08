import React, { Component } from 'react'

export class Index extends Component {
    //APLICA LAS FUNCIONES
    state = {
        style: {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            textTransform: 'uppercase'
        }
    }

    greetPeople = () => {
        let backgroundColor = this.state.style.backgroundColor === 'black' ? 'white' : 'black';
        let color = this.state.style.color === 'white' ? 'black' : 'white'
        this.setState({ style: { ...this.state.style, backgroundColor, color } })
    }

    render() {
        //APLICAR LAS VARIBLES
        const header = {
            menu: 'acciones'
        }
        const img = 'https://images.pexels.com/photos/2313267/pexels-photo-2313267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        return (
            <div style={this.state.style}>
                <Header header={header} />
                <img src={img} alt="" width='40%' height='40%' />
                <p>Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Odio voluptatum quaerat suscipit aspernatur recusandae a
                speriores modi laboriosam blanditiis libero.
                adipisicing elit. Cumque.
                    consectetur.</p>
                <Button
                    greetPeople={this.greetPeople}
                    text='modo dark' />
            </div>
        )
    }
}

const Header = ({ header: { menu } }) => {
    //component de header
    return (
        <div>
            <h3>{menu}</h3>
        </div>
    )
}

const Button = ({ text, greetPeople }) => (
    <button onClick={greetPeople}>{text}</button>
)

export default Index
