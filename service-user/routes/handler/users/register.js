const { users } = require("../../../models");
const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();
module.exports = async (req, res) => {
  const schema = {
    name: "string|empty:false",
    email: "string|empty:false",
    password: "string|min:8",
    profession: "string|optional",
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

  if (user) {
    return res.status(409).json({
      status: "error",
      message: "email already exist",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  const data = {
    name: req.body.name,
    password,
    email: req.body.email,
    profession: req.body.profession,
    role: "student",
  };

  const createUser = await users.create(data);
  return res.json({
    status: "success",
    data: createUser.id,
  });
};
