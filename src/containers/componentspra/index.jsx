import React, { Component } from 'react'


class Index extends Component {

    showDate = (time) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        const month = months[time.getMonth()].slice(0, 3)
        const year = time.getFullYear()
        const date = time.getDate()
        return ` ${month} ${date}, ${year}`
    }


    handletime = () => {
        alert(this.showDate(new Date()))
    }

    render() {
        const data = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Asabeneh',
                lastName: 'Yetayeh',
            },
            date: 'Oct 7, 2020',
        }

        const user = { ...data.author }
        return (
            <div>
                <Header data={data} />
                <Main user={user}
                    handleTime={this.handletime} />
                <Footer date={new Date()} />
            </div>
        )
    }

}

class Header extends Component {
    //componente header
    constructor(props) {
        super(props)
    }
    render() {
        //using destroying
        const { welcome, title } = this.props.data
        return (
            <div>
                <p>{welcome} - {title}</p>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <UseCard user={this.props.user} />
                <Button
                    text='btn fecha'
                    handletime={this.props.handleTime} />
            </div>
        )
    }
}

const UseCard = ({ user: { firstName, lastName } }) => (
    //diseño de una tarjeta y formateando el json
    // por la firma del paramentro 
    //por la funcion array funcion
    <div>
        <p>{firstName} - {lastName}</p>
    </div>
)

const Button = ({ handletime, text }) => (
    <button onClick={handletime}>
        {text}
    </button>
)


class Footer extends Component {
    //compnenete para el footer de las paginas web
    render() {
        return (
            <div>
                <p>CopyRight - {this.props.date.getFullYear()}</p>
            </div>
        )
    }
}

export default Index

