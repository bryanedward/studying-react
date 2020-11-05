import React, { useEffect, useState } from 'react'

const Objectstate = () => {

    const url = 'https://api.github.com/users'
    //crear el array
    const [loading, setLoadin] = useState(true)
    const [users, setUser] = useState([])

    console.log(loading);

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                //respuesta 200
                if (resp.status >= 200) {
                    return resp.json()
                } else {
                    throw new Error(resp.statusText)
                }
            })
            .then((item) => {
                console.log(item);
                setUser(item)
                setLoadin(false)
            })
            .catch((error) => console.log(error))
    }, [])

    if (loading) {
        return (
            <small>Loading ..</small>
        )
    }

    return (
        <div>
            {
                users.map((item, index) => (
                    <div style={{
                        display: "inline-block",
                        flexWrap: "wrap",
                        margin: ".3rem"
                    }}>
                        <img
                            src={item.avatar_url} alt="" style={{
                                width: "150px",
                                height: "auto",
                            }} />
                        <p style={{ textAlign: "center", textTransform: "uppercase" }}>{item.login}</p>

                    </div>

                ))
            }
        </div>
    )

}
export default Objectstate
