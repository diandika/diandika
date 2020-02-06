import React from "react";
//import logo from './assets/projectPreview.jpg';
import './contentItemStyle.css';
import {Link} from "react-router-dom";

class ContentItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgUrl: props.url,
            title: props.title,
            link: props.link
        }
    }
    render() {
        return(
            <div className="projectContent">
                <Link to={this.state.link}>
                <img className="contentImage" src={this.state.imgUrl} alt="logo" />
                <div className="contentTitle">
                    <h3>{this.state.title}</h3>
                </div>
                </Link>
            </div>
        )
    }
}

export default ContentItem;