const express = require('express');
const commonConfig= require('config');
const nuxtConfig = require ('../nuxt.config');
const mongoose = require('mongoose');
const { Nuxt, Builder } = require('nuxt');

const app = express();

nuxtConfig.dev = !(process.env.NODE_ENV === 'production');

app.use(express.json({ extended: true }));

app.use('/api/heroes', require('./routes/heroes.routes'));

async function start() {
  try {
    const nuxt = new Nuxt(nuxtConfig);
    const { port } = nuxt.options.server;

    if (nuxtConfig.dev) {
      const builder = new Builder(nuxt);
      await builder.build();
    } else {
      await nuxt.ready();
    }

    app.use(nuxt.render);

    await mongoose.connect(commonConfig.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(port, () => {
      console.log(`App has been started on port: ${port}...`);
    });
  } catch (error) {
    console.log(`Server error: ${error.message}`);
    process.exit(1);
  }
}

start();