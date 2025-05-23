// aijolot-chat.ts
'use server';
/**
 * @fileOverview A chat AI agent called Aijolot, that can help users with information about the AI agency's services.
 *
 * - aijolotChat - A function that handles the chat process with Aijolot.
 * - AijolotChatInput - The input type for the aijolotChat function.
 * - AijolotChatOutput - The return type for the aijolotChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AijolotChatInputSchema = z.object({
  message: z.string().describe('The user message to Aijolot.'),
});
export type AijolotChatInput = z.infer<typeof AijolotChatInputSchema>;

const AijolotChatOutputSchema = z.object({
  response: z.string().describe('Aijolot response to the user message.'),
});
export type AijolotChatOutput = z.infer<typeof AijolotChatOutputSchema>;

export async function aijolotChat(input: AijolotChatInput): Promise<AijolotChatOutput> {
  return aijolotChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aijolotChatPrompt',
  input: {schema: AijolotChatInputSchema},
  output: {schema: AijolotChatOutputSchema},
  prompt: `You are Aijolot, a helpful AI assistant for an AI agency specializing in providing AI solutions for e-commerce businesses.
  Your goal is to assist users with information about the agency's services.
  Be friendly, concise, and professional. Use the color palette:
  Tech Blue (#1E2A78) for a dark and serious background, Pilot Gray (#A3A8B0) for secondary typography and icons, Black Ink (#000000) for primary typography and contrast, White Mist (#F9F9F9) for light backgrounds or separators, Maize Yellow (#FFCE00) for vibrant accents and buttons.
  Use primary font Sora for headers, and secondary font Inter for body text.

  User message: {{{message}}}`,
});

const aijolotChatFlow = ai.defineFlow(
  {
    name: 'aijolotChatFlow',
    inputSchema: AijolotChatInputSchema,
    outputSchema: AijolotChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
