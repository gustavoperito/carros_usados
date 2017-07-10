var mongoose = require('mongoose');

module.exports = function (collection) {

    var model = mongoose.model(collection);

    var findAll = function (req, resp) {
        model.find().then(function (data) {
            resp.json(data);
        }).catch(function (erro) {
            resp.status(500).send(erro);
        })
    }

    var insert = function (req, resp) {
        model.create(req.body).then(function (dado) {
            resp.json(dado);
        }).catch(function (erro) {
            resp.status(500).send(erro);
        })
    }

    var findOne = function (req, resp) {
        model.findById(req.params.id).then(function (data) {
            if (!data) {
                resp.status(404)
            } else {
                resp.json(data)
            }
        }).catch(function (erro) {
            resp.status(500).send(erro)
        })
    }

    var update = function (req, resp) {
        model.findByIdAndUpdate(req.params.id, req.body).then(function (data) {
            resp.json(data);
        }).catch(function (erro) {
            resp.status(500).send(erro)
        })
    }

    var remove = function (req, resp) {
        model.remove(req.params.id).then(function (data) {
            resp.json(data);
        }).catch(function (erro) {
            resp.status(500).send(erro)
        })
    }
   
    return function (app) {
        app.route(`/api/${collection}`)
            .get(findAll)
            .post(insert)
        app.route(`/api/${collection}/:id`)
            .get(findOne)
            .delete(remove)
            .put(update)

    }

}