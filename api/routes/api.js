const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/api/search", async (req, res) => {
  const { q, offset } = req.query;
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${q}&offset=${offset}&limit=30`
  );
  //   console.log(response.data.results);
  res.json(response.data.results);
});
module.exports = router;
