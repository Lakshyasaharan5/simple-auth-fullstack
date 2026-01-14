import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { users } from "./auth"; 

const router = Router();

router.get("/users", requireAuth, (req, res) => {
  res.json(
    users.map((u) => ({
      id: u.id,
      username: u.username,
    }))
  );
});

export default router;
