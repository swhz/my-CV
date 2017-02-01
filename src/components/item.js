import React from 'react'

const Item = ({message} = props) => {
    return (
        <div className="item">
            <div className="item-icon">
                <i className={message.class}></i>
            </div>
            <div className="item-info">
                <p className="info-title">{message.title}</p>
                <p className="info-desc">{message.desc}</p>
            </div>
        </div>
    )
}

export default Item