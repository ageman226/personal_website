import React, { Component } from 'react'
import About from './About'

export class Wrapper extends Component {
    render() {
        return (
            <div className='container-fluid main-wrapper'>
                <div className='justify-text'>
                    <About url="https://sguru.org/wp-content/uploads/2017/06/cool-anime-profile-pictures-44c773de9847d476e4731da0af23318e-manga-eyes-dark-anime.jpg" />
                </div>
            </div>
        )
    }
}

export default Wrapper