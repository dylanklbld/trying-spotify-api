import {getHashParameters} from '../getHashParameters'

const mockUrlHash =`#access_token=My123Token&token_type=Bearer&expires_in=3600`

  it('should extract hash parameters', () => {
    expect(getHashParameters(mockUrlHash)).toEqual(
       {"access_token": "My123Token", "expires_in": "3600", "token_type": "Bearer"}
    );
  })
