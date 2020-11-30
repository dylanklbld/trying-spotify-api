import useFetchDataQueryInfinite from './useSpotifyQuery'

export default function useFetchNewReleasesInfinite() {
  return useFetchDataQueryInfinite('new-releases', 'albums')
}
