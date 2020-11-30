import React, { ReactElement } from 'react'

import styled from "styled-components";

type Props = {
    data: CategoryItemType
}

type CategoryItemType = {
    id: string,
    name: string,
    icons: Array<any>
}



const Wrapper = styled.div`
  display: flex; /* unnecesary, only the container needs to be flex */
  flex-direction: column; /* also unnecesary unless it's for purposes not shown in the example */
  @media (min-width: 400px){ 
    max-width: 30%;
  }
  @media (min-width: 720px){ 
    max-width: 20%;
  }
  overflow:hidden;
  position:relative;
  &:hover {
      cursor:pointer;
  }
`

const Icon = styled.img`
    height: 100%; 
    width: 100%; 
    display:block;

    ${Wrapper}:hover & {
        filter: blur(2px);
    }
`

const Name = styled.a`
    visibility: hidden;
    transition: height 1s, visibility 0s, opacity 0.5s linear;
    font-weight: bold;
    text-decoration: none;
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Wrapper}:hover & {
        visibility: visible;
        height:100%;
        opacity: 1;
        text-shadow:
        3px 3px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
       -1px 1px 0 #000,
        1px 1px 0 #000;
    }
`

export default function CategoryItem({ data }: Props): ReactElement {
    const { name, icons } = data
    const iconSrc = icons[0].url

    return (
        <Wrapper>
            <div>
                <Icon src={iconSrc} />
            </div>
            <Name>{name}</Name>
        </Wrapper>
    )
}
