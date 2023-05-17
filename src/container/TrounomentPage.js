import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Classes from './tournomentpage.module.css'
import AXIOS from '../axios'
import logoImage from '../assets/tournoment-page/icon.png'
import Navbar from '../component/navbar/nvabar'
import BoxInfo from '../component/boxinfo/boxinfo'
import Winners from '../component/winners/winners'
import PlayOfOfoghi8 from '../component/playof Tabel/ofoghi/playOfOfoghi8'
import PlayOfOfoghi4 from '../component/playof Tabel/ofoghi/4tayi/playOfOfoghi4'
import Table from '../component/table/table'
import Pagination from '../component/NavigationItems/paginationItems'
import Exceptions from '../component/exceptions/exceptions'
import Aux from '../utiliti/Auxilary'
import MangerBtn from '../component/managerBtn/managerBtn'
import TableTimes from '../component/tableTimes/tableTimes'
class TournomnentPage extends Component {
    state = {
        exceptions: {
            exceptionShow: false,
            exceptionNumber: 2
        },
        edit: false,
        navbar: {
            fedrasionName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Fedrasion Name'
                },
                value: '',
                clasName: Classes.FedrasionName + " " + Classes.Texts
            },
            subset: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Style'
                },
                value: '',
                clasName: Classes.Subset + " " + Classes.Texts

            },
            ogranizer: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'lorem ipsum is here but in future will change'
                },
                value: '',
                clasName: Classes.Ogranizer + " " + Classes.Texts

            },
        },

        boxinfo: {
            admin: {
                manager: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ''
                    },
                    value: '',
                    clasName: Classes.Texts
                },
                approval: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ''
                    },
                    value: '',
                    clasName: Classes.Texts
                },
                register: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ''
                    },
                    value: '',
                    clasName: Classes.Texts
                }
            },
            configuration: {
                weight: {
                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '20-25'
                    },
                    value: '',
                    clasName: Classes.Texts

                },
                Age: {
                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '20-25'
                    },
                    value: '',
                    clasName: Classes.Texts

                },

            },
            Judge: {
                JudgeName: {
                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: ''
                    },
                    value: '',
                    clasName: Classes.Texts

                },
            },
            judgeCount: 0,
            kdKo: {
                kd: {
                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '2'
                    },
                    value: '',
                    clasName: Classes.Texts

                },
                ko: {

                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '3'
                    },
                    value: '',
                    clasName: Classes.Texts


                }
            },

        },
        manageBtn: {
            sCompetition: false,
            eRegistrater: false,
            sStanding: false,
            eStanding: false,
            sSuperviser: false,
            eSuperviser: false,
            eCompetition: false,
            startCompetitionClickedTime: null,
            endCompetitionTime: {
                hours: null,
                minute: null
            }
        },
        tableContent: {
            players: {},
            tables8ShouldRender: null,
            tables4ShouldRender: null,

        },
        image1: logoImage,
        image2: logoImage,
    }
    componentDidMount() {
        AXIOS.get('/player/')
            .then(res => {
                const tableContent = { ...this.state.tableContent }
                const tables8ShouldRender = Math.floor(res.data.players.length / 8)
                const tables4ShouldRender = Math.ceil((res.data.players.length % 8) / 4)
                console.log(tables4ShouldRender);
                tableContent.players = res.data.players
                tableContent.tables8ShouldRender = tables8ShouldRender
                tableContent.tables4ShouldRender = tables4ShouldRender
                this.setState({ tableContent: tableContent })

            })
        // .catch(err => this.setState({ players: err.message }))

    }
    handleChange = (event, image) => {
        this.setState({
            [image]: URL.createObjectURL(event.target.files[0])
        })
        console.log(this.state.image1);
    }
    navbarChangeHandler = (prop, id) => {
        const updateNavbar = {
            ...this.state.navbar
        }
        const updateNavbarItem = {
            ...this.state.navbar[id]
        }
        updateNavbarItem.value = prop.target.value;
        updateNavbar[id] = updateNavbarItem;
        this.setState({ navbar: updateNavbar })
    }
    boxinfoChangeHandler = (prop, id) => {
        const updateBoxinfo = { ...this.state.boxinfo };
        const updateBoxinfoItem = { ...this.state.boxinfo[id] };
        updateBoxinfoItem.value = prop.target.value;
        updateBoxinfo[id] = updateBoxinfoItem
        this.setState({ boxinfo: updateBoxinfo })
        console.log(updateBoxinfo[id].value);
    }
    judgeCountHnadler = (action) => {
        let updateBoxInfo = { ...this.state.boxinfo }
        switch (action) {
            case 'minus': {
                updateBoxInfo.judgeCount = this.state.boxinfo.judgeCount - 1
                this.setState({ boxinfo: updateBoxInfo })
                console.log(this.state.manageBtn);
                break;
            }
            case 'plus': {
                updateBoxInfo.judgeCount = this.state.boxinfo.judgeCount + 1
                this.setState({ boxinfo: updateBoxInfo })
                break;
            }
        }
    }
    exceptionShowHandler = () => {

        const exceptions = { ...this.state.exceptions }
        exceptions.exceptionShow = true
        this.setState({ exceptions: exceptions })
    }

    exceptionHideHandler = () => {
        const exceptions = { ...this.state.exceptions }
        exceptions.exceptionShow = false
        this.setState({ exceptions: exceptions })
    }

    exceptionPlusHandler = () => {
        if (this.state.exceptions.exceptionNumber < 5) {
            const exceptions = { ...this.state.exceptions }
            exceptions.exceptionNumber = this.state.exceptions.exceptionNumber + 1
            this.setState({ exceptions: exceptions })
        }
    }
    exceptionMinusHandler = () => {
        if (this.state.exceptions.exceptionNumber > 0) {
            const exceptions = { ...this.state.exceptions }
            exceptions.exceptionNumber = this.state.exceptions.exceptionNumber - 1
            this.setState({ exceptions: exceptions })
        }
    }
    editHandler = () => {
        this.setState(prevState => ({ edit: !prevState.edit }))
    }

    manageBtn = (id) => {
        const btnBools = { ...this.state.manageBtn }

        btnBools[id] = true
        if (id === 'sCompetition') {
            btnBools.startCompetitionClickedTime = new Date()
        }
        if (id === 'eCompetition') {
            let df = new Date() - this.state.manageBtn.startCompetitionClickedTime
            btnBools.endCompetitionTime.hours = Math.floor(df / (1000 * 60 * 60))
            btnBools.endCompetitionTime.minute = Math.floor(df / (1000 * 60))

        }

        this.setState({ manageBtn: btnBools })
    }

    render() {
        let pageNumber = 0
        let exceptionShow = ''
        if (this.state.exceptions.exceptionShow) {
            exceptionShow = (<Aux>
                <Exceptions
                    loghandler={this.loghandler}
                    exceptionHide={this.exceptionHideHandler}
                    exceptions={this.state.exceptions}
                    exceptionPlus={this.exceptionPlusHandler}
                    exceptionMinus={this.exceptionMinusHandler}
                    edit={this.state.edit}
                />
                <div className={Classes.Background}></div> </Aux>)
        }

        return (
            <div className={Classes.TournomentPage}>
                <Navbar
                    imageHanedl={this.handleChange}
                    Right_LeftImage={this.state.image1}
                    Right_RightImage={this.state.image2}
                    edit={this.state.edit}
                    data={this.state.navbar}
                    change={this.navbarChangeHandler} />
                <BoxInfo
                    configuration={this.state.boxinfo.configuration}
                    admin={this.state.boxinfo.admin}
                    kdKo={this.state.boxinfo.kdKo}
                    edit={this.state.edit}
                    exceptionShow={this.exceptionShowHandler}
                    editHandler={this.editHandler}
                    judgeCount={this.state.boxinfo.judgeCount}
                    judgeCountHandler={this.judgeCountHnadler}
                    judgeName={this.state.boxinfo.Judge}
                    change={this.boxinfoChangeHandler} />
                <MangerBtn
                    data={this.state.manageBtn}
                    clickHandler={this.manageBtn} />
                {exceptionShow}
                <TableTimes
                    hour={this.state.manageBtn.endCompetitionTime.hours === null ? '--' : this.state.manageBtn.endCompetitionTime.hours}
                    minute={this.state.manageBtn.endCompetitionTime.minute === null ? '--' : this.state.manageBtn.endCompetitionTime.minute} />


                <Winners />
                <Switch>
                    {[...Array(this.state.tableContent.tables8ShouldRender)].map((e, i) => {
                        pageNumber = ++pageNumber

                        return <Route exact path={'/tournoment/' + pageNumber} >
                            <PlayOfOfoghi8 />

                        </Route>
                    })}
                    {[...Array(this.state.tableContent.tables4ShouldRender)].map((e, i) => {
                        pageNumber = ++pageNumber

                        return <Route exact path={'/tournoment/' + pageNumber} >
                            <PlayOfOfoghi4 />

                        </Route>
                    })}
                </Switch>
               
                <Pagination number={this.state.tableContent.tables8ShouldRender+this.state.tableContent.tables4ShouldRender} />
                <Pagination />
                <Table />

            </div >
        )
    }
}
export default TournomnentPage