/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello world' });
});

export default appointmentsRouter;
