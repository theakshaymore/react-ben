// 1. Authentication middleware (Express.js style)
function requireAuth(handler) {
  return function (req, res) {
    if (req.user) {
      return handler(req, res); // User authenticated
    } else {
      res.status(401).send("Unauthorized");
    }
  };
}

const getProfile = requireAuth(function (req, res) {
  res.send(`Profile for ${req.user.name}`);
});
