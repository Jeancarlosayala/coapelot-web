// src/app/contact/actions.ts
'use server';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Dirección de correo electrónico inválida.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
  subject: z.string().optional(), // Optional subject
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
  isError?: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: 'Datos de formulario inválidos. Por favor, corrige los errores.',
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
      isError: true,
    };
  }

  // Simulate sending an email or saving to a database
  console.log('Datos del formulario de contacto enviados:', parsed.data);
  // In a real app, you'd integrate with an email service (e.g., Resend, SendGrid)
  // or save the submission to your database.

  // Simulate a delay for async operation
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    success: true,
    isError: false,
  };
}
