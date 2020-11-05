import React, { Component } from 'react'
import Card from '../components/card'
import { list } from '../list'

export class Home extends Component {

    render() {


        return (
            <div>
                {
                    list.map((item, index) => (
                        <Card key={index} {...item}>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </Card>
                    ))
                }
            </div>
        )
    }
}
export default Home
