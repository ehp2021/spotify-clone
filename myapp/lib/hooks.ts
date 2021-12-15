import fetcher from './fetcher'
import useSWR from 'swr'


// need some hooks for pulling from api
// you don't have tomake your own hooks but it makes things eaiser

export const useMe = () => {
  const { data, error} = useSWR('/me', fetcher)
  // see what data is coming back
  console.log(data, 'hooks file') 

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

//for playlist it will be similar, we havent made an api route
// make the hook for it anyways 
// use it in teh sidebar, in the libraries
// with swr, we can use this hook in multiple places and itwill only make ONE call 

export const usePlaylist = () => {
  const { data, error} = useSWR('/playlist', fetcher)

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  }
}