import React from 'react'
import Classes from './boxinfo.module.css'
import Input from '../UI/input/input'
import EditImg from '../../assets/tournoment-page/Group 138.png'
import PlusImg from '../../assets/tournoment-page/plus.svg'
import MinusImg from '../../assets/tournoment-page/minus.svg'
const boxinfo = props => {

    const boxAdminInputs = []
    for (let key in props.admin) {
        boxAdminInputs.push({
            config: props.admin[key],
            id: key
        })
    }
    const boxConfigurationInputs = []
    for (let key in props.configuration) {
        boxConfigurationInputs.push({
            config: props.configuration[key],
            id: key
        })
    }
    const boxKdKo = []
    for (let key in props.kdKo) {
        boxKdKo.push({
            config: props.kdKo[key],
            id: key
        })
    }

    const judgeName = []
    for (let key in props.judgeName) {
        judgeName.push({
            config: props.judgeName[key],
            id: key
        })
    }
    return (
        <div className={Classes.BoxInfo}>
            <button className={Classes.EditBtn} onClick={props.editHandler}> <img src={EditImg} /> </button>
            <div className={Classes.Admin}>
                <h1>Admin</h1>
                {boxAdminInputs.map((data, index) => (
                    <Input
                        key={index}
                        elementType={data.config.elementType}
                        elementConfig={data.config.elementConfig}
                        ClassName={Classes.Texts}
                        edit={props.edit}
                        label={data.id}
                        changed={props.change}
                    />
                ))}
            </div>
            <div className={Classes.Configuration}>
                <h1>Configuration</h1>
                {boxConfigurationInputs.map((data, index) => (
                    <Input
                        key={index}
                        elementType={data.config.elementType}
                        elementConfig={data.config.elementConfig}
                        ClassName={Classes.Texts}
                        edit={props.edit}
                        label={data.id}
                        changed={props.change}
                    />
                ))}
            </div>
            <div className={Classes.Judge}>
                <div className={Classes.JudgeCount}>
                    <div className={Classes.JudgeName}>judge Name :{console.log()}

                    </div>
                    <span>Judge Count :</span>
                    <img src={PlusImg} className={Classes.JudgeCount} onClick={() => props.judgeCountHandler('plus')} />
                    {props.judgeCount}
                    <img src={MinusImg} className={Classes.JudgeCount} onClick={() => props.judgeCountHandler('minus')} />
                </div>
            </div>
            <div className={Classes.KdKo}>
                {boxKdKo.map((data, index) => (
                    <Input
                        key={index}
                        style={{ minWidth: '25px', width: '50px' }}
                        elementType={data.config.elementType}
                        elementConfig={data.config.elementConfig}
                        ClassName={Classes.Texts}
                        edit={props.edit}
                        label={data.id}
                        changed={props.change}

                    />
                ))}
                <img src={PlusImg}
                    onClick={props.exceptionShow}
                    className={Classes.ExceptionShow} />
            </div>
        </div>
    )

}
export default boxinfo