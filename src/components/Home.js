import React from 'react';
import IoBonfire from 'react-icons/lib/io/bonfire';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import { Collapse, Card, CardBody, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap';

import data from './../data.json';

export default class Home extends React.Component {
    state= {
        showedPrj: [0, 1, 2],
        collapseCourses: [false, false],
        collapseExps: [false],
        activeIndex:0
    }

    componentDidMount = () => {

    }

    componentDidMount= () => {
        window.addEventListener('resize', this.handleResize);
    }

    handleResize= () => {
        
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

    // For Carouse
        onExiting = () => {
            this.animating = true;
        }
        
        onExited= () => {
            this.animating = false;
        }
        
        next= () => {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === data.projects.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({ activeIndex: nextIndex });
        }
        
        previous= () => {
            if (this.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? data.projects.length - 1 : this.state.activeIndex - 1;
            this.setState({ activeIndex: nextIndex });
        }
        
        goToIndex = (newIndex) => {
            if (this.animating) return;
            this.setState({ activeIndex: newIndex });
        }
    // End

    render() {
        const { activeIndex } = this.state;

        const slides = data.projects.map((item, index) => {
            return (
                <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={index}
                >
                <img src={item.img} alt={item.name} />
                <CarouselCaption captionText={item.description} captionHeader={item.name} />
                </CarouselItem>
            );
        });

        return (
            <div className="container-fluid p-0 app-body">
                <div className="container p-0 banner">
                    <div className="row">
                        <div className="container banner-body">
                            <div className="logo">
                                <p><IoBonfire /></p>
                            </div>
                            <div className="logo-name">
                                <p className="header">{data.banner.name}</p>
                                <p className="sub-header">{data.banner.job}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p className="text">{data.banner.description}</p>
                    </div>        
                </div>
                <div className="container-fluid p-0 info" id="about">
                    <div className="container intro">
                        <div className="row">
                            <div className="col-lg-8 col-md-6 col-xs-12">
                                <div className="intro-block">
                                    <p className="sub-header">{data.intro.title}</p>
                                    <div className="line"></div>
                                    <p className="text">{ data.intro.description }</p>
                                    <button className="btn rm1">
                                        <p className="sub-title">Read more <FaAngleRight /></p>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="ava">
                                    <img src={data.intro.img} alt="my ava" className="ava-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="container projects" id="projects">
                        <p className="sub-header">Projects</p>
                        <div className="line"></div>
                        <div className="container">
                            
                            
                            
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={this.next}
                                    previous={this.previous}
                                >
                                    <CarouselIndicators items={data.projects} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                    {slides}
                                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                                </Carousel>

                                
                          
                            
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