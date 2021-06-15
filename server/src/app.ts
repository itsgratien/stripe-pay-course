import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './modules';

const app = express();

app.use(cors());



app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use('/api/v1', router);

app.get('/', (req, res)=>{
    res.json('res');
})

export default app;