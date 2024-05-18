import axios from 'axios';

export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json({ response: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//holasadadsadsad