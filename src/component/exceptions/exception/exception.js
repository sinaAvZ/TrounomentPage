import React from 'react'
import Input from '../../UI/input/input'
import Classes from './exception.module.css'
const exception = props => {
    const selectItem = {
        firstCombo: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'compute', displayValue: 'Compute' },
                    { value: 'report', displayValue: 'Report' }
                ]
            },
            value: 'compute',
        },
        secondCombo: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'game', displayValue: 'Game' },
                    { value: 'round', displayValue: 'Round' }
                ]
            },
            value: 'compute',
        }
    }
    const onChange = (prop, x) => {
        console.log(selectItem[x]);
        props.loghandler(selectItem)
    }
    return <div className={Classes.Exception}>
        {/* <img className={Classes.CloseImage} src={CloseImage} onClick={props.exceptionMinus} /> */}
        <Input changed={(e) => onChange(e,'firstCombo')}
        
            edit={!props.edit}
            type='text'
            ClassName={Classes.ExceptionInput}
          
        />
        <Input
            edit={!props.edit}
            type='text'
            ClassName={Classes.ExceptionInput}
            
        />
        <Input
            edit={!props.edit}
            elementType={selectItem.elementType}
            elementConfig={selectItem.elementConfig}
            ClassName={Classes.ExceptionSelect}
        />    <Input
            edit={!props.edit}
            elementType={selectItem.elementType}
            elementConfig={selectItem.elementConfig}
            ClassName={Classes.ExceptionSelect}
        />
    </div>

}
export default exception