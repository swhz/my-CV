import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect, IndexLink } from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Button } from 'antd'
const SubMenu = Menu.SubMenu

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import Home from './components/home.js'
import About from './components/about.js'
import Skill from './components/skill.js'
import Project from './components/project.js'
import Contact from './components/contact.js'

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: true,
            current: 'home',
            num: 0
            // username: ''
        }
        this.onCollapseChange = this.onCollapseChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        const newkey = window.location.hash.split('#/')[1] || 'home'
        const keyArray = ['home', 'about', 'skill', 'project', 'contact']
        let num = 0
        keyArray.forEach((key, index) => {
            if (newkey == key) {
                num = index
            }
        })
        this.setState({
            current: newkey,
            num,
        })
    }

    handleClick(e) {
        const keyArray = ['home', 'about', 'skill', 'project', 'contact']
        let num = 0
        keyArray.forEach((key, index) => {
            if (e.key == key) {
                num = index
            }
        })
        this.setState({
            current: e.key,
            num,
        })
        this.scroll.scrollTop = 0
    }

    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    onFlip(n) {
        return (event) => {
            const keyArray = ['home', 'about', 'skill', 'project', 'contact']
            const current = this.state.current
            let num = this.state.num
            if (n == -1) {
                if (num > 0) {
                    num--
                }
            } else {
                if (num < 4) {
                    num++
                }
            }
            this.setState({
                current: keyArray[num],
                num,
            })
            this.scroll.scrollTop = 0
        }
    }

    render() {
        const { collapse, num } = this.state
        const routerArray = ['/', '/about', '/skill', '/project', '/contact']
        return (
            <div className={collapse ? "layout-aside layout-aside-collapse" : "layout-aside"}>
                <aside className="layout-sider">
                    <div className="layout-logo">
                        <i className="iconfont icon-jianli" id="logo"></i>
                        {!collapse && <span className="title-text">舒伟增</span>}
                    </div>
                    <Menu mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['home']}
                        selectedKeys={[this.state.current]}
                        onClick={this.handleClick}
                        >
                        <Menu.Item key="home">
                            <Link to="/">
                                <i className="iconfont icon-index"></i>
                                {!collapse && <span className="nav-text">首　页</span>}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">
                                <i className="iconfont icon-about"></i>
                                {!collapse && <span className="nav-text">关于我</span>}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="skill">
                            <Link to="/skill">
                                <i className="iconfont icon-skill"></i>
                                {!collapse && <span className="nav-text">技　能</span>}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="project">
                            <Link to="/project">
                                <i className="iconfont icon-project"></i>
                                {!collapse && <span className="nav-text">项　目</span>}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <Link to="/contact">
                                <i className="iconfont icon-contact"></i>
                                {!collapse && <span className="nav-text">联　系</span>}
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <div className="aside-action" onClick={this.onCollapseChange}>
                        {collapse ? <Icon type="right" /> : <Icon type="left" />}
                    </div>
                </aside>
                <div className="layout-flip">
                    <div className="back" onClick={this.onFlip(-1)}>
                        <Link to={num > 0 ? routerArray[num - 1] : routerArray[num]}>
                            <Button type="primary">
                                <Icon type="left" />上一页
                            </Button>
                        </Link>
                    </div>
                    <div className="next" onClick={this.onFlip(1)}>
                        <Link to={num < 4 ? routerArray[num + 1] : routerArray[num]}>
                            <Button type="primary">
                                <Icon type="right" />下一页
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="layout-main" ref={(div) => { this.scroll = div } }>
                    <ReactCSSTransitionGroup
                        transitionName="transitionWrapper"
                        component="div"
                        className="transitionWrapper"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                        <div key={this.props.location.pathname}
                            style={{ position: "absolute", width: "100%" }}>
                            {
                                this.props.children
                            }
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="skill" component={Skill} />
            <Route path="project" component={Project} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>
), document.getElementById('app'));


