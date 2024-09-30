import express, { Request, Response } from "express";
import cors from 'cors';
import characterRouter  from "../routes/character.routes";
import sequelizeDb from "../database/dbConnection";

class CharacterServer {

    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();//Express Aplication
        this.port = process.env.PORT || '4001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Funcionado en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                mensaje: 'API working'
            })
        })
        this.app.use('/api/characters', characterRouter )
    }

    midlewares() {
        //body parse
        this.app.use(express.json());
        //cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await sequelizeDb.authenticate();
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error);
            console.log('Error al conectar con la db');
        }
    }
}

export default CharacterServer;