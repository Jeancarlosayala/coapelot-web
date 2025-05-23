'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
  success: false,
  isError: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Mensaje Enviado",
          description: state.message,
          variant: "default", // or a custom success variant
        });
        // Optionally reset form fields here if not handled by browser default
      } else if (state.isError) {
        toast({
          title: "Error en el Formulario",
          description: state.message + (state.issues ? `\n- ${state.issues.join('\n- ')}` : ''),
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && state.isError && (
         <Alert variant="destructive">
           <Terminal className="h-4 w-4" />
           <AlertTitle>Error</AlertTitle>
           <AlertDescription>
            {state.message}
            {state.issues && (
              <ul className="list-disc list-inside mt-2">
                {state.issues.map((issue, i) => <li key={i}>{issue}</li>)}
              </ul>
            )}
           </AlertDescription>
         </Alert>
      )}
      <div>
        <Label htmlFor="name" className="text-foreground/90">Nombre Completo</Label>
        <Input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Tu nombre" 
          required 
          className="mt-1 bg-input text-foreground placeholder:text-muted-foreground" 
          defaultValue={state.fields?.name}
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-foreground/90">Correo Electrónico</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="tu@email.com" 
          required 
          className="mt-1 bg-input text-foreground placeholder:text-muted-foreground"
          defaultValue={state.fields?.email}
        />
      </div>
      <div>
        <Label htmlFor="subject" className="text-foreground/90">Asunto (Opcional)</Label>
        <Input 
          id="subject" 
          name="subject" 
          type="text" 
          placeholder="Asunto de tu consulta" 
          className="mt-1 bg-input text-foreground placeholder:text-muted-foreground"
          defaultValue={state.fields?.subject}
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground/90">Mensaje</Label>
        <Textarea 
          id="message" 
          name="message" 
          rows={5} 
          placeholder="Escribe tu mensaje aquí..." 
          required 
          className="mt-1 bg-input text-foreground placeholder:text-muted-foreground"
          defaultValue={state.fields?.message}
        />
      </div>
      <SubmitButton />
    </form>
  );
}
