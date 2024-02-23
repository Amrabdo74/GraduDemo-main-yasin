import React from 'react'

const DataBarInfo=(props)=>{
    const dataKeysInformation=props.dataKeysInformation;
    console.log(dataKeysInformation)
    return(
      <div>
            {
              props.dataKeysInformation.map((item,index)=>(
                <p key={index} className="barChartInfoColors"><span className="background" style={{backgroundColor:`${item[0]}`}}></span><span>{item[1]}</span></p>
              ))
            }
      </div>
    )
}

export default DataBarInfo;