import React, { ReactElement } from 'react'

import styled from "styled-components";

type Props = {
    data: PlaylistItemType
}

type PlaylistItemType = {
    description: string,
    name: string,
    external_urls: any,
    images: Array<any>
}


const Image = styled.img`
    height: 100%; 
    width: 100%; 
    display:block;
`

const Wrapper = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: row;
  background-color: #3B5765
  @media (min-width: 400px){ 
    max-width: 90%;
  }
  @media (min-width: 600px){ 
    max-width: 40%;
  }
  overflow:hidden;
  position:relative;
  background-color: #3B5765;
`

const HoverFrame = styled.div`
    background-color: #3B5765;
    transition: 0.3s;
    width:100%;
    
    ${Wrapper}:hover & {
        opacity:0.2;
    }
`

const SpotifyLink = styled.a`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    
    ${Wrapper}:hover & {
        visibility: visible;
        opacity: 1;
    }
`

const Info = styled.div`
    text-overflow: ellipsis;
    width:100%;
  padding-bottom: 0.7em;
  margin: 10px 10px;
  position: relative;
  text-align: center;
  color: white !important;
`

export default function PlaylistItem({ data }: Props): ReactElement {
    const { description, images, external_urls } = data
    const pictureUrl = images[0].url

    return (
        <Wrapper>
            <HoverFrame>
                <Image src={pictureUrl} />
            </HoverFrame>
            <Info>
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <SpotifyLink href={external_urls?.spotify}>More on Spotify</SpotifyLink>
            </Info>
        </Wrapper>
    )
}
