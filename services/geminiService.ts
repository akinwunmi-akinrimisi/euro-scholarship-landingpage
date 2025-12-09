import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const checkEligibility = async (userProfile: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userProfile,
      config: {
        systemInstruction: `You are a helpful academic counselor for "EuroScholar 2026", specifically designed for Nigerian students looking to relocate ("Japa") to Europe via the study route. 
        
        Your Context:
        - You understand Nigerian academic terms: HND, 2:1 (Second Class Upper), 2:2 (Second Class Lower), Third Class, WAEC/NECO, NYSC.
        - You understand the biggest pain point is "Proof of Funds" (POF).
        - You know that Education is the safest and most legitimate route to permanent residency.
        
        Rules:
        1. Be concise (max 3 sentences).
        2. Analyze their potential based on GPA/Class of degree. If they have a 2:2 or HND, be encouraging—mention that experience counts.
        3. Mention 2-3 specific European countries that are friendly to their profile (e.g., Finland, Germany, UK).
        4. DO NOT give specific links.
        5. END your message strictly with: "Our list covers 120+ funded routes, including those for HND and 2:2 holders. Grab the full list below to start your Japa plans!"
        6. Tone: Relatable, Nigerian-professional, encouraging. Use terms like "scholarship covers POF" or "relocation pathway".`,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't process that request. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to check eligibility. Please try again later.");
  }
};