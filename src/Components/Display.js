import React from 'react'

const Display=({dataname,dataage,datasalary})=>{
    return(
        <>
        {dataname}
        <br/>
        {dataage}
        <br/>
        {datasalary}
        </>
    )
}

export default Display