
import { GoogleGenAI } from "@google/genai";
import type { PhotoIdea } from '../types';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "disabled" });

export const generatePhotoIdeas = async (theme: string): Promise<PhotoIdea[]> => {
    if (!process.env.API_KEY) {
        throw new Error("Gemini API key is not configured.");
    }

    const prompt = `You are a creative director for a high-end photography studio. Based on the theme "${theme}", generate 3 distinct and creative photo shoot ideas. For each idea, provide a catchy title, a short, compelling description, and a suggested mood.

    Respond ONLY with a valid JSON array of objects in the following format:
    [
      {"title": "Idea Title 1", "description": "A short description.", "mood": "The mood of the shoot."},
      {"title": "Idea Title 2", "description": "A short description.", "mood": "The mood of the shoot."},
      {"title": "Idea Title 3", "description": "A short description.", "mood": "The mood of the shoot."}
    ]
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-04-17",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                temperature: 0.8,
            }
        });
        
        let jsonStr = response.text.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }

        const parsedData: PhotoIdea[] = JSON.parse(jsonStr);
        return parsedData;

    } catch (error) {
        console.error("Error generating photo ideas:", error);
        throw new Error("Failed to generate ideas from Gemini. Please check the theme and try again.");
    }
};
