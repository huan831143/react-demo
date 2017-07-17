import React ,{Component} from 'react';
import './Content.css'
import {browserHistory,Link} from 'react-router';
class Content extends Component {
    constructor(){
        super();
        //this.contClick = this.contClick.bind(this);
    }
    render(){
        var {context}=this.props;
        var src='//www.lgstatic.com/'+context.companyLogo;
        return(
            <Link to="/jobs">
            <li className="cont-list">
                <img src= {src} className="cont-logo"/>
                <div className="cont-desc">
                    <h2>{context.companyFullName}</h2>
                    <p className="cont-info">
                        <span className="cont-pos">{context.positionName}[{context.city}]</span>
                        <span className="cont-sal">{context.salary}</span>
                    </p>
                    <p className="cont-time">{context.createTime}</p>
                </div>
            </li>
                </Link>
        )
    }

}

export default Content