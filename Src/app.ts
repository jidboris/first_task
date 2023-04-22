import express, { Express, Request, Response, NextFunction } from 'express';
import database from './Config/database';

const app: Express = express();
const port: number = Number(process.env.PORT);
app.get('/', (req: Request, res: Response) => {
    res.send('<h1> Welcome to Accrrue savings platform! </h1>')
});

database()
    .catch((err) => console.error(err));
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

export default app;