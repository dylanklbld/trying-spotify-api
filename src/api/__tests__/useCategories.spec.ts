import nock from 'nock';
import { renderHook } from '@testing-library/react-hooks';
import useFetchCategoiesData from '../useCategories'

jest.mock('../../helpers/getAxiosInstance', ()=>()=>{
    const instance = jest.requireActual('../../helpers/getAxiosInstance')
    instance.defaults.adapter = require('axios/lib/adapters/http')
    return instance
})

// encountered problems similar to this
// https://github.com/tannerlinsley/react-query/issues/113
it.skip('fetches data', async () => {
    const scope = nock('https://api.spotify.com/v1/browse')
      .get('/categories?offset=0&limit=20')
      .reply(200, { data: { categories: {items:[]} } });

    const {result, waitForNextUpdate} = renderHook(() =>
        useFetchCategoiesData()
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    console.log(result.current.status); // loading

    await waitForNextUpdate();

    console.log(result.current.status); // still loading

    expect(result.current.data).toEqual({ test: 'works' }); // fails, data is undefined
    expect(scope.isDone()).toBe(true);
  });

