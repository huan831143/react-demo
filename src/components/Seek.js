import React ,{Component} from 'react';
import './Seek.css';
import Content from './Content';
import History from './History';
import $ from 'jquery';
class Seek extends Component {
    constructor(){
       super();
    }
    render(){
        return(
            <div>
                <div className="seek-linputer">
                    <div className="seek-lbutton">
                        <span className="seek-city">全国</span>
                        <span className="seek-cityicon"></span>
                    </div>
                    <div className="seek-rinput">
                        <input className="seek-inputer" type="text" placeholder="搜索职位或公司"/>
                        <span className="search"><em className="seek-searchicon"></em></span>
                    </div>
                </div>
                <div className="listcon">
                    <ul className="seek-history">
                        <History/>
                    </ul>
                    <div className="seek-custominfo">
                        将搜索地区和关键词设为定制条件
                    </div>
                    <ul className="list">
                    </ul>
                </div>
            </div>
        )
    }
}
export default Seek