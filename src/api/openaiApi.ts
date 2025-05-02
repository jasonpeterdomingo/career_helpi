import {systemPrompt} from "./systemPrompt";
/**
 * openaiApi.ts
 * 
 * This module provides a function to generate a career report using the OpenAI API.
 * Reference: https://platform.openai.com/docs/api-reference/introduction & ChatGPT
 * 
 * @param prompt The prompt to be sent to the OpenAI API
 * @param apiKey The OpenAI API key
 */
export async function GenerateCareerReport(prompt: string, apiKey: string): Promise<string> {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",  // HTTP method
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,  // authentication
        },
        // The body of the request contains the model and the messages
        body: JSON.stringify({
            model: "gpt-4.1",
            messages: [ 
                {role: "system", content: systemPrompt},  // system prompt
                { role: "user", content: prompt }],
                temperature: 0.7 // controls randomness in the output
        }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}