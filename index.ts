import { Server } from 'axe-api';
import dotenv from 'dotenv';

dotenv.config();

const server = new Server();
server.start(__dirname);
