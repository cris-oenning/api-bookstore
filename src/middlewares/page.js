import RequestIncorrect from "../errors/RequestIncorrect.js";

async function page(req, res, next) {
  try {
    let { limit = 5, page = 1, ordination = "_id:-1" } = req.query;

    let [fieldOrdination, order] = ordination.split(":");

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;

    if (limit > 0 && page > 0) {
      const resultPaged = await result.find()
        .sort({ [fieldOrdination]: order })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      res.status(200).json(resultPaged);
    } else {
      next(new RequestIncorrect());
    }
  } catch (error) {
    next(error);
  }
}

export default page;