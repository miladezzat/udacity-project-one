// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import { StatusCodes } from 'error-handler-e2';
import fs from 'fs';
import app from '../../app';
import readFilesNames from '../../utils/read-files-names';

describe('Images Routes /', () => {
  it('Should return 400, bad request filename not send', async () => {
    const response = await request(app).get('/images');
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
  });

  it('Should return 400, bad request, filename is not exists', async () => {
    const response = await request(app).get('/images?filename=xxx');
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
  });

  it('get the /images endpoint', async () => {
    const response = await request(app).get(`/images?filename=encenadaport`);
    expect(response.status).toBe(StatusCodes.OK);
    const files = readFilesNames();
    expect(files).toContain('encenadaport');
    await fs.rmSync('assets/thumb/encenadaport.jpg');
  });
});
