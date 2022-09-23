const { Text } = require("../models");

module.exports = {
  Post: async (req, res) => {
    try {
      const { text } = req.body;
      console.log(text);
      const rows = await Text.create({ text: text });
      if (rows) {
        return res.status(200).json({ result: rows });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
