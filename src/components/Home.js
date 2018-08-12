import React from 'react';
import IoBonfire from 'react-icons/lib/io/bonfire';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import { Collapse, CardBody, Card } from 'reactstrap';

import data from './../data.json';

export default class Home extends React.Component {
    state= {
        showedPrj: [0, 1, 2],
        collapseCourses: [false, false],
        collapseExps: [false]
    }

    componentDidMount = () => {

    }

    toggleCourses(id) {
        this.setState({ collapseCourses: this.state.collapseCourses.map((item, index) => {
            if(index === id-1){
                item=!item
            }
            return item
        }) });
    }

    toggleExps(id) {
        this.setState({ collapseExps: this.state.collapseExps.map((item, index) => {
            if(index === id-1){
                item=!item
            }
            return item
        }) });
    }

    handleRight= () => {
        if(this.state.showedPrj.includes(data.projects.length-1)){
            // Do nothing
        } else {
            this.setState((prevState) => ({showedPrj : prevState.showedPrj.map((data) => (
                data+1
            ))}))
        } 
    }

    handleLeft= () => {
        if(this.state.showedPrj.includes(0)){
            // Do nothing
        } else {
            this.setState((prevState) => ({showedPrj : prevState.showedPrj.map((data) => (
                data-1
            ))}))
        }
    }

    render() {
        return (
            <div className="app-body">
                <div className="banner">
                    <div className="row">
                        <div className="logo">
                            <p><IoBonfire /></p>
                        </div>
                        <div className="logo-name">
                            <p className="header">hoang le</p>
                            <p className="sub-header">Full Stack Developer</p>
                            
                        </div>
                    </div>
                    <p className="text">Lorem ipsum dolor sit amet, cu pro dicit torquatos contentiones, in cum solet iisque praesent. Brute omnium disputando eum id, putent delicata sea te, at reque mandamus appellantur sea.</p>        
                </div>
                <div className="info" id="about">
                    <div className="intro">
                        <div className="intro-block">
                            <p className="sub-header">{data.intro.title}</p>
                            <div className="line"></div>
                            <p className="text">{ data.intro.description }</p>
                            <button className="btn rm1">
                                <p className="sub-title">Read more <FaAngleRight /></p>
                            </button>
                        </div>
                        <div className="ava">
                            <img src={data.intro.img} alt="my ava" className="ava-img" />
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="projects" id="projects">
                        <p className="sub-header">Projects</p>
                        <div className="line"></div>
                        <div className="slide-list">
                            <div className="left" onClick={this.handleLeft}>
                                <p className="header"><FaAngleLeft /></p>
                            </div>
                            <div className="container">
                                <div className="row">
                                {
                                        data.projects.map((prj, index) => {
                                            if(this.state.showedPrj.includes(index)){
                                                return (
                                                    <div className="slide-list-element" key={index}>
                                                        <div className="img-block">
                                                            <img src={prj.img} alt="alt" />
                                                        </div>
                                                        <div className="text-block">
                                                            <p className="sub-title prj-title">{prj.name}</p>
                                                            <p className="text prj-des">{prj.description}</p>
                                                        </div>
                                                        <button className="btn">
                                                            <p className="sub-title">Read more <FaAngleRight /></p>
                                                        </button>
                                                    </div>
                                                )
                                            }
                                            else return null;
                                        })
                                }
                                </div>
                            </div>
                            <div className="right" onClick={this.handleRight}>
                                <p className="header"><FaAngleRight /></p>
                            </div>
                        </div>
                    </div>

                    <div className="line"> </div>
                    
                    <div className="education" id="education">
                        <p className="sub-header">Education</p>
                        <div className="line"></div>
                        <div className="show-list">
                            {
                                data.education.map((element) => (
                                    <div className="container show-list-element" key={element.id}>
                                        <div className="row">
                                            <div className="col-8 p-0">
                                                <div className="ava">
                                                    <img src={element.img} alt="vamk" className="ava-img"/>
                                                </div>
                                                <div className="description">
                                                    <p className="sub-title">{element.name}</p>
                                                    <p className="text">{element.degree}</p>
                                                    <p className="mini-text">{element.time}</p>
                                                </div>
                                            </div>
                                            <div className="col-4 p-0">
                                                        <div className="dropdown">
                                                        
                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" onClick={() => this.toggleCourses(element.id)} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</button>
                                                            <Collapse isOpen={this.state.collapseCourses[element.id-1]}>
                                                                <Card>
                                                                    <CardBody>
                                                                        {
                                                                            element.courses.map((course) => (
                                                                                <a className="dropdown-item" key={course.id}>{course.name}</a>
                                                                            ))
                                                                        }
                                                                    </CardBody>
                                                                </Card>
                                                            </Collapse>
                                                                             
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="line"> </div>
                    
                    <div className="exp" id="exp">
                        <p className="sub-header">Experience</p>
                        <div className="line"></div>
                        <div className="show-list">
                            {
                                data.exp.map((element) => (
                                    <div className="container show-list-element" key={element.id}>
                                        <div className="row">
                                            <div className="col-8 p-0">
                                                <div className="ava">
                                                    <img src={element.img} alt="vamk" className="ava-img"/>
                                                </div>
                                                <div className="description">
                                                    <p className="sub-title">{element.companyName}</p>
                                                    <p className="text">{element.role}</p>
                                                    <p className="mini-text">{element.time}</p>
                                                </div>
                                            </div>
                                            <div className="col-4 p-0">
                                                <div className="dropdown">
                                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" onClick={() => this.toggleExps(element.id)} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Detail</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <Collapse isOpen={this.state.collapseExps[element.id-1]}>
                                                            <Card>
                                                                <CardBody>
                                                                    {
                                                                        element.description
                                                                    }
                                                                </CardBody>
                                                            </Card>
                                            </Collapse>
                                        </div>
                                    </div> 
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}