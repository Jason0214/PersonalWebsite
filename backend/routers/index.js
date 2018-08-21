import { Router } from 'express';
import { getAllBlogs, getBlogText } from 'models/blog';

const router = Router();

router.get('/blog', async function (req, res, next) {
  let blogs = await getAllBlogs();
  console.log(blogs);
  res.json(blogs);
});

router.get('/blog/get', async function (req, res, next) {
  let blogId = req.query['id'];
  let mdTxt = await getBlogText(blogId);
  console.log(mdTxt);
  res.json({
    'text': mdTxt
  });
});

export default router;
