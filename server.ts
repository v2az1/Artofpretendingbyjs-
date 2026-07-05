/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini Client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.trim() !== "") {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
      console.log("Gemini API Client successfully initialized.");
    } else {
      console.warn("GEMINI_API_KEY is not set. Empathetic reflections will run on a local poetic generator fallback.");
    }
  }
  return aiClient;
}

// Empathetic literary reflection templates as fallback when API key is missing
const POETIC_FALLBACKS: Record<string, { empatheticQuote: string; poeticResponse: string; actionableStep: string }> = {
  strong: {
    empatheticQuote: "You carry a mountain on your shoulders, yet you pretend it is only a summer breeze.",
    poeticResponse: "You have spent so long being the pillar of everyone else's temple that you have forgotten that columns, too, can crack under constant pressure. It is exhausting to be strong for a world that forgets you are human. You do not have to hold up the sky alone today. It is okay to let yourself rest, to bend, and to receive the warmth you so freely give to others.",
    actionableStep: "Let one small thing go unmanaged today. Tell someone you care about, 'I am tired, and I need a little help with this.' Notice how the sky does not fall when you do."
  },
  happy: {
    empatheticQuote: "The brightest smiles often cast the deepest, most silent shadows.",
    poeticResponse: "You have styled yourself as the sun in everyone's sky, bringing warmth and laughter to keep their clouds away. But when the laughter fades and the room goes quiet, you are left in the cold. It is a lonely burden to carry a cheerful face when your soul is quietly weeping. Your sadness is not an inconvenience, nor is your weariness a failure. It is simply a truth waiting to be held.",
    actionableStep: "Find a mirror or a quiet room tonight. Take a deep, slow breath, let your facial muscles completely relax, take off your public smile, and let your face rest in its quietest, most honest shape for three minutes."
  },
  perfect: {
    empatheticQuote: "Your worth was never meant to be measured by the weight of your accomplishments.",
    poeticResponse: "You run at full speed, chasing checklists, titles, and flawless standards, hoping that if you achieve enough, you will finally feel like you are enough. But this perfection is a beautiful cage. Beneath your accomplishments is a soul that is tired of performing. You do not need to be flawless to be loved, and you do not need to be exceptional to deserve to exist.",
    actionableStep: "Purposely do one small thing imperfectly today, or leave a low-priority task completely unfinished. Look at it, breathe through the anxiety, and whisper: 'I am still worthy of peace.'"
  },
  fine: {
    empatheticQuote: "Behind every 'I'm fine' is an ocean of words waiting to be understood.",
    poeticResponse: "You have trained your voice to be small and your pain to be quiet, believing that to speak your struggles is to become a burden. But by swallowing your storms, you are drowning from the inside. Your pain does not need to be a global crisis to be valid. Your quiet hurts deserve a soft space to land, and your voice deserves to be heard without apology.",
    actionableStep: "Write down your honest answer to 'How are you?' on a scrap of paper. Don't edit it. Keep it just for yourself, or tear it up as a physical release of the silence you've been holding."
  },
  general: {
    empatheticQuote: "Behind every mask is a beautiful story of survival, waiting for the courage to be told.",
    poeticResponse: "Pretending is how we survived the moments that felt too heavy to carry. It was your armor, and it served you well. But armor eventually becomes a cage if we never learn to take it off. Your silent battles, your hidden tears, and your unspoken fears are safe here. Healing does not ask you to never be afraid; it only asks you to stop hiding your heart from yourself.",
    actionableStep: "Spend five minutes in complete silence today. Place a hand on your heart, acknowledge the weight you've been carrying, and gently tell yourself: 'I see how hard you've been trying. It is okay to let go.'"
  }
};

// POST Endpoint for Empathetic Reflection Sanctuary
app.post("/api/reflect", async (req, res) => {
  try {
    const { maskType, customConfession } = req.body;
    const type = maskType || "general";
    
    const client = getGeminiClient();
    
    if (!client) {
      // Fallback response when Gemini API is unavailable
      const fallback = POETIC_FALLBACKS[type] || POETIC_FALLBACKS.general;
      if (customConfession && customConfession.trim() !== "") {
        // Personify the fallback slightly to match the custom confession
        return res.json({
          empatheticQuote: fallback.empatheticQuote,
          poeticResponse: `You shared: "${customConfession}". This is a deeply honest step. ${fallback.poeticResponse}`,
          actionableStep: fallback.actionableStep
        });
      }
      return res.json(fallback);
    }

    // Call actual server-side Gemini API
    const prompt = `A visitor to the companion website of "The Art of Pretending" by Javeria Naseer is sharing their inner mask struggle.
    Mask Type Selected: ${type}
    ${customConfession ? `Their Personal Confession: "${customConfession}"` : ""}
    
    Please provide a deeply empathetic, validating, and calming literary response from the perspective of the book's voice (compassionate, psychological, poetic, and honest). The tone should feel like 'the moment right before you cry — not sad, but true, deep, quiet, and honest.'
    
    Instructions:
    - Never sound preachy, robotic, or clinical.
    - Validate their exhaustion and make them feel safe and understood.
    - Provide a custom short poetic quote that encapsulates their specific mask (styled like Javeria Naseer's writing).
    - Provide a comforting, gentle response.
    - Provide one tiny, gentle, non-judgmental actionable step they can take tonight to connect with their true self.
    
    You MUST return the response strictly in JSON format matching this schema:
    {
      "empatheticQuote": "A short poetic literary quote (1-2 sentences)",
      "poeticResponse": "The main comforting and validating response (3-5 sentences, around 80-120 words)",
      "actionableStep": "A very small, gentle, practical step they can do right now or tonight (1-2 sentences)"
    }`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the literary voice of 'The Art of Pretending' by Javeria Naseer, a BS Psychology student and author. Your sole mission is to make visitors feel deeply understood, safe, and heard before they even open the book. You speak with immense empathy, quiet elegance, and psychological wisdom.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            empatheticQuote: {
              type: Type.STRING,
              description: "A short, poetic, literary quote styling the theme of the confession."
            },
            poeticResponse: {
              type: Type.STRING,
              description: "A deeply moving, comforting, comforting paragraph that speaks directly to their heart."
            },
            actionableStep: {
              type: Type.STRING,
              description: "One tiny, achievable, comforting actionable step for their mental wellness."
            }
          },
          required: ["empatheticQuote", "poeticResponse", "actionableStep"]
        }
      }
    });

    const text = response.text;
    if (text) {
      const parsed = JSON.parse(text);
      return res.json(parsed);
    } else {
      throw new Error("Empty response from Gemini");
    }

  } catch (error) {
    console.error("Error in /api/reflect:", error);
    // Graceful error fallback
    const type = req.body?.maskType || "general";
    const fallback = POETIC_FALLBACKS[type] || POETIC_FALLBACKS.general;
    res.json(fallback);
  }
});

// Setup Vite Dev Server vs Static Production serving
async function initializeServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

initializeServer();
