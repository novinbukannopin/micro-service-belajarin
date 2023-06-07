const bcrypt = require("bcrypt");
const { users } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    email: "email|empty:false",
    password: "string|min:8",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await users.findOne({
    where: { email: req.body.email },
  });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "password is wrong",
    });
  }

  return res.json({
    status: "success",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      profession: user.profession,
    },
  });
};
