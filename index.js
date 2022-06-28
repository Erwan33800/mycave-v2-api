const express = require('express');
const app = express();
require('./models/dbConfig');
const bouteillesRoutes = require('./controllers/bouteillesController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors()); // WARNING !! comme ça n'importe à acces aux datas !! WARNING
app.use('/bouteilles', bouteillesRoutes);

app.listen(5500, () => console.log('Server started: 5500'));