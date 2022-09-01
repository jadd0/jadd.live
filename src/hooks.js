import { Login } from "./classes/login.js";
import { parseCookie } from "./cookieParser.js";
const login = new Login();

function notAuth() {
	
}

function protectedRoute(cookieList) {
	
	// console.log(cookie)
	const cookieObj = parseCookie(cookieList);
  console.log(cookieObj.jwt)
	if (!cookieObj) {
		return false
	}

  const jwt = JSON.parse(cookieObj.jwt)

	const auth = login.authenticate(jwt.username, jwt.password);

	if (!auth) {
		return false
	}

  return true
}

export const handle = async ({ event, resolve }) => {
	const url = event.request.url.split("/");
	const response = await resolve(event);
  // console.log(response)
  // console.log(await resolve(event))
	if (url[3] === "protected" && url[4] !== "login") {
    const cookieList = event.request.headers.get("cookie");
    // console.log(cookieList)
    const res = protectedRoute(cookieList)
    console.log(res)
    if (!res) {
      return new Response("Redirect", {
        status: 303,
        headers: { Location: "/protected/login" },
      }); 
      // return response
    }
    // return new Response({
    //   status: 200,
    //   headers: { Location: "/protected/" },
    // }); 
    // return response
	}
  // response
  return response
};
