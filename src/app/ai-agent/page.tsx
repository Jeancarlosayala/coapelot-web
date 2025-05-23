import { AiChatInterface } from '@/components/ai-chat-interface';
import type { Metadata } from 'next';
import { Suspense } from 'react'; // Import Suspense

export const metadata: Metadata = {
  title: 'Habla con Leo IA (Aijolot)',
  description: 'Chatea con Aijolot, tu asistente IA personal para eCommerce. Obtén respuestas, diagnósticos y soluciones IA.',
};

// Helper component to ensure AiChatInterface is client-side rendered within Suspense boundary
function ChatClientBoundary() {
  return <AiChatInterface />;
}


export default function AiAgentPage() {
  return (
    <div className="container mx-auto px-2 py-4 md:px-4 md:py-8 h-[calc(100vh-theme(spacing.32))] md:h-[calc(100vh-theme(spacing.40))] flex flex-col">
       <Suspense fallback={<div className="flex-grow flex items-center justify-center"><p>Cargando chat...</p></div>}>
        <ChatClientBoundary />
      </Suspense>
    </div>
  );
}
