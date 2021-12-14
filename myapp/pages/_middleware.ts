//put a middleware on any level on the pages 
// if i put the middleware on teh root, it will get executed before signin or signup so add a "_"

import { NextResponse } from "next/server"

const signedinPages = ['/', '/playlist', '/library']

export default function middlware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    //if you don't have a valid token, you get routed to signin page

    if (!token) {
      return NextResponse.redirect('./signin')
    }
  }
}