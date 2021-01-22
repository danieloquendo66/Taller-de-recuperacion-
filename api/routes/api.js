const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/api/search", async (req, res) => {
  const { q } = req.query;
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${q}#json`
  );
  //   console.log(response.data.results);
  res.json(response.data.results);
});
module.exports = router;
