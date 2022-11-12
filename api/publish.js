const tumblr = require("tumblr.js");

export default function handler(request, response) {
  const client = tumblr.createClient({
    consumer_key: process.env.TMBLR_KEY,
    consumer_secret: process.env.TMBLR_SECRET,
  });

  if (request.query.username) {
    try {
      client.blogPosts(request.query.username, function (err, resp) {
        response.status(200).json({
          result: resp.posts,
        });
      });
    } catch (e) {
      response.status(200).json({
        result: { error: e },
      });
    }
  } else {
    response.status(200).json({
      result: { error: "No username provided" },
    });
  }
}
