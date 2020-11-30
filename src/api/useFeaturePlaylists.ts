import useFetchDataQueryInfinite from './useSpotifyQuery'

type Extra = {
    country: string
}

export default function useFetchFeaturePlaylistsInfinite(props?:any) {
    return useFetchDataQueryInfinite('featured-playlists', 'playlists', props)
}
