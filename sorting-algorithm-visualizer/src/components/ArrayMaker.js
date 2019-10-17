import React from 'react'
import { connect } from 'react-redux'

function ArrayMaker(props) {
    return (
        <div>
            <input type='slider' min='1' value={props.sliderValue} max='50' />
        </div>
    )
}

const mapStateToProps = state => {
    return {
    arrayToSort: state.arrayToSort,
    sliderValue: state.sliderValue
    }
}

export default connect(mapStateToProps, {})(ArrayMaker)
