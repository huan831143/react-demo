import React ,{Component} from 'react';
import Header from '../components/Header';
import Content from'../components/Content';
import {Link} from 'react-router';
import './Post.css'
import $ from 'jquery';
class Post extends Component {
    constructor(props){
        super(props);
        this.state={ary:[],
            topon:"post-top",
            logtop:"post-none",
            num:1
        };
        this.nextClick=this.nextClick.bind(this)
    }
    componentWillMount(){
        var a=localStorage.getItem('user')
        if(a!==null){
            this.setState({
                topon:"post-none",
                logtop:'post-logtop'
            })
        }
}
    render(){
        var lists = this.state.ary.map(function(elm,idx){
            return(
                <Content context={elm} key={idx}/>
            );
        })


		return(
			<div>
               <Header title='拉勾网'/>
				<div id='content'>
                    <div className={this.state.topon}>
                        <span>
                            10秒钟定制职位
                        </span>
                        <Link to="/Login" className="post-login">去登录</Link>
                    </div>
                    <div className={this.state.logtop}>
                        <span>web/成都/2k-5k/没有要求</span>
                        <a className="post-topgo">
                            <em className="post-topicon"></em>
                            <em className="pots-toptext">编辑</em>
                        </a>
                    </div>
					<ul>
                        {lists}
                        <li className="list-more" onClick={this.nextClick}>加载更多</li>
					</ul>
                    <div className="copyright">
                        <p>©2015 lagou.com, all right reserved </p>
                        <div className="copyright-item">
                            <span className="post-color">移动版 · </span>
                            <span>电脑版 · </span>
                            <a href="#header" className="post-a">回顶部</a>
                        </div>
                    </div>
				</div>
			</div>
			)
     }
	componentDidMount(){
		var _this=this
		$.get("https://m.lagou.com/listmore.json?pageNo=1&pageSize=15",function (data){
			var ary = data.content.data.page.result
			_this.setState({ary})
		})
	}
    nextClick(){
        var _this=this;
        var _num=_this.state.num+1
        var ulr="https://m.lagou.com/listmore.json?pageNo="+_num+"&pageSize=15";
        $.get(ulr,function (data){
            var b = data.content.data.page.result;
            _this.setState({
                ary:_this.state.ary.concat(b),
                num:_num

            })
        })
    }
}


export default Post