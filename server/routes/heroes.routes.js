const { Router } = require('express');
const Hero = require('../models/Hero');

const router = Router();

// /api/heroes
router.get('/', async (req, res) => {
  const heroes = await Hero.find({});
  res.json({heroes});
});

router.get('/:id', async (req, res) => {
  res.json({ message: `Герой ${req.params.id}`});
});

router.post('/add', async (req, res) => {
  try {
    const hero = new Hero({
      ...req.body
    });
    await hero.save();
    
    res.json({ message: 'Герой успешно добавлен' });
    res.redirect('/');
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;