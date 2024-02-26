import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("control gastos")
});

router.get("/data/", (req: Request, res: Response) => {
    res.json([
        {
            id: 1,
            nombre: "sara"
        
        },
        {
            id: 2,
            nombre: "marcelo"
        },
        {
            id: 3,
            nombre: "guaton beto"
        },
        {
            id: 4,
            nombre: "luly"
        },
    ])
});

export default router;