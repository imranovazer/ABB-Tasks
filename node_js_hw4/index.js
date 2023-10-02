import 'dotenv/config'
import express from 'express'
import NewsRoutes from './routes/NewsRoutes.js'
import { Logger } from './middlevire/logger.js';


const app = express();
app.use(express.json())
const PORT = process.env.PORT || 8080

app.use(Logger)
app.use('/api/newsposts', NewsRoutes);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
})