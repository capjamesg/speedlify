module.exports = {
	name: "jamesg.blog", // optional, falls back to object key
	description: "jamesg.blog",
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23,
		freshChrome: "site"
	},
	urls: [
		"https://jamesg.blog"
	]
};