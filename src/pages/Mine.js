import React ,{Component} from 'react';
import Header from '../components/Header';
import {Link} from 'react-router';
import './Mine.css';
class Mine extends Component {
    constructor(){
        super();
            this.state={
                userName:localStorage.getItem('user'),
                classNone : 'mine-login',
                userNone : 'mine-none',
                logout : 'mine-none'
            }
        this.logoutClick=this.logoutClick.bind(this)
    }
    componentDidMount(){
       var _user=this.state.userName;
        if(_user!==null){
            this.setState({
                classNone : 'mine-none',
                userNone : 'mine-center',
                logout : 'mine-logout',
                userName:_user
            })
        }
    }
    render(){
        return(
            <div>
                <Header title="拉勾网"/>
                <div className="mine-user">
                     <Link to="/login" className={this.state.classNone}>登录/注册</Link>
                    <div className={this.state.userNone}>
                        <a className="mine-but" href="http://www.lagou.com/center/preview.html" target="_self"> 简历&gt; </a>
                        <div className="mine-headcon">
                            <img className="mine-headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png"/>
                        </div>
                        <div className="mine-name">{this.state.userName}</div>
                    </div>
                </div>
                <div className="mine-buttons">
                    <Link to="/login" className="mine-button">投递</Link>
                    <Link to="/login" className="mine-button">面试</Link>
                    <Link to="/login" className="mine-button">邀约</Link>
                    <Link to="/login" className="mine-button">收藏</Link>
                </div>
                <span className={this.state.logout} onClick={this.logoutClick}>退出登录</span>
            </div>
        )
    }
    logoutClick(){
        this.setState({
            classNone : 'mine-login',
            userNone : 'mine-none',
            logout : 'mine-none',
            userName:localStorage.removeItem('user')
        })
    }
}

export default Mine