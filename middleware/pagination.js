module.exports = function (model) {
    return async(req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const data = {};

        if(endIndex < await model.countDocuments().exec()) {
            data.previous = {
                page : page + 1,
                limit : limit
            }
        }

        if(startIndex > 0) {
            data.next = {
                page : page - 1,
                limit : limit
            }
        }

        try {
            data.results = await model.find({}).limit(startIndex).skip(limit);
            res.dataResult = data;
            next();
        } catch (e) {
            res.status(500).send({ error : e.message })
        }
    }
}