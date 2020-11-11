import React, { Component } from 'react'

export class LifeCycles extends Component {

    constructor(props) {
        super(props)
        console.log('i am constructor');

        this.state = {
            firstName: 'bryan',
            data: [],
            day: 1
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('i am getDerivedStateFromProps');
        return { firstName: state.firstName };
    }

    componentDidMount() {
        //despues del render
        //consultas
        console.log('i am componentDidMount');
        const API_URL = "https://restcountries.eu/rest/v2/all"
        fetch(API_URL).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            this.setState({
                data
            })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        //no puedes actuallizar el state
        console.log('i am shouldComponentUpdate');
        if (nextState.day > 30) {
            return false
        }
        return true
    }

    render() {
        console.log('i am render');
        return (
            <div>
                <p>{this.state.day}</p>
                <button onClick={this.doChange}>challenge</button>
                <User firstName={this.state.firstName} />
                {this.renderCountries()}
            </div>
        )
    }

    doChange = () => {
        //funcion para incrementar numero
        this.setState({
            day: this.state.day + 1
        })
    }

    renderCountries = () => {
        return this.state.data.map((item) => {
            return (
                <div>
                    {item.name}
                </div>
            )
        })
    }



    componentDidUpdate(prevProps, prevState) {
        //despues del render
        console.log('i am componentdidupdate');
        console.log(prevState.day);
        if (prevState.day === 29) {
            this.setState({
                firstName: 'conteo terminado'
            })
        }
    }




}

const User = ({ firstName }) => (
    <div>
        <h3>{firstName}</h3>
    </div>
)

export default LifeCycles
