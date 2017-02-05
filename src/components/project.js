import React from 'react'
import { Timeline, Modal } from 'antd'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
   
    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src")  //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">项目经验</h1>
                <div className="project-content">
                    <Timeline pending={<a href="https://github.com/swhz" target="_blank" className="item-title">更多项目内容尽在github（点击进入）</a>}>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    在线个人简历（2017.1 - 至今）
                                    <a className="item-link" href="https://github.com/swhz/my-CV" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                    <a className="item-link" href="http://swhzhuster.xin/my-CV" target="_blank">
                                        <i className="iconfont icon-link"></i>Demo
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        设计优雅，内容完善的静态单页面（SPA）简历页面，使用React、React Router、Ant Design等
                                        库和框架设计，语法采用ES6、ES7，运用webpack等模块打包工具进行编译打包。
                                    </div>
                                    <div className="item-img">
                                        <img src="https://swhzhuster.xin/images/my-CV/my-CV-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/my-CV.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--模仿猫眼电影（2017.1）
                                    <a className="item-link" href="#" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        具有猫眼电影官方小程序基本功能（受限于api，无订票、选座、登陆等功能）的微信小程序
                                        （早于微信小程序上线），界面设计合理，交互效果良好。
                                    </div>
                                    <div className="item-img">
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan1-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/maoyan1.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan2-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/maoyan2.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan3-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/maoyan3.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan4-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/maoyan4.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan5-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/maoyan5.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan6-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/maoyan6.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--简单商城（2016.12）
                                    <a className="item-link" href="#" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        模仿爱拼宝宝app的商城项目（受限于api，功能比较简单），界面设计参照
                                        官方app，交互效果良好。
                                    </div>
                                    <div className="item-img">
                                        <img src="https://swhzhuster.xin/images/my-CV/aipin1-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/aipin1.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/aipin2-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/aipin2.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/aipin3-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/aipin3.png"
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/aipin4-small.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/aipin4.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--综合练习项目（2016.12）
                                    <a className="item-link" href="#" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        运用小程序实现了2048小游戏、canvas时钟以及Todolist，界面设计简洁，
                                        游戏试玩良好，时钟稳步运行，Todolist配有简单的后台接口，无明显bug。
                                    </div>
                                    <div className="item-img">
                                        
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    前端游戏练习综合（2016.7--2016.11）
                                    <a className="item-link" href="#" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                    <a className="item-link" href="#" target="_blank">
                                        <i className="iconfont icon-link"></i>Demo
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        前端学习过程中做过的小游戏demo集合，包括贪食蛇、2048、骰子游戏等，使用原生js、
                                        jquery以及canvas编写，游戏试玩良好，无明显bug。
                                    </div>
                                    <div className="item-img">
                                        
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    Matlab项目（2015.3--2015.5）
                                    <a className="item-link" href="https://github.com/swhz/matlab-project" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        运用matlab编写的建筑热平衡计算程序以及一些matlab练习项目，其中建筑热平衡计算程序
                                        是本人毕业设计的程序部分，因计算结果准确而丰富，获得了导师的赞赏。（下图是部分计算结果图表）
                                    </div>
                                    <div className="item-img">
                                        <img src="https://swhzhuster.xin/images/my-CV/matlab1.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/matlab1.png"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/matlab2.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/matlab2.png"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/matlab3.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/matlab3.png"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/matlab4.png"
                                            data-src="https://swhzhuster.xin/images/my-CV/matlab4.png"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    Fortran项目（2013.12--2014.2）
                                    <a className="item-link" href="https://github.com/swhz/Fortran-project" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        运用Fortran语言编写的计算力学项目和板壳力学项目，其中计算力学项目包含二维和三维的桁架、
                                        钢架以及等参元的力学计算程序，计算结果准确，通用性良好；板壳力学项目是为解决大挠度问题
                                        而编写的计算程序，其计算结果与软件计算结果一致。（由于计算结果都是纯数据，就不贴图了）
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <Modal title="" footer="" width="80%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%',maxHeight: '100%',width:'auto',height:'auto' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
