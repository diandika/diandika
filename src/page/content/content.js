import React from "react";
import ContentItem from "./contentItem";
import './contentStyle.css';

class Content extends React.Component {
    render() {
        return(
            <div className="contentContainer">
                <div className="contentItem">
                    <ContentItem imgUrl="./logo.png" title="Personal Web Project"/>
                    <ContentItem imgUrl="./logo.png" title="Storywriting"/>
                </div>
                <div className="contentItem">
                    <ContentItem imgUrl="./logo.png" title="3D Design"/>
                    <ContentItem imgUrl="./logo.png" title="CV"/>
                </div>
            </div>
        )
    }
}

export default Content;