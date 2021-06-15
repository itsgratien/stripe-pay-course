import http from 'http';
import app from './src/app';
import { connectToDatabase } from './src/config';

const Port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(Port, async () => {
  await connectToDatabase();

  console.log(`Server is listening ons PORT ${Port}`);
});
