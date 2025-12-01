/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

function getWeatherForecast() {
	const summaries = [
		"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
	];
	return Array.from({ length: 5 }, (_, i) => {
		const temperatureC = Math.floor(Math.random() * 75) - 20;
		return {
			date: new Date(Date.now() + (i + 1) * 86400000).toISOString().split('T')[0],
			temperatureC,
			temperatureF: Math.round(32 + (temperatureC / 0.5556)),
			summary: summaries[Math.floor(Math.random() * summaries.length)]
		};
	});
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: {
					"Access-Control-Allow-Origin": "http://localhost:4200",
					"Access-Control-Allow-Methods": "GET,OPTIONS",
					"Access-Control-Allow-Headers": "*",
				},
			});
		}
		switch (url.pathname) {
			case '/weatherforecast':
				return new Response(JSON.stringify(getWeatherForecast()), {
					headers: {
						"content-type": "application/json",
						"Access-Control-Allow-Origin": "http://localhost:4200"
					}
				});
			case '/message':
				return new Response('Hello, World!');
			case '/random':
				return new Response(crypto.randomUUID());
			default:
				return new Response('Not Found', { status: 404 });
		}
	},
} satisfies ExportedHandler<Env>;
