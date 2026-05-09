module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  try {
    const response = await fetch(url, { redirect: 'follow' });
    const text = await response.text();

    res.json({
      finalUrl: response.url,
      content: text
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};