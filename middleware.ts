import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isUploadthingRoute = createRouteMatcher(['/api/uploadthing(.*)'])


// export default clerkMiddleware();


//--------------------didn't worked because the webhook of file uploadthing.com was unable to hit my protected route

export default clerkMiddleware((auth, req) => {
  if(isUploadthingRoute(req)) {
    return NextResponse.next();;
  }
  auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};