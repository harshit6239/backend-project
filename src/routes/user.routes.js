import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    res.send("POST request to the homepage");
});

export default router;