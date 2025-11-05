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

exports.updateUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = users.find(u => u.id === id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
  } catch (err) {
    next(err);
  }
}
