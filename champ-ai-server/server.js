import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => {    
  res.send('Welcome to Champ AI Server');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});