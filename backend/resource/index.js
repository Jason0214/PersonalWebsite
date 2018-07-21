import { Router } from 'express';
import fs from 'fs';
import path from 'path';
const router = Router();

router.get('/avatar', function (req, res, next) {
  let img = fs.readFileSync(path.join(__dirname, '..', 'public', 'avatar.jpg'));
  res.writeHead(200, {'Content-Type': 'image/jpg'});
  res.end(img, 'binary');
});

export default router;
