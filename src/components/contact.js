import React from 'react'
import { Modal } from 'antd'

export default class Contact extends React.Component {
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
            src: e.currentTarget.getAttribute("data-src") //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="contact-container">
                <h1 className="contact-title">联系我</h1>
                <div className="contact-content">
                    <div className="contact-main">
                        <div className="main-item" 
                        data-src="https://swhzhuster.xin/images/my-CV/mmqrcode1485960438307.png"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-weixin"></i>
                            </div>
                            <div className="item-content">
                                微信:heidongdeweixing
                            </div>
                        </div>
                        <div className="main-item" 
                        data-src="https://swhzhuster.xin/images/my-CV/qrcode_1485960492292.jpg"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-qq"></i>
                            </div>
                            <div className="item-content">
                                QQ:1479132837
                            </div>
                        </div>
                        <a href="mailto:1479132837@qq.com" target="_blank" className="main-item">
                            <div className="item-icon">
                                <i className="iconfont icon-email"></i>
                            </div>
                            <div className="item-content">
                                邮箱:1479132837@qq.com
                            </div>
                        </a>
                    </div>
                    <div className="contact-other">
                        <p className="other-title">其他方式</p>
                        <div className="other-content">
                            <a className="other-item" href="https://github.com/swhz" target="_blank">
                                <i className="iconfont icon-github"></i>
                            </a>
                            <a className="other-item" href="https://www.zhihu.com/people/shu-wei-zeng" target="_blank">
                                <i className="iconfont icon-zhihu"></i>
                            </a>
                            <a className="other-item" href="http://weibo.com/p/1005055680903607" target="_blank">
                                <i className="iconfont icon-weibo"></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <Modal title="" footer="" width="30%"
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
