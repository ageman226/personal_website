import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <img src={this.props.url} alt="" srcset="" class="avatar" />
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been
                    the
                    industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it
                    to
                    make
                    a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic
                    typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset
                    sheets
                    containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker
                    including
                    versions
                    of Lorem Ipsum.
                </div>
                <div class="col-sm-12 col-md-6 smaller-margin-top">
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been
                    the
                    industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it
                    to
                    make
                    a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic
                    typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset
                    sheets
                    containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker
                    including
                    versions
                    of Lorem Ipsum.
                </div>
            </div>
        )
    }
}

export default About