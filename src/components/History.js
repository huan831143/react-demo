import React ,{Component} from 'react';
import './History.css';
class History extends Component {
    constructor() {
        super();

    }
    render(){
        return(
            <li className="seek-history-item" >
                <span className="seek-text" data-name="web">web</span>
                <div className="seek-delcon"  data-name="web" >
                    <span className="seek-delicon" ></span>
                </div>
            </li>
        )
    }

}
export default History