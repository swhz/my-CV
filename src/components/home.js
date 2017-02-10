import React from 'react'

const Home = () => {
    return (
            <div className="home-container">
                <div className="avatar-img">
                    <img src="http://swhzhuster.xin/images/my-CV/avatar.jpg" className="avatar" />
                </div>
                <div className="home-info">
                    <p className="my-name">舒伟增</p>
                    <p className="my-word">热爱编程，代码强迫症患者。</p>
                    <p className="my-profession">前端开发工程师</p>
                    <a href="mailto:swhzhuster@outlook.com" target="_blank" className="my-email">swhzhuster@outlook.com</a>
                </div>
            </div>
        )
}

export default Home