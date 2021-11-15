import express from 'express';
import cors from 'cors';

import connection from '../integration-database/database';

import Routes from './api-routes/router';


class App {
    public express: express.Application

    public constructor (
    ) {
      this.express = express();
      //this.connect();
      this.connect();
      this.middleware();
      this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(cors());
    }

    private connect(): void {
        connection
    }

    private routes(): void {
      this.express.use(Routes);
    }
}

export default new App().express;
