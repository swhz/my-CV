import React from 'react'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">联系我</h1>
            <div className="contact-content">
                <div className="contact-main">
                    <div className="main-item">
                        <div className="item-icon">
                            <i className="iconfont icon-weixin"></i>
                        </div>
                        <div className="item-content">
                            微信:heidongdeweixing
                        </div>
                    </div>
                    <div className="main-item">
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
        </div>
    )
}

export default Contact