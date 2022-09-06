import { parseCookie } from "../../../cookieParser.js";
import { Login } from "../../../classes/login.js";
import { error, redirect } from "@sveltejs/kit";
import { supabase } from "../../../supabaseClient.js";
import { checkAuth } from "../../checkAuth.js";

const loginClass = new Login();


/** @type {import('./$types').Load} */
export async function POST({ request }) {
  const cookie = request.headers.get("cookie");

	const auth = await checkAuth(parseCookie, loginClass, cookie, supabase)

	if (!auth) {
		throw redirect(307, "/login");
	}	
	
	const jwtName = parseCookie(cookie).jwt
	const username = jwtName.replaceAll('"','')

	const userData = await request.json()
	const { data, error } = await supabase.from("Posts").insert([
		{
			title: userData.title,
			body: userData.body,
			metadata: {
				description: userData.description,
			},
			a: username
		},
	]);

	if(error == undefined) {
		return new Response({status: 200})
	}

	return new Response({status: 404})
}
