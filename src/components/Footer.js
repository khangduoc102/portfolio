import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import MdMail from 'react-icons/lib/md/mail';
import MdCall from 'react-icons/lib/md/call';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import data from './../data.json';



export default class Home extends React.Component {
    onSubmit= () =>{
        
    }
    render() {
        return (
            <div className="container-fluid app-footer" id="contact">
                <div className="row">
                    <div className="col-8 contact-form">
                        <p className="sub-header">Get in touch</p>
                        <div className="line"></div>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <p className="text">Name*</p>
                                <input className="form-control" type="text" size="50"/>
                            </div>
                            <div className="form-group">
                                <p className="text">Email*</p>
                                <input className="form-control" type="text" size="50"/>
                            </div>
                            <div className="form-group">
                                <p className="text">Message*</p>
                                <textarea className="form-control" rows="6" cols="60"/>
                            </div>
                            <button className="btn send-btn" type="submit">
                                <p className="sub-title">Send</p>
                            </button>
                        </form>
                    </div>
                    <div className="col-4 contact-places">
                        <p className="sub-header">Contact</p>
                        <div className="line"></div>
                        <div className="form-group">
                            <div className="address-block">
                                <h3><FaMapMarker /></h3>
                                <p>{ data.contact.address }</p>
                            </div>
                            <div className="address-block">
                                <h3><MdMail /></h3>
                                <p>{ data.contact.email }</p>
                            </div>
                            <div className="address-block">
                                <h3><MdCall /></h3>
                                <p>{ data.contact.phone }</p>
                            </div>
                            <div className="address-block">
                                <h3><FaLinkedinSquare /></h3>
                                <p>{ data.contact.linkedin }</p>
                            </div>
                            <div className="address-block">
                                <h3><FaGithub /></h3>
                                <p>{ data.contact.github }</p>
                            </div>
                        </div>
                    </div>
                    <div className="credit">
                        <p>Made by Hoang Le. Designed by Ly Dang. </p>
                    </div>
                </div>
            </div>
        )
    }
}