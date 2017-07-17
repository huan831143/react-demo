import React ,{Component} from 'react';
import Header from '../components/Header';
import Seek from '../components/Seek';
class Search extends Component {

	render(){
		return(
            <div>
               <Header title="拉勾网"/>
                <Seek/>
            </div>
			)
	}
}

export default Search