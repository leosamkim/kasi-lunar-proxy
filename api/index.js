import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const response = await axios.post(
      'https://astro.kasi.re.kr/api/lifeConvert/lifeConvertCal',
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
          
