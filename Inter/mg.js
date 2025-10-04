db.users.aggregate([
  { $match: { status: "verfified" } },
  { $group: { location: "mumbai" } },
]);
