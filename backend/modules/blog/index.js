import path from 'path';
import { Router } from 'express';

import fs from '../../utils/promise-fs';
import { responseNormalizer } from '../../utils/normalizer';

const blogStorage = path.join(__dirname, '..', '..', 'static', 'posts');
const router = Router();

router.get('/get', function (req, res, next) {
  let name = req.query['name'];
  fs.readFile(path.join(blogStorage, name))
    .then(data => {
      res.writeHead(200, {'Content-type': 'text/plain'});
      res.end(data);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(responseNormalizer(false, 'No such file'));
    });
});

export default router;
