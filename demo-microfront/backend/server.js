const express = require('express');
const cors = require('cors');  // Importa el paquete cors

const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes POST
app.use(express.json());

// Endpoint GET simple
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hola Bienvenido al sistema de compras!', data: [1, 2, 3, 4, 5] });
});

// Endpoint POST simple
app.post('/api/data', (req, res) => {
    const newData = req.body;
    res.json({ message: 'Data received successfully!', receivedData: newData });
});

app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});
