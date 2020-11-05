import React from 'react'


//funcion
const showDate = (time) => {
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

    const month = months[time.getMonth()]
    return month

}


const Button = (props) => <button onClick={props.onClick}>{props.text}</button>



const Arraydist = () => {
    //component principal
    return (
        <div>
            <Button text='greet people' onClick={() => alert(showDate(new Date()))} />
        </div>
    )
}

export default Arraydist