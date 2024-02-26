import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("control gastos")
});

router.get("/get/users", (req: Request, res: Response) => {
    res.json([
        {
            id: 1,
            nombre: "sara",
            username: "sara023",
            password: "123"
        
        },
        {
            id: 2,
            nombre: "marcelo",
            username: "marcelo023",
            password: "123"
        },
        {
            id: 3,
            nombre: "beto",
            username: "beto023",
            password: "123"
        },
        {
            id: 4,
            nombre: "luly",
            username: "luly023",
            password: "123"
        },
    ])
});

router.post("/login", (req: Request, res: Response) => {
    const {username, password} = req.body;

    res.json({
        mensaje: "datos recibidos exitosamente",
        username,
        password
    });

    console.log(username, password)
});
export default router;
