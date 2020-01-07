import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div className="popup">
                <React.Fragment>
                    <link 
                        rel="stylesheet" 
                        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
                        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" 
                        crossOrigin="anonymous" 
                    />
                </React.Fragment>
                <div className="popup-content" data-cy="popup">
                    <button className="popup-btn" onClick={this.props.closePopup} data-cy="close-popup-btn"><i className="fas fa-times-circle"></i></button>
                    <h2 className="popup-text">{this.props.text}</h2>
                </div>
            </div>
        );
    }
}

export default Popup;