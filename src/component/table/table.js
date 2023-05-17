import React from 'react'
import Classes from './table.module.css'
import TableColumn from './tables/tableColumn'
const table = props => {
    const TableContent = [1, 2, 3]
    return (
        <div className={Classes.Table}>
            <div className={Classes.TableColumn}>

                <span className={Classes.TableContent}>Row</span>
                <span style={{ color: '#4F7DFF' }} className={Classes.TableContent}>BlueFighter</span>
                <span style={{ color: '#4F7DFF' }} className={Classes.TableContent}>BlueCoach</span>
                <span style={{ color: '#FF6161' }} className={Classes.TableContent}>RedCoach</span>
                < span style={{ color: '#FF6161' }} className={Classes.TableContent}>RedFighter</span>
                <span style={{ color: '#8F90A6' }} className={Classes.TableContent}>MatchNumber</span>
                <span style={{ color: '#8F90A6' }} className={Classes.TableContent}>Superviser</span>
            </div>
            {
                TableContent.map((data, index) => <TableColumn
                    key={index}
                    gameStart={index}
                    blueCoach={index}
                    redCoach={index}
                    gameNumber={index}
                    blueFighter={index}
                    redFighter={index}
                    row={index}
                />)
            }

        </div >

    )
}
export default table