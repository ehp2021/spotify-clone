import jwt from 'jsonwebtoken'
import prisma from './prisma'
import {NextApiRequest, NextApiResponse} from 'next'

//whatever api route, we want to wrap it in a higher order fxn 
// handler is request
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    //check the token in your cookie and its valid
    const {TRAX_ACCESS_TOKEN: token} = req.cookies //destructured it and renamed it
    // const token = req.cookies.TRAX_ACCESS_TOKEN

    if (token) {
      let user

      try {
        const {id } = jwt.verify(token, 'hello') // check the token from the cookie
        user = await prisma.user.findUnique({ // grab the id from the token
          where: {id },
        })

        if (!user) {
          throw new Error('Not real user')
        }
      } catch (e) {
        res.status(401)
        res.json({e: "Not authorized"})
        return
      }
    }
  }
}