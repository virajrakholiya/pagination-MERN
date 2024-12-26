const paginationSchema = require("../models/paginationModel");

exports.createUser = async (req, res) => {
  try {
    const pagination = new paginationSchema(req.body);
    await pagination.save();
    res.status(201).json({ pagination });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.pagination = async (req, res) => {
  const page = parseInt(req.query.page);
  const perPage = 3;
  const totalPost = await paginationSchema.countDocuments();
  const totalPage = Math.ceil(totalPost / perPage);
  if (page > totalPage || page <= 0) {
    return res.status(400).json({ message: "Page not found" });
  }
  const data = await paginationSchema
    .find()
    .skip((page - 1) * perPage)
    .limit(perPage);

  res
    .status(200)
    .json({ status: "sucess", data: data, totalPage: totalPage, page: page });
};
