import fetcher from './fetcher';

export const auth = (
  mode: 'signin' | 'signup', 
  body: {email: string, password: string} 
  ) => {
    return fetcher(`/${mode}`, body)
}

// everytime i have to mutate the database, i create a fxn in here 
// instead of putting the fxn in a component
// for ex, creating a new playlist or favoriting a song
// scott's way of staying organized