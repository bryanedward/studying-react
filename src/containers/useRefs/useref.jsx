import React, { useReducer, useState } from 'react'
import { list } from '../../list'
import Modal from './modal'

const Useref = () => {

    const reducer = (state, action) => {
        if (action.type === 'testing') {
            return {
                ...state,
                people: list,
                isModelOpen: true,
                modelContent: 'item add'
            }
        }
        return state
    }

    const initialState = {
        people: list,
        isModelOpen: true,
        modelContent: 'hello'
    }

    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const btnsubmit = (e) => {
        e.preventDefault()
        if (name) {
            dispatch({ type: 'testing' })
        }
    }

    return (
        <div>
            {state.isModelOpen &&
                <Modal modelContent={state.modelContent} />}
            <form action="" onSubmit={btnsubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">btn enviar</button>
            </form>
            {

            }
        </div>
    )
}


export default Useref