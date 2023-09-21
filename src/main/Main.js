import React from "react";
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="child">
                <div className="c-f-r-1">
                    <div className="child-1 center">
                        Lorem Ipsum
                    </div>
                    <div className="child-2 center"> Link 1</div>
                </div>
                <div className="c-f-r-2">
                    <div className="child-3 center">This is contenmt aligned in the center verticaly and horizontally</div>
                    <div className="child-3 center"> </div>
                </div>
                <div className="c-f-r-3">
                    <div className="child-4 center">This is a footer aligned in left</div>
                    <div className="child-5 center"> </div>
                    
                </div>
            </div>
        );
    }
}
export default Main;