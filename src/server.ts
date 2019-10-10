import app from './app';
import { config, logger } from './config';
const { port } = config.app;

const server = app.listen(port, () => {
  console.log(`API PORT ${port}`);
  logger.info(`API PORT ${port}`);
});
export default server;
