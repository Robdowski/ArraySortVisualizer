import React from 'react'


function OneBarForChart(props) {
    let styles = {
        display:'block'
    }

    console.log('props for OneBar', props)
    return (
        <div className='one-bar' id={props.id} style={{...styles, height:`${props.value}px`}}>
        </div>
    )
}



export default OneBarForChart

