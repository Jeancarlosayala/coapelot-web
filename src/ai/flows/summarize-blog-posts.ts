// SummarizeBlogPosts flow
'use server';
/**
 * @fileOverview Summarizes blog posts given a URL.
 *
 * - summarizeBlogPosts - A function that summarizes blog posts.
 * - SummarizeBlogPostsInput - The input type for the summarizeBlogPosts function.
 * - SummarizeBlogPostsOutput - The return type for the summarizeBlogPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogPostsInputSchema = z.object({
  blogPostUrl: z.string().describe('The URL of the blog post to summarize.'),
});

export type SummarizeBlogPostsInput = z.infer<typeof SummarizeBlogPostsInputSchema>;

const SummarizeBlogPostsOutputSchema = z.object({
  summary: z.string().describe('A summary of the blog post.'),
});

export type SummarizeBlogPostsOutput = z.infer<typeof SummarizeBlogPostsOutputSchema>;

export async function summarizeBlogPosts(input: SummarizeBlogPostsInput): Promise<SummarizeBlogPostsOutput> {
  return summarizeBlogPostsFlow(input);
}

const summarizeBlogPostsPrompt = ai.definePrompt({
  name: 'summarizeBlogPostsPrompt',
  input: {schema: SummarizeBlogPostsInputSchema},
  output: {schema: SummarizeBlogPostsOutputSchema},
  prompt: `You are an expert blog post summarizer.  You will be given the URL of a blog post, and you will summarize it in a few sentences.\n\nBlog Post URL: {{{blogPostUrl}}}`,
});

const summarizeBlogPostsFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPostsFlow',
    inputSchema: SummarizeBlogPostsInputSchema,
    outputSchema: SummarizeBlogPostsOutputSchema,
  },
  async input => {
    const {output} = await summarizeBlogPostsPrompt(input);
    return output!;
  }
);
