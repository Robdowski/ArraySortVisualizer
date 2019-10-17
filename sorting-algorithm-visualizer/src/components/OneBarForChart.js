import React from 'react'


function OneBarForChart(props) {
    let styles = {
        width: '10px',
        margin: '0px',
        backgroundColor: 'rgb(0, 0, 0)'
    }

    console.log('props for OneBar', props)
    return (
        <div className='one-bar' id={props.id} style={{...styles, height:`${props.value}px`}}>
        </div>
    )
}



export default OneBarForChart

