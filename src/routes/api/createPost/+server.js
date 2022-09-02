import { supabase } from '../../../supabaseClient.js'

export const POST = async ({ request }) => {
	const userData = await request.json()
	const { data, error } = await supabase.from("Posts").insert([
		{
			title: userData.title,
			body: userData.body,
			metadata: {
				description: userData.description,
			},
		},
	]);

	console.log("POST", data, error)

	return new Response("hello");
};