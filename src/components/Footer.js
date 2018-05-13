import React from 'react';


export default class Home extends React.Component {
    render() {
        return (
            <div className="app-footer">
                <div className="contact-form">
                    <p className="sub-header">Get in touch</p>
                    <div className="line"></div>
                    <form>
                        <p className="text">Name*</p>
                        <input type="text" size="50"/>
                        <p className="text">Email*</p>
                        <input type="text" size="50"/>
                        <p className="text">Message*</p>
                        <textarea rows="5" cols="60"/>
                        <button className="btn send-btn" type="submit">
                            <p className="sub-title">Send</p>
                        </button>
                    </form>
                </div>
                <div className="contact-places">
                </div>
            </div>
        )
    }
}