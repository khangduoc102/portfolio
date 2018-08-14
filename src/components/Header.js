import React from 'react';

export default class Header extends React.Component {
    state={
        className: 'app-header'
    }

    componentDidMount= () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () =>{
        let lastScrollY = window.scrollY;
        if(lastScrollY>=625 && lastScrollY<2911){
            this.setState({className: 'app-header app-header_scroll-changed'})
        }
        else{
            this.setState({className: 'app-header'})
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    render() {
        return (
            <div className={this.state.className}>
                <div className="nav-bar">
                    <div className="nav-bar__tab">
                    {
                        // <NavLink to="/contact" activeClassName="is-active" >CONTACT</NavLink>
                    }
                        <div>
                            <a className="sub-title" href="#about">About</a> 
                        </div>        
                    </div>
                    <div className="nav-bar__tab">
                        <div>
                            <a className="sub-title" href="#projects">Projects</a> 
                        </div>    
                    </div>
                    <div className="nav-bar__tab">
                        <div>
                            <a className="sub-title" href="#education">Education</a> 
                        </div>    
                    </div>
                    <div className="nav-bar__tab">
                        <div>
                            <a className="sub-title" href="#exp">Experience</a> 
                        </div>    
                    </div>
                    <div className="nav-bar__tab">
                        <div>
                            <a className="sub-title" href="#contact">Contact</a> 
                        </div>    
                    </div>                    
                </div>
            </div>
        )
    }
}