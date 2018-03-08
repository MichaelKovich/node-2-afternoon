module.exports = {
  create(req, res) {
    const db = req.app.get('db');
    db
      .create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl])
      .then(() => res.status(200).json())
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },

  getOne(req, res) {
    const db = req.app.get('db');
    db
      .read_product([req.params.id])
      .then(product => res.status(200).json(product))
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },

  getAll(req, res) {
    const db = req.app.get('db');
    db
      .read_products()
      .then(products => res.status(200).json(products))
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },

  update(req, res) {
    const db = req.app.get('db');
    db
      .update_product([req.params.id, req.query.desc])
      .then(() => res.status(200).json())
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },

  deleteProduct(req, res) {
    const db = req.app.get('db');
    db
      .delete_product([req.params.id])
      .then(() => res.status(200).json())
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },
};
