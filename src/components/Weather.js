import React from 'react'

const Weather = (props) => {
    return (
        <div className='info'>
            {
                Object.keys(props.mystate).map((ele, i) => {
                    return props.mystate[ele] && <p className='info-key' key={i}>{ele} : <span className='info-val'>{props.mystate[ele]}</span></p>
                })
            
            }
        </div>
    )
}

export default Weather