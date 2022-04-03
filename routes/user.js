import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("User test");
});

export default router;
