'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, CornerDownLeft, User, Bot, Loader2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { aijolotChat, type AijolotChatInput, type AijolotChatOutput } from '@/ai/flows/aijolot-chat';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'; // For Leo IA image
import AnimatedOnScroll from './utils/animated-on-scroll';


interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export function AiChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialPrompt = searchParams.get('prompt');
    if (initialPrompt && messages.length === 0) { // Only process if no messages yet
      setInput(initialPrompt);
      // Automatically submit if there's an initial prompt
      // This needs to be wrapped to avoid direct call during render
      setTimeout(() => {
        if(inputRef.current) inputRef.current.value = initialPrompt; // Set input for visual consistency
        handleSubmitPrompt(initialPrompt);
      }, 0);
    }
  }, [searchParams]); // Removed messages from dependency array to prevent re-triggering

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);


  const handleSubmitPrompt = async (promptText: string) => {
    if (!promptText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      sender: 'user',
      text: promptText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiResponse: AijolotChatOutput = await aijolotChat({ message: promptText } as AijolotChatInput);
      const aiMessage: Message = {
        id: Date.now().toString() + '-ai',
        sender: 'ai',
        text: aiResponse.response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling AI chat flow:', error);
      const errorMessage: Message = {
        id: Date.now().toString() + '-error',
        sender: 'ai',
        text: 'Lo siento, ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      if(inputRef.current && inputRef.current.value === promptText) { // Clear input only if it was the submitted prompt
          setInput(''); 
          if (inputRef.current) inputRef.current.value = ''; // Also clear the ref's value
      }
    }
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitPrompt(input);
  };

  return (
    <AnimatedOnScroll animation="fadeInUp" className="h-full flex flex-col">
      <Card className="flex flex-col flex-grow shadow-2xl border-border max-h-[calc(100vh-10rem)] md:max-h-[calc(100vh-12rem)]">
        <CardHeader className="flex flex-row items-center space-x-4 p-4 border-b">
          <Avatar className="h-12 w-12 border-2 border-primary">
             <Image 
                src="https://placehold.co/100x100.png" 
                alt="Leo IA Avatar" 
                width={100} 
                height={100}
                data-ai-hint="friendly robot mascot"
              />
            <AvatarFallback>LIA</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl font-sora">Aijolot (Leo IA)</CardTitle>
            <p className="text-sm text-muted-foreground">Tu asistente IA para eCommerce</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 overflow-hidden">
          <ScrollArea ref={scrollAreaRef} className="h-full p-4 md:p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-3 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'ai' && (
                  <Avatar className="h-8 w-8 self-start">
                     <Image 
                        src="https://placehold.co/40x40.png" 
                        alt="Leo IA Avatar" 
                        width={40} 
                        height={40}
                        className="object-cover"
                        data-ai-hint="robot face"
                      />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-xl px-4 py-3 text-sm shadow-md ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-card text-card-foreground border border-border rounded-bl-none'
                  }`}
                >
                  {/* Use dangerouslySetInnerHTML if AI response contains HTML, otherwise render as text */}
                  {/* For safety, usually prefer markdown parsing or plain text */}
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-foreground/70 text-right' : 'text-muted-foreground/70'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <Avatar className="h-8 w-8 self-start">
                    <AvatarFallback><User size={18}/></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center justify-start gap-3">
                 <Avatar className="h-8 w-8 self-start">
                   <Image 
                        src="https://placehold.co/40x40.png" 
                        alt="Leo IA Avatar" 
                        width={40} 
                        height={40}
                        className="object-cover"
                        data-ai-hint="robot face"
                      />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="bg-card text-card-foreground border border-border rounded-xl px-4 py-3 text-sm shadow-md rounded-bl-none">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                </div>
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-3">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Escribe tu mensaje a Leo IA..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow h-11 text-base bg-input focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              <span className="sr-only">Enviar</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </AnimatedOnScroll>
  );
}
