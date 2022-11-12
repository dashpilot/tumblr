const tumblr = require("tumblr.js");

export default function handler(request, response) {
  const client = tumblr.createClient({
    consumer_key: process.env.TMBLR_KEY,
    consumer_secret: process.env.TMBLR_SECRET,
  });

  client.blogPosts("filmkit", function (err, resp) {
    // console.log(resp.posts); // now we've got all kinds of posts

    response.status(200).json({
      body: resp.posts,
    });
  });
}
