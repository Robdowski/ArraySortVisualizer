import React from 'react'
import { connect } from 'react-redux'

import OneBarForChart from './OneBarForChart'


const BarChart = props => {
    return(
        <div>
            {props.array.map((item, index) => <OneBarForChart key={index} id={index} value={item} /> )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        array: state.arrayToSort
    }
}

export default connect(mapStateToProps, {})(BarChart)