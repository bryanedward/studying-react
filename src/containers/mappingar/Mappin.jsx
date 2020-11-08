import React from 'react'


const Card = ({ style, number }) => {

    const list = number.map((item) =>

        item % 2 === 0 ? <div style={{
            backgroundColor: 'green',
            padding: '20px'
        }}>{item}</div>
            :
            <div style={{
                backgroundColor: 'red',
                padding: '20px'
            }}>{item}</div>)

    return list
}

const Mapping = () => {

    const numbers = [1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 14, 13, 17]

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap-reverse',
            justifyItems: 'center'
        }}>
            <Card
                number={numbers} />
        </div>
    )
}


export default Mapping