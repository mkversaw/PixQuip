import express from 'express';
import cors from 'cors';

const app = express();

const port = 5000;
app.use(cors());
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello from the server!');
  });
  
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});