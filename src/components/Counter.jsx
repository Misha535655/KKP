import React from 'react'
import {useSelector} from 'react-redux'
import { SelectCart } from '../store/AddToCartReducer'

function Counter() {
    const state = useSelector(SelectCart)
    return (
        <div className="counter">
            {state.count}
        </div>
    )
}

export default Counter
