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
            src: e.target.src
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
                    <Timeline>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    在线个人简历（2017.1 - 至今）
                                    <a className="item-link" href="#">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                    <a className="item-link" href="#">
                                        <i className="iconfont icon-link"></i>Demo
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        设计优雅，内容完善的静态单页面（SPA）简历页面，使用React、React Router、Ant Design等
                                        库和框架设计，语法采用ES6、ES7，运用webpack等模块打包工具进行编译打包。
                                    </div>
                                    <div className="item-img">
                                        <img src="https://swhzhuster.xin/images/my-CV/my-CV.png"
                                            style={{ width: 300 }}
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--模仿猫眼电影（2017.1）
                                    <a className="item-link" href="#">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                    <a className="item-link" href="#">
                                        <i className="iconfont icon-link"></i>Demo
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        具有猫眼电影官方小程序基本功能（受限于api，无订票、选座、登陆等功能）的微信小程序
                                        （早于微信小程序上线），界面设计合理，交互效果良好。
                                    </div>
                                    <div className="item-img">
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan1.png"
                                            style={{width:140}}
                                            onClick={this.showModal} />
                                        <img src="https://swhzhuster.xin/images/my-CV/maoyan3.png"
                                            style={{width:140}}
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    项目名字
                                <a className="item-link"><i className="iconfont icon-link"></i>源代码</a>
                                    <a className="item-link"><i className="iconfont icon-link"></i>Demo</a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        项目描述
                                </div>
                                    <div className="item-img">
                                        <img src="https://swhzhuster.xin/images/my-CV/logo.png" alt="" />
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
                        <img src={this.state.src} style={{ maxWidth: '100%' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
