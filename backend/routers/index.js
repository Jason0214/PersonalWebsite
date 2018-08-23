import { Router } from 'express';
import { getAllBlogHeaders, getBlogText } from 'models/blog';

const router = Router();

router.get('/blog', async function (req, res, next) {
  let blogHeaderList = await getAllBlogHeaders();
  res.json(blogHeaderList);
});

router.get('/blog/get', async function (req, res, next) {
  let blogId = req.query['id'];
  let mdTxt = await getBlogText(blogId);
  res.json({
    'text': mdTxt
  });
});

export default router;
