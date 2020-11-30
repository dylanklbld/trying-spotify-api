import useFetchDataQueryInfinite from './useSpotifyQuery'

export default function useFetchFeaturePlaylistsInfinite() {
    return useFetchDataQueryInfinite('categories', 'categories')
}
