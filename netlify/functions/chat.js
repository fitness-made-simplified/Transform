const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "You are a helpful fitness assistant. Give short, encouraging advice on workouts and nutrition." 
  });

  try {
    const { prompt } = JSON.parse(event.body);
    const result = await model.generateContent(prompt);
    return {
      statusCode: 200,
      body: JSON.stringify({ text: result.response.text() }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

