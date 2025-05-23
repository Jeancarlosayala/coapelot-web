'use server';
/**
 * @fileOverview Provides a free strategic IA diagnosis for an eCommerce business after chatting with Leo IA.
 *
 * - getStrategicIADiagnosis - A function that initiates the strategic IA diagnosis process.
 * - StrategicIADiagnosisInput - The input type for the getStrategicIADiagnosis function.
 * - StrategicIADiagnosisOutput - The return type for the getStrategicIADiagnosis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StrategicIADiagnosisInputSchema = z.object({
  userQuery: z
    .string()
    .describe('The user query about their eCommerce business for IA strategic diagnosis.'),
});
export type StrategicIADiagnosisInput = z.infer<typeof StrategicIADiagnosisInputSchema>;

const StrategicIADiagnosisOutputSchema = z.object({
  diagnosis: z
    .string()
    .describe(
      'A strategic IA diagnosis for the eCommerce business based on the user query.'
    ),
});
export type StrategicIADiagnosisOutput = z.infer<typeof StrategicIADiagnosisOutputSchema>;

export async function getStrategicIADiagnosis(
  input: StrategicIADiagnosisInput
): Promise<StrategicIADiagnosisOutput> {
  return strategicIADiagnosisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'strategicIADiagnosisPrompt',
  input: {schema: StrategicIADiagnosisInputSchema},
  output: {schema: StrategicIADiagnosisOutputSchema},
  prompt: `You are Leo IA, an AI agent providing strategic IA diagnoses for eCommerce businesses.

  Based on the user's query, provide a concise and helpful strategic IA diagnosis.

  User Query: {{{userQuery}}}`,
});

const strategicIADiagnosisFlow = ai.defineFlow(
  {
    name: 'strategicIADiagnosisFlow',
    inputSchema: StrategicIADiagnosisInputSchema,
    outputSchema: StrategicIADiagnosisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
