import { GoogleGenAI } from "@google/genai";
import { THESIS_CONTEXT } from '../constants';

const apiKey = process.env.API_KEY || '';
// Note: In a real app, we handle the empty API key case gracefully in the UI.

const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please set the REACT_APP_GEMINI_API_KEY environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: THESIS_CONTEXT,
      },
    });
    return response.text || "I couldn't generate a response based on the data provided.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to the knowledge base. Please try again later.";
  }
};