import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // you send us email and pswd, we will create a new user with the email and hashed pswrd
  // then we generate jwt and save it as a cookie taht we will use to verify it's you
  const salt = bcrypt. genSaltSync()
  const {email, password} = req.body

  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    })
  } catch (e) {
    res.status(401)
    res.json({error: 'User already exists'})
    return 
  }

  // if successful, then generate token assuming user was created, it's a string

  const token = jwt.sign({
    email: user.email,
    id: user.id,
    time: Date.now()
  }, "hello",
  {expiresIn: '8h'})

  // if we set the  cookie here, it gets set into the person's browser 
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('TRAX_ACCESS_TOKEN', token, {
      httpOnly: true, //can only be accessed by http not javascript
      maxAge: 8 * 60 * 60 *1000, // 8 hours in milliseconds
      path: '/', // route of hte website
      sameSite: 'lax', 
      // lax means that you get cookie when go to origin, you don't care for subrequests that get you stuff from other places
      secure: process.env.NODE_ENV === 'production'
    })
  )
    res.json(user)
}