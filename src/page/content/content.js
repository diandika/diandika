import React from "react";
import ContentItem from "./contentItem";
import './contentStyle.css';

class Content extends React.Component {
    render() {
        return(
            <div className="contentContainer">
                <div className="contentItem">
                    <ContentItem imgUrl="./logo.png" title="Personal Web Project" link="/project"/>
                    <ContentItem imgUrl="./logo.png" title="Storywriting" link="/story"/>
                </div>
                <div className="contentItem">
                    <ContentItem imgUrl="./logo.png" title="3D Design" link="/design"/>
                    <ContentItem imgUrl="./logo.png" title="CV" link="/cv"/>
                </div>
            </div>
        )
    }
}

export default Content;