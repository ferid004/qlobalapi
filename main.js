const express = require('express');
const cors = require('cors');

const app = express();

// Belirli alan adlarından gelen isteklere izin ver
const allowedOrigins = ['https://oooobombakimi.netlify.app/', 'https://another-example.com'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Diğer middleware ve rotaları tanımlayın
// ...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.get('/api/data', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://oooobombakimi.netlify.app/');
    res.json({ your: 'data' });
  });