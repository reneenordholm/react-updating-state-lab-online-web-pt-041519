import React, { Component } from 'react';

export default class YouTubeDeugger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClickBitrate = () => {
        this.setState(previousState => {
          return {
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
          }
        })
    }

    handleClickRes = () => {
    this.setState(previousState => {
        return {
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        }
        })
    }

    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.handleClickBitrate}>Current Bitrate: {this.state.settings.bitrate}</button>
            <button className='resolution' onClick={this.handleClickRes}>Current Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}