import React ,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router';
class Header extends Component {
    constructor(){
        super();
        this.state= {
            classL:false
        }
        }
    render(){
        var classL = this.props.classL? 'header-left' : 'hedader-none';
        var classR = this.props.classL? 'header-rigth' : 'hedader-none';
        return(
            <div id='header'>
                <Link to="/" className={classL}><i></i></Link>
                {this.props.title}
                <Link to="/" className={classR}> <i></i></Link>
            </div>
        )
    }


}

export default Header