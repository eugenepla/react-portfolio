import React, { Component } from 'react'
import { Cell } from 'react-mdl'
import Animation from './animation/animation'
import SocialLinks from './socialLinks'
import Avatar from './avatar'

export default class resumeHeader extends Component {
  render() {
    const data = this.props.data
    return (
      <Cell col={12}>   
        <Avatar 
          avatar={data.avatar}
        /> 
        <Animation className='animation' />
        {data.social && data.social.map((item) => {
          return (
            <SocialLinks 
              phoneNumber={item.phoneNumber}
              email={item.email}
              homeLocation={item.homeLocation}
              facebook={item.facebook}
              github={item.github}
              skype={item.skype}
            />)
        })}
      </Cell>  
    )
  }
}
