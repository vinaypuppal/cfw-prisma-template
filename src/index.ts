import { Router } from 'worktop';
import { listen } from 'worktop/cache';
import { PrismaClient } from '@prisma/client';

import type { ServerRequest } from 'worktop/request';

const prisma = new PrismaClient();

async function addLog(request: ServerRequest) {
  await prisma.log.create({
    data: {
      level: 'Info',
      message: `${request.method} ${request.url}`,
      meta: {
        headers: JSON.stringify([...request.headers.entries()]),
      },
    },
  });
}

const API = new Router();

API.add('GET', '/greet/:name', async (req, res) => {
  addLog(req);
  res.end(`Hello, ${req.params.name}!`);
});

API.add('GET', '/', async (req, res) => {
  const command = `<a href="https://${req.hostname}/greet/workers" target="_blank">link</a>`;
  addLog(req);
  res.setHeader('Cache-Control', 'public,max-age=60');
  res.setHeader('Content-Type', 'text/html');
  res.end(`Howdy~! Please greet yourself; Click this ${command}`);
});

API.add('GET', '/logs', async (req, res) => {
  const logs = await prisma.log.findMany();
  res.send(200, logs);
});

listen(API.run);
