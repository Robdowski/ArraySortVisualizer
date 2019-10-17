import React from 'react'
import { connect } from 'react-redux'

import { handleRange } from '../actions'

function ArrayMaker(props) {
    console.log(props)
    return (
        <div>
        <label htmlFor='array-size' name='array-size'>Array Size
            <input type='range' name='array-size' min='6' defaultValue='25' max='50' onChange={props.handleRange}/></label>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
    arrayToSort: state.arrayToSort,
    sliderValue: state.sliderValue
    }
}

export default connect(mapStateToProps, { handleRange })(ArrayMaker)
