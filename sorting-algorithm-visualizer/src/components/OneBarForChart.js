import React from 'react'


function OneBarForChart(props) {
    let styles = {
        display:'block'
    }
    return (
        <div className='one-bar' id={props.id} style={{...styles, height:`${props.value}px`}}>
        </div>
    )
}



export default OneBarForChart

