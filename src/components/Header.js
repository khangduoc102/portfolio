import React from 'react';
import IoBonfire from 'react-icons/lib/io/bonfire';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="app-header">
                <div className="nav-bar">
                    <div className="nav-bar__tab">
                    {
                        // <NavLink to="/contact" activeClassName="is-active" >CONTACT</NavLink>
                    }
                        <div>
                            <p className="sub-title">About</p> 
                        </div>        
                    </div>
                    <div className="nav-bar__tab">
                        <div>
                            <p className="sub-title">Projects</p> 
                        </div>    
                    </div>
                    <div className="nav-bar__tab">
                        <div>
                            <p className="sub-title">Education</p> 
                        </div>    
                    </div>
                    <div className="nav-bar__tab">
                        <div>
                            <p className="sub-title">Contact</p> 
                        </div>    
                    </div>                    
                </div>
            </div>
        )
    }
}