const { refresh_token } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const refreshToken = req.query.refresh_token;
  const token = await refresh_token.findOne({ where: { token: refreshToken } });

  if (!token) {
    return res.status(400).json({
      status: "error",
      message: "invalid_token",
    });
  }

  return res.json({
    status: "success",
    token
  })
};
