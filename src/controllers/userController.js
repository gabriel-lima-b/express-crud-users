let users = []; // "Banco" em mem�ria
let nextId = 1;

exports.getAllUsers = async (req, res, next) => {
  try {
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = { id: nextId++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
