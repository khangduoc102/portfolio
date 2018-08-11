import React from 'react';
import IoBonfire from 'react-icons/lib/io/bonfire';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import data from './../data.json';

export default class Home extends React.Component {
    state= {
        showedPrj: [0, 1, 2]

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
                <div className="info">
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
                            <img src="./img/ava.jpg" alt="my ava" className="ava-img" />
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="projects">
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
                    
                    <div className="education">
                        <p className="sub-header">Education</p>
                        <div className="line"></div>
                        <div className="show-list">
                            <div className="container show-list-element">
                                <div className="row">
                                    <div className="col-8 p-0">
                                        <div className="ava">
                                            <img alt="vamk" className="ava-img"/>
                                        </div>
                                        <div className="description">
                                            <p className="sub-title">{data.education[0].name}</p>
                                            <p className="text">{data.education[0].degree}</p>
                                            <p className="mini-text">{data.education[0].time}</p>
                                        </div>
                                    </div>
                                    <div className="col-4 p-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="dropdown">
                                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item">{data.education[0].courses[0].name}</a>
                                                        <a className="dropdown-item">{data.education[0].courses[1].name}</a>
                                                        <a className="dropdown-item">{data.education[0].courses[2].name}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}