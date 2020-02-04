import React from "react";
//import logo from './assets/projectPreview.jpg';
import './contentItemStyle.css';

class ContentItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgUrl: props.url,
            title: props.title,
        }
    }
    render() {
        return(
            <div className="projectContent">
                <img className="contentImage" src={this.state.imgUrl} alt="logo" />
                <div className="contentTitle">
                    <h3>{this.state.title}</h3>
                </div>
            </div>
        )
    }
}

export default ContentItem;