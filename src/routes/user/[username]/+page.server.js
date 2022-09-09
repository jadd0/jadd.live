import { supabase } from "../../../supabaseClient.js";
import { parseCookie } from "../../../cookieParser.js";
import { Login } from "../../../classes/login.js";
import { error, redirect } from "@sveltejs/kit";
import { checkAuth } from "../../../checkAuth.js";

const loginClass = new Login();

async function checkUser(username) {
	const { data, e } = await supabase
		.from("Users")
		.select("*")
		.eq("username", username);
	
	if (data.length == 0) {
		return false
	}

	return data
}

async function isFollowed(username) {
	const { data, e } = await supabase
		.from("Users")
		.select("*")
		.eq("username", username)
	
	const followingList = data[0].followingList

	return followingList
}

/** @type {import('./$types').Load} */
export async function load({ request, params }) {
  const cookie = request.headers.get("cookie");
	const auth = await checkAuth(parseCookie, loginClass, cookie, supabase)
	
	if (!auth) {
		throw redirect(307, "/login");
	}

  const user = await checkUser(params.username)

	if (!user) {
		throw error(404, "No user found");
	}

	const followList = await isFollowed(auth)
	
	const bool = followList.includes(params.username)

	const { data, e } = await supabase
		.from("Posts")
		.select("*")
		.eq("a", params.username);

	return {
		user: user,
		data: (data.reverse()),
		username: auth,
		bool: bool
	};
}