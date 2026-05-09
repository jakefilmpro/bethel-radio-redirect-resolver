module.exports = async (req, res) => {
  const { url } = req.query;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
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