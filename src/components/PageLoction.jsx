import React from 'react'
import Arrow from './images/fi-sr-caret-right.svg'
const PageLoction = (props) => {
  return (
    <div className='location-container'>
        <div className="pages-links">
            <h3>{props.page}</h3>
            <p>
                {
                    props.subTitles.map((item, index)=>(
                        <span key={index}>{item} {index!=(props.subTitles.length-1)?<img src={Arrow}/>:''}</span>
                    ))
                }
            </p>
        </div>
        <div className='con-btn'>
            {
                props.buttons?.map((item,index)=>(
                    <button key={index} style={item[2]}>
                        <img src={item[0]}/>
                        {item[1]}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default PageLoction;