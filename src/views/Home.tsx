import React, { ReactElement } from 'react'

import styled from 'styled-components'

const Button = styled.button`
    background: #1db954;
    border-radius: 3px;
    border: none;
    color: white;
    font-size:3em; 
    &:hover{
        cursor:pointer;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`

function Home():ReactElement {
    const {
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_SPOTIFY_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT_URL
    } = process.env;

    const handleLogin = () => {
        window.location.href = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    return (
        <Container>
            <Button type="submit" onClick={handleLogin}>
                Login to spotify 
            </Button>
        </Container>
    )
}

export default Home