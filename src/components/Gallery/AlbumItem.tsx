import React, { ReactElement } from 'react'

import styled from "styled-components";

type Props = {
    data: ReleaseItemType
}

type ReleaseItemType = {
    album_type: string,
    name: string,
    external_urls: any,
    artists: Array<any>,
    available_markets: Array<string>,
    release_date: string,
    total_tracks: number,
    images: Array<any>
}

const Image = styled.img`
    height: 100%; 
    width: 100%; 
    display:block;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  @media (min-width: 400px){ 
    max-width: 42%;
  }
  @media (min-width: 720px){ 
    max-width: 31%;
  }
  overflow:hidden;
  position:relative;
  align-items: center;
    justify-content: center;

  &:hover {
      cursor: pointer;
  }
`

const HoverFrame = styled.div`
    opacity:1;
    background-color: #3B5765;
    transition: 0.3s;
    
    ${Wrapper}:hover & {
        opacity:0.2;
    }
`

export const SpotifyLink = styled.a`
    text-decoration: none;
    visibility: hidden;
    opacity: 0;
    display: block;
    margin-right:auto;
    margin-left:auto;
    transition: text-decoration 0.5s, visibility 0s, opacity 0.5s linear;
    color: #09212D;
    
    ${Wrapper}:hover & {
        visibility: visible;
        opacity: 1;
    }

    &:hover, &:focus {
        text-decoration: underline;
        color:#FFFFFF;
        background-color:#09212D;
        border-radius: 4px;
        width:100%;
    }
`

const ArtistsWrapping = styled.div`
    visibility: hidden;
    text-overflow: ellipsis;
    font-size: 2em;
    text-align: center;
    font-family: Palatino, 'Palatino Linotype', serif;
    color: white !important;
    opacity: 0;
    word-break: break-word;
    transition: visibility 0s, opacity 0.5s linear;

    ${Wrapper}:hover & {
        visibility: visible;
        opacity: 1;
    }
`

const Info = styled.div`
    z-index:1;
    position: absolute;
    text-align: center;
    flex-direction: column;
`

const ReleaseTitle = styled.h3`
    letter-spacing: 0.2em;
    padding-bottom: 0.7em;
    position: relative;
    text-transform: uppercase;
    text-align: center;
    color: white !important;
    opacity: 0;
    visibility: hidden;
    ${Wrapper}:hover & {
        visibility: visible;
        opacity: 1;
    }
`

const Artists = ({ list }: any): ReactElement => {
    return <ArtistsWrapping>
        {`${list.join(', ')}`}
    </ArtistsWrapping>
}

const linkText = "Check on Spotify"

export default function ReleaseItem({ data }: Props): ReactElement {
    const { name, images, external_urls, artists } = data
    const coverSrc = images[0].url
    
    return (
        <Wrapper>
            <Info>     
                <Artists list={artists.map(({ name }) => name)} />
                <ReleaseTitle>{name}</ReleaseTitle>
                <SpotifyLink target="_blank" href={external_urls?.spotify}>
                    {linkText}
                </SpotifyLink>
            </Info>
            <HoverFrame>
                <Image src={coverSrc} />
            </HoverFrame>
        </Wrapper>
    )
}
