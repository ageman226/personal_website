import React, { Component } from 'react'

export class Leftnav extends Component {
    render() {
        return (
            <div className='floating-menu' style={{ top: '0px' }}>
                <div className='selector'>
                    Truth
                </div>
                <div className='news'></div>
                <div className='social-media'>Hello</div>
            </div>
        )
    }
}

export default Leftnav