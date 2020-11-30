import { fireEvent, render, screen } from '@testing-library/react';

import HomePage from '../Home';
import React from 'react';

describe('HomePage', () => {
  it('should render HomePage', () => {
    const { container } = render(<HomePage />)

    expect(container).toMatchSnapshot()
  })

  it('should redirect to Spotify', () => {
    render(<HomePage />)
    const url = "http://dummy.com";
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    });

    const loginToSpotifyButton = screen.getByText("Login to spotify")
    fireEvent.click(loginToSpotifyButton)

    expect(window.location.href).toContain('https://accounts.spotify.com/authorize');
  })
})