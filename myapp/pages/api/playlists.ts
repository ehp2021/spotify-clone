import prisma from '../../lib/prisma'
import {validateRoute} from '../../lib/auth'
import { useRadio } from '@chakra-ui/react'

export default validateRoute(async (req, res, user)=> {
  // could go to playlist and grab teh user OR go to user and grab the playlists
  // prisma.user.findUnique({ where: {playlists}})
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: 'asc',
    }
  })

  //then send the playlists back
  res.json(playlists)

})