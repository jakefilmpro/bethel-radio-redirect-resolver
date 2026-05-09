export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  const https = require('https');

  https.get(url, { redirect: 'follow' }, (response) => {
    const chunks = [];

    response.on('data', (chunk) => {
      chunks.push(chunk);
    });

    response.on('end', () => {
      const text = chunks.join('');
      res.json({
        finalUrl: response.url || url,
        content: text
      });
    });
  }).on('error', (err) => {
    res.status(500).json({ error: err.message });
  });
}