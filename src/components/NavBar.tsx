import {NavLink, useLocation, useRouteMatch} from 'react-router-dom'

import React from 'react'
import styled  from "styled-components";

const navbarColor = `#3B5765`

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 2em;
  text-align: center;
  font-family: Verdana,Geneva,sans-serif; 
  color: white;
`;

const NavLinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    text-align:center;
    list-style: none;
    list-style-type: none;
    height:100%;
    background: ${navbarColor};
`

const NavLinkStyled = styled(props=><NavLink {...props}/>)`
  text-decoration: none;
  font-size: 1em;
  transition: font-size 0.5s linear, text-shadow 1s;
  color: #09212D;
  &.active {
    font-size: 1.5em;
    color: white;
  }
  &:hover {
      cursor:pointer;
      color: white;
      text-shadow: 2px 2px 6px #0e98de;
  }
`;

const MenuItem = styled.li`
    display:inline-block;
    padding: 20px 20px;
`;

type Props = {
    links: any
}

export default function NavBar({links}: Props): React.ReactElement{
    const match = useRouteMatch()
    const { pathname } = useLocation()

    return (<Nav>
        <NavLinksWrapper>
          {links.map(({link, text}:any) => (
            <MenuItem key={link}>
                <NavLinkStyled to={`${match.path}/${link}`}
                    isActive={()=>[`${match.path}/${link}`].includes(pathname)}
                >
                    {text}
                </NavLinkStyled>
            </MenuItem>
            ))}
        </NavLinksWrapper>
    </Nav>)
}