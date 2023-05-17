import React from 'react'
import Classes from './managerBtn.module.css'
const managerBtn = props => {
    let sCompetitionClass = props.data.sCompetition ? Classes.Clicked : Classes.MustClick
    let eRegistraterClass = props.data.sCompetition && !props.data.eRegistrater ? Classes.MustClick : Classes.Clicked
    let sStandingClass = props.data.eRegistrater && !props.data.sStanding ? Classes.MustClick : Classes.Clicked
    let eStandingClass = props.data.sStanding && !props.data.eStanding ? Classes.MustClick : Classes.Clicked
    let sSuperviserClass = props.data.eStanding && !props.data.sSuperviser ? Classes.MustClick : Classes.Clicked
    let eCompetition = props.data.sSuperviser && !props.data.eCompetition ? Classes.MustClick : Classes.Clicked
    return (
        <div className={Classes.MangerBtn}>
            <div className={Classes.ManagerBtn_Parent}>
                <button disabled={(props.data.sCompetition)} className={sCompetitionClass + ' ' + Classes.ManagerBtn_Btn} onClick={() => props.clickHandler('sCompetition')}>Start competition</button>
                <button disabled={!(props.data.sCompetition && !props.data.eRegistrater) } className={eRegistraterClass + ' ' + Classes.ManagerBtn_Btn} onClick={() => props.clickHandler('eRegistrater')}>End Registrater</button>
            </div>
            <div className={Classes.ManagerBtn_Parent}>
                <button disabled={!(props.data.eRegistrater && !props.data.sStanding)} className={sStandingClass + ' ' + Classes.ManagerBtn_Btn} onClick={() => props.clickHandler('sStanding')}>Start Standing</button>
                <button disabled={ !(props.data.sStanding && !props.data.eStanding) } className={eStandingClass + ' ' + Classes.ManagerBtn_Btn} onClick={() => props.clickHandler('eStanding')}>End Standing</button>
            </div>
            <div className={Classes.ManagerBtn_Parent}>
                <button disabled={!(props.data.eStanding && !props.data.sSuperviser)} className={sSuperviserClass + ' ' + Classes.ManagerBtn_Btn} onClick={() => props.clickHandler('sSuperviser')}>Start Superviser</button>
                <button disabled={!(props.data.sSuperviser && !props.data.eCompetition)} className={eCompetition + ' ' + Classes.ManagerBtn_Btn} onClick={() => props.clickHandler('eCompetition')}>End Competition</button>
            </div>
        </div>
    )
}
export default managerBtn