import React from 'react'
import Classes from './tableTimes.module.css'

const tableTimes = props => {
 
    return (
        <div className={Classes.TableTime}>
            <span>Estimat Duration Of  This Table Is {props.hour} : {props.minute} &nbsp;&nbsp; And Commpetion  Is  -- : --
            </span>
            <span>
                Real Time Of This Table Is -- : -- &nbsp;&nbsp;And Commpetion Is -- : --</span>
                
        </div>
    )
}
export default tableTimes