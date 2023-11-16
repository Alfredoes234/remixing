import type { DataFunctionArgs } from "@remix-run/node";
import { createCookieSessionStorage, redirect } from "@remix-run/node"; // or cloudflare/deno

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__session",

      // all of these are optional
      domain: "localhost",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true,
    },
  });

async function getSessionId({ request }: DataFunctionArgs, src: string) {
  try {
    const session = await getSession(request.headers.get("Cookie"));
    if (session.has("userId")) {
      // Redirect to the home page if they are already signed in.
      return redirect(src);
    }
  } catch (e: any) {
    return console.log(e);
  }
}

export { getSession, commitSession, destroySession, getSessionId };
