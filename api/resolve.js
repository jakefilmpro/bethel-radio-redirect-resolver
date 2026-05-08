module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  try {
    const response = await fetch(url, { redirect: 'follow' });
    res.json({ finalUrl: response.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
