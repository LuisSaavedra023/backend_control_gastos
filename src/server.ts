import express, { Router } from 'express';
import router_auth from './routes/api/auth';

const app = express();
app.use(express.json());

const PORT = 3000;

const API_BASE_URL = "/api";

const routes: {url: string, router: Router}[] = [
    {url: `${API_BASE_URL}/users`, router: router_auth},
];

routes.forEach(({url, router}) => {
    app.use(url, router);
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 3000")
});