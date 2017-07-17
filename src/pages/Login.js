import React ,{Component} from 'react';
import './Login.css'
import{Link,browserHistory} from 'react-router';
import $ from 'jquery';
class Login extends Component {
    constructor(){
        super();
       this.state={
           className:false,
           type:true,
           userName:'',
           password:''

        }
        this.eyeClick = this.eyeClick.bind(this);
        this.greenClick = this.greenClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.passwordChange= this.passwordChange.bind(this);
    }
    render(){
        var clatext = this.state.className? 'login-eyes' : 'login-eye';
        var tytext= this.state.type? 'password' : 'text';
		return(
               <div className="login-box">
				<form className="login-form">
					<input className="login-name" type="text" placeholder="已验证/手机邮箱" value={this.state.userName} onChange={this.handleChange}/>
					<div>
                    <input className="login-password" type={tytext} placeholder="密码" value={this.state.password} onChange={this.passwordChange}/>
                    <i className={clatext} onClick={this.eyeClick}></i>
                     </div>
                    <div className="login-green" onClick={this.greenClick}>登录</div>
					<p className="login-p">还没有账号?</p>
					<button className="login-register">注册</button>
				</form>
			   </div>
			)
	}
    eyeClick(){
        this.setState({className: !this.state.className, type:!this.state.type});

        }
    handleChange(e){
        this.setState({
            userName:e.target.value

        })
    }
    passwordChange(e){
        this.setState({
            password:e.target.value
        })
    }
    greenClick() {
        // var appData = require('./data.json');
        //var seller = appData.seller;
        if (this.state.userName !== '123') {
            alert("请输入正确户名");
            return
        } else if (this.state.password !== '123') {
            alert("密码或用户名错误");
            return
        };
        if(this.state.userName=='123'){
           this.state.userName='gaohuan'

        };
        var url = `mine`;
        browserHistory.push({
            pathname: url,
            query: {
                userName: this.state.userName
            }
        });//通过browserHistory.push()方式实现路由跳转
        localStorage.setItem('user', this.state.userName)

    }
}

export default Login