import React from 'react'

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

    const month = months[time.getMonth()].slice(0, 3)
    return month
}

const Header = (props) => {
    const data = props.data
    const { title, author, date } = data
    return (
        <div>
            <h3>{title}</h3>
            <p>{author.name}</p>
            <small>{showDate(date)}</small>
        </div>
    )
}


const destroyProps = () => {
    const data = {
        welcome: 'welcome',
        title: 'title',
        author: {
            name: 'james',
            last: 'mark',
        },
        date: new Date()
    }
    return (
        <div>
            <Header data={data} />
        </div>
    )
}

export default destroyProps