import { createServer } from 'http';
import './models';
import { sequelize } from './database/connection';
import { app } from './app';

const port = process.env.PORT || 3000;

(async () => {
  await sequelize.sync({ force: true });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  createServer(app).listen(port, () =>
    console.info(`Server running on port ${port}`),
  );
})();
