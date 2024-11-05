const express = require('express');
const User = require('./models/User.js'); 
const sequelize = require('./config/sequelize.js');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('Database & tables synced!');
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a specific user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).send('User deleted successfully');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});