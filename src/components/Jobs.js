import React ,{Component} from 'react';
import Header from './Header';
import './Jobs.css';
class Jobs extends Component {
    constructor() {
        super();
        this.state = {
            classL:true
        }
    }
    render() {
        return(

            <div id="jobs-hw">
                <Header title='职位详情'  classL={this.state.classL}/>
                <div id="jobs-contents">
               <div className="jobs-posit">
                   <h2>前端开发工程师</h2>
                   <p>
                       <em className="job-icon notcoll"></em>
                       <span className="job-text">未关注</span>
                   </p>
               </div>
                <div className="jobs-detail">
                    <div className="jobs-items">
                        <span className="jobs-item">
                            <em className="jobs-icon salay"></em>
                            <i className="jobs-text">6k-8k</i>
                        </span>
                          <span className="jobs-item">
                            <em className="jobs-icon workaddress"></em>
                            <i className="jobs-text">昆明</i>
                        </span>
                          <span className="jobs-item">
                            <em className="jobs-icon jobnature"></em>
                            <i className="jobs-text">全职</i>
                        </span>
                          <span className="jobs-item">
                            <em className="jobs-icon workyear"></em>
                            <i className="jobs-text">1-3年</i>
                        </span>
                        <span className="jobs-item">
                            <em className="jobs-icon education"></em>
                            <i className="jobs-text">本科及以上</i>
                        </span>
                    </div>
                    <div className="jobs-temptation">
                        职位诱惑：平台好,食堂好,美女多,氛围好
                    </div>
                </div>
                <div className="jobs-company" >
                    <img className="jobs-logo" src="//www.lgstatic.com/image1/M00/38/FE/Cgo8PFWnZCmARYCyAAESJDgU1HA907.jpg?cc=0.219249285524711" alt=""/>
                    <div className="jobs-desc">
                        <div className="jobs-dleft">
                            <h2>本元支付</h2>
                            <p className="j-icon">
                                移动互联网,金融/ 不需要融资/ 150-500人
                            </p>
                        </div>
                        <span className="jobs-dright"></span>
                    </div>
                </div>
                <div className="jobs-positiondesc">
                    <div className="jobs-header">职位描述</div>
                    <div className="jobs-content">
                        <p>岗位职责：</p>
                        <p>1、负责公司桌面、移动和APP端的前端开发工作；</p>
                        <p>2、确保团队的前端开发质量，保障开发进度，不断提升效率和产能，追求高性能，有针对性实施前后端分离与前端组件化；</p>
                        <p>3、根据产品设计文档、产品原型，快速给出解决方案，并进行页面制作，确保页面制作的样式、布局与产品原型一致；</p>
                        <p>4、负责前端新技术调研和积累，了解最新的前端发展技术，并部分采用到实际开发工作中</p>
                        <p><br/></p>
                        <p>任职要求：</p>
                        <p>1、计算机或相关专业本科以上学历，1-3年及以上前端领域开发经验，能独立完成前端开发工作；</p>
                        <p>2、精通HTML5/CSS/JQuery等相关技术，具有HTML5实际项目开发经验,能写兼容主流浏览器的代码；</p>
                        <p>3、熟悉基于React-native的组件化开发模式;</p>
                        <p>4、能熟练使用js的相关前端框架，如angularJS、reactJS、VUE等；</p>
                        <p>5、有UI设计工作经验者优先</p>
                        <p><br/></p>
                    </div>
                </div>
                <div className="jobs-positioneval">
                    <div className="jobs-eval-title">
                        面试评价
                        <span id="jobs-total">(<span>0</span>)</span>
                    </div>
                    <ul className="jobs-list">
                        <li className="jobs-list-item">暂无面试评价</li>
                    </ul>
                </div>
                 </div>
                <div  id="jobs-resume">投个简历</div>
            </div>


        )
    }
}
export default Jobs