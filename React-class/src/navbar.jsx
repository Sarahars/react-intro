import React from "react";

class Link extends React.Component{
    render(){
        return(
        <li>
            <a href={this.props.url}>{this.props.destination}</a>
        </li>
);
    }
}

class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <h1>logo</h1>
                <ul>
                    <Link destination="google" url="https://google.com"/>
                    <Link destination="youtube" url="https://youtube.com"/>
                    <Link destination="facebook" url="https://facebook.com"/>
                </ul>
            </nav>
                );
    }
}

export default Navbar;