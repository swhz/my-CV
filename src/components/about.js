import React from 'react'
import Item from './item.js'

const About = () => {
    const aboutArray = [
        { class: 'iconfont icon-age', title: '年龄', desc: 24 },
        { class: 'iconfont icon-sex', title: '性别', desc: '男' },
        { class: 'iconfont icon-education', title: '学历', desc: '本科'},
        { class: 'iconfont icon-University', title: '毕业院校', desc: '华中科技大学'},
        { class: 'iconfont icon-english', title: '英语水平', desc: 'CET-6'},
        { class: 'iconfont icon-coordinate', title: '籍贯', desc: '江西南昌'},
        { class: 'iconfont icon-experience', title: '工作经验', desc: '1年'},
        { class: 'iconfont icon-intention', title: '求职意向', desc: '前端开发'},
        { class: 'iconfont icon-state', title: '状态', desc: '求职中'}
        ]
    return (
        <div className="about-container">
            <h1 className="about-title">关于我</h1>
            <div className="about-content">
                {aboutArray.map((message) => <Item key={message.class} message={message} />)}
            </div>
        </div>
    )
}

export default About