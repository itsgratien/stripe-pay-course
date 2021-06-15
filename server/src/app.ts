import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import router from './modules';
import { passportJwtConfig } from './config';

const app = express();

app.use(cors());



app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(passport.initialize());

passportJwtConfig();

app.use('/api/v1', router);

app.get('/', (req, res)=>{
    res.json('res');
})

export default app;