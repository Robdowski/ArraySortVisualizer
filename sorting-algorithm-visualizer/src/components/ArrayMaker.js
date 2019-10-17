import React from 'react'
import { connect } from 'react-redux'

import { handleRange } from '../actions'

function ArrayMaker(props) {
    return (
        <div>
        <label htmlFor='array-size' name='array-size'>Array Size
            <input type='range' name='array-size' min='1' defaultValue='25' max='50' onChange={handleRange}/></label>
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
