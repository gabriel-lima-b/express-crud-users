const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`\U0001f680 Server running on port ${PORT}`));
