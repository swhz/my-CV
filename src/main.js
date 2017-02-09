import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Button, Modal } from 'antd'
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
            num: 0,
            visible: false,
            direction: 1
        }
        this.onCollapseChange = this.onCollapseChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    //在完成首次渲染之前调用（首次加载或刷新页面），根据url的hash值改变state，具体表现为侧边栏选中项与页面渲染页相对应
    componentWillMount() {
        const width = window.screen.availWidth
        const height = window.screen.availHeight
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
        if (height > width) {
            this.setState({
                visible: true
            })
        }
    }

    //完成渲染新的props或者state后调用（切换路由），路由变化引发hash值变化，通过hash值与之前
    //状态属性作相应比较，如有变化则改变state，以达到侧边栏选中项与页面渲染页相对应
    componentDidUpdate(prevProps, prevState) {
        const newkey = window.location.hash.split('#/')[1] || 'home'
        if (newkey != prevState.current) {
            const keyArray = ['home', 'about', 'skill', 'project', 'contact']
            let num = 0
            keyArray.forEach((key, index) => {
                if (newkey == key) {
                    num = index
                }
            })
            let direction = 0
            direction = (prevState.num - num) > 0 ? 0 : 1
            this.setState({
                current: newkey,
                num,
                direction,
            })
        }
    }

    //路由切换时，初始化容器滚动条位置
    handleClick() {
        this.scroll.scrollTop = 0
    }

    //侧边栏状态切换
    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    //隐藏模态框
    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        const { collapse, num, direction } = this.state
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
                    <div className="back" onClick={this.handleClick}>
                        <Link to={num > 0 ? routerArray[num - 1] : routerArray[num]}>
                            <Button type="primary">
                                <Icon type="left" />上一页
                            </Button>
                        </Link>
                    </div>
                    <div className="next" onClick={this.handleClick}>
                        <Link to={num < 4 ? routerArray[num + 1] : routerArray[num]}>
                            <Button type="primary">
                                <Icon type="right" />下一页
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={direction > 0 ? "layout-main" : "layout-main back"} ref={(div) => { this.scroll = div }}>
                    <ReactCSSTransitionGroup
                        transitionName="transitionWrapper"
                        component="div"
                        className="transitionWrapper"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        <div key={this.props.location.pathname}
                            style={{ position: "absolute", width: "100%" }}>
                            {
                                this.props.children
                            }
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
                <Modal title="" footer=""
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <p style={{ textAlign: 'center' }}>横屏浏览效果更佳哦！</p>
                </Modal>
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


