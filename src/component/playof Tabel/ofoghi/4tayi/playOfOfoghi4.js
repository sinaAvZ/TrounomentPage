import React from 'react'
import Classes from './playOfOfoghi4.module.css'
const playOfOfoghi4 = props => {
    return (
        <div className={Classes.PlayOf}>
            <div className={Classes.Winner}>
                <div className={Classes.PlayerInfo + ' ' + Classes.DownlineYekWinner} >
                    <div className={Classes.CoachName}>CoachName</div>
                    <div className={Classes.FighterName}>FighterName</div>
                </div>


            </div>
            <div className={Classes.Final}>
                <div className={Classes.TwoPlayer + ' ' + Classes.TwoPlayerYekdovom}>
                    <div className={Classes.PlayerInfo + ' ' + Classes.Topline + ' ' + Classes.DownlineFinal}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                        <div className={Classes.MatchNumber}>Match number : <span className={Classes.MatchNumber_Number}> x </span></div>


                    </div>
                    <div className={Classes.PlayerInfo + ' ' + Classes.Topline + ' ' + Classes.DownlineFinal}>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                        <div className={Classes.MatchNumber}>Match number : <span className={Classes.MatchNumber_Number}> x </span></div>

                    </div>
                </div>
            </div>
            <div className={Classes.Yekchaharom}>
                <div className={Classes.TwoPlayer + ' ' + Classes.TwoPlayerYekchaharom}>
                    <div className={Classes.PlayerInfo + ' ' + Classes.Topline }>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                        <div className={Classes.MatchNumber}>Match number : <span className={Classes.MatchNumber_Number}> x </span></div>


                    </div>
                    <div className={Classes.PlayerInfo + ' ' + Classes.Topline }>
                        <div className={Classes.CoachName}>CoachName</div>
                        <div className={Classes.FighterName}>FighterName</div>
                        <div className={Classes.MatchNumber}>Match number : <span className={Classes.MatchNumber_Number}> x </span></div>

                    </div>
                </div>
                
            <div className={Classes.TwoPlayer + ' ' + Classes.TwoPlayerYekchaharom}>
                <div className={Classes.PlayerInfo + ' ' + Classes.Topline }>
                    <div className={Classes.CoachName}>CoachName</div>
                    <div className={Classes.FighterName}>FighterName</div>
                    <div className={Classes.MatchNumber}>Match number : <span className={Classes.MatchNumber_Number}> x </span></div>


                </div>
                <div className={Classes.PlayerInfo + ' ' + Classes.Topline}>
                    <div className={Classes.CoachName}>CoachName</div>
                    <div className={Classes.FighterName}>FighterName</div>
                    <div className={Classes.MatchNumber}>Match number : <span className={Classes.MatchNumber_Number}> x </span></div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default playOfOfoghi4