import { get } from "svelte/store";
import { authFlow } from "../../../functions/auth";
import { posts } from "../../stores/objects";
import { error } from "@sveltejs/kit";

const Posts = get(posts)

/** @type {import('./$types').Load} */
export async function POST({ request, fetch, cookies }) {
	const auth = await authFlow(request.headers.get("cookie"), fetch)

	if (!auth) {
		throw error(401, "Not authorised");
	}

	const req = await request.json();
	const res = await Posts.deleteLikeDislike(req.uuid, auth.username);

	cookies.set('key', auth.newKey, {
		path: '/',
		HostOnly: false,
		Secure: 'lax',
		httpOnly: true,
		SameSite: 'Strict'
	});

  if (!res) throw error(500, `There has been an error removing dislike on post ${req.id}. This post may not exist or may not be disliked by @${auth}. Please try again later.`)

	return new Response(JSON.stringify({key: auth.newKey}))
}
