import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import OneBarForChart from './OneBarForChart'


const BarChart = props => {
    const [localArray, setLocalArray] = useState(props.array)
    useEffect(() => {
        setLocalArray(props.array)
    }, [props.array])
    return(
        <div className='chart-container'>
            {localArray.map((item, index) => <OneBarForChart key={index} id={index} value={item} /> )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        array: state.arrayToSort
    }
}

export default connect(mapStateToProps, {})(BarChart)