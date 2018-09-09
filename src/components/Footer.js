import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import MdMail from 'react-icons/lib/md/mail';
import MdCall from 'react-icons/lib/md/call';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import data from './../data.json';

import axios from 'axios';

export default class Home extends React.Component {
    state= {
        loading: false,
        sendButtonStatus: false,
        error: undefined
    }
    onSubmit= (e) =>{
        e.preventDefault();
        this.setState({loading: true, sendButtonStatus: true})
        const name = e.target.elements[0].value;
        const email = e.target.elements[1].value;
        const message = e.target.elements[2].value;

        let mail = {
            from: `hoang_lp_97@yahoo.com`,
            to: 'rainmetery@gmail.com',
            subject: `${name} (${email}) sent an email!`,
            html: '',
            text: message
        }

        let responsedMail = {
            from: `hoang_lp_97@yahoo.com`,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `<h4>Hi ${name}!<h4> <p>If you receive this email, that means your message had been sent. Thank you so much and I will see you very soon!</p><br><p>Have a nice day!</p><h4>Hoang Le</h4>`,
            text: ''
        }
        
        console.log(mail);
        console.log(responsedMail);

        
        let data = new FormData();
        data.set('mail', mail);
        data.set('responsedMail', responsedMail);

        axios.post('/sendMail', {
            mail: mail,
            responsedMail: responsedMail
        }).then((res) =>{
                this.setState({loading: false, sendButtonStatus: true})
          }).catch((e) => {
                this.setState({loading: false, error: "Something happened, please try again!"});
          });
          
    }
    render() {
        return (
            <div className="container-fluid app-footer" id="contact">
                <div className="row">
                    <div className="col-md-8 contact-form">
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
                            <button className="btn send-btn" type="submit" disabled={this.state.sendButtonStatus}>
                                {
                                    this.state.loading ? <div className="loading"></div> : <p className="sub-title">Send</p>
                                }
                            </button>
                            {
                                this.state.error ? <p>{this.state.error}</p> : null
                            }
                        </form>
                    </div>
                    <div className="col-md-4 contact-places">
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