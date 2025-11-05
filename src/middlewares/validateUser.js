function isValidEmail(email) {
  // regex simples para validação básica
  return typeof email === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

exports.validateCreateUser = (req, res, next) => {
  const { name, email } = req.body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.push('Name is required and must be a non-empty string');
  }

  if (!email || !isValidEmail(email)) {
    errors.push('A valid email is required');
  }

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  // normalize
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();

  next();
};

exports.validateUpdateUser = (req, res, next) => {
  const { name, email } = req.body;
  const errors = [];

  if (name !== undefined) {
    if (typeof name !== 'string' || name.trim() === '') {
      errors.push('If provided, name must be a non-empty string');
    } else {
      req.body.name = name.trim();
    }
  }

  if (email !== undefined) {
    if (!isValidEmail(email)) {
      errors.push('If provided, email must be valid');
    } else {
      req.body.email = email.trim().toLowerCase();
    }
  }

  // require at least one field for update
  if (name === undefined && email === undefined) {
    errors.push('At least one of name or email must be provided to update');
  }

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  next();
};
