import express from 'express';
import { Basket } from '../../db/models';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  const item = await Basket.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!item) res.sendStatus(401);
  item.destroy();
  res.sendStatus(200);
});

export default router;
