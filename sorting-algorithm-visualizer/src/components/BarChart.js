import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import OneBarForChart from './OneBarForChart'



const BarChart = props => {
   

    return(
        <div className='chart-container'>
            {props.array.map((item, index) => <OneBarForChart key={index} id={index} value={item} /> )}
            <button>Quicksort</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        array: state.arrayToSort
    }
}

export default connect(mapStateToProps, {})(BarChart)