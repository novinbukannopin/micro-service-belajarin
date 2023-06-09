const { users } = require("../../../models");

module.exports = async (req, res) => {
  const Ids = req.query.user_ids || [];

  const sqlOptions = {
    attributes: ["id", "name", "email", "role", "profession", "avatar"],
  };

  if (Ids.length) {
    sqlOptions.where = {
      id: Ids,
    };
  }

  const user = await users.findAll(sqlOptions);

  return res.json({
    status: "success",
    data: user,
  });
};
