import React, { ReactElement, useState } from 'react'
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: center;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: white;
`

const FlagButton = styled.button<{isActive?:boolean}>`
  font-size:2em;
  cursor:pointer;
  padding: 1px 8px;
  border-radius: 3px;
  color: #17323F;
  opacity:${props=>props.isActive ? 0.5 : 1}
`;

type Props = {
   countryMap: any
   setCountry: (countryCode: string | null) => void,
   selected?: string | null
}

const resetText = "🔄"

const CountrySelector = ({ countryMap, setCountry, selected }: Props):ReactElement => {
    return (<Container>
        {Object.keys(countryMap).map((countryCode)=>{
            return <FlagButton key={countryCode} 
            onClick={()=>setCountry(countryCode)} 
            isActive={selected===countryCode}>
                {countryMap[countryCode]}
            </FlagButton>
        })}
        <button onClick={()=>setCountry(null)}>{resetText}</button>
      </Container>)
}

export default CountrySelector