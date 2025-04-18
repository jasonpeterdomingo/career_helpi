/**
 * openaiApi.ts
 * 
 * This module provides a function to generate a career report using the OpenAI API.
 * @param prompt The prompt to be sent to the OpenAI API
 * @param apiKey The OpenAI API key
 */
export async function GenerateCareerReport(prompt: string, apiKey: string): Promise<string> {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4.1",
            messages: [{ role: "user", content: prompt }],
        }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}