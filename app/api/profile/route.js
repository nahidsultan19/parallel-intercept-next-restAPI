import { cookies, headers } from "next/headers";
export async function GET(request) {
  //   const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  //   console.log("Request Headers:", requestHeaders.get("Authorization"));
  console.log("Request Headers:", headerList.get("Authorization"));

  cookies().set("sessionId", "abc123");

  console.log(request.cookies.get("theme"));
  console.log(cookies().get("sessionId"));

  return new Response("Profile GET endpoint", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
