import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("User test");
});

router.post("userposttest", (req, res) => {});

export default router;
