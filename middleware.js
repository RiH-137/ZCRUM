import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/onboarding(.*)",
  "/organisation(.*)",
  "/project(.*)",
  "/issue(.*)",
  "/sprint(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId, orgId } = auth();

  if (!userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn();
  }

  // if (
  //   userId &&
  //   !orgId &&
  //   req.nextUrl.pathname !== "/onboarding" &&
  //   req.nextUrl.pathname !== "/"
  // ) {
  //   return NextResponse.redirect(new URL("/onboarding", req.url));
  // }

  // return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|.*\\.(?:ico|png|jpg|jpeg|webp|svg|css|js|txt|woff|woff2|ttf|eot|otf|pdf|zip|gz)).*)",
    "/(api|trpc)(.*)",
  ],
};
