import { Router } from 'express';
import blog from 'models/blog';

const router = Router();

router.get('/blog', function (req, res, next) {
  res.json([
    {
      id: '0',
      name: 'testcase0.md'
    }
  ]);
});

router.get('/blog/get', async function (req, res, next) {
  let name = req.query['name'];
  let mdTxt = await blog.getMarkDownTxt(name);
  res.json({
    'text': mdTxt
  });
});

export default router;
