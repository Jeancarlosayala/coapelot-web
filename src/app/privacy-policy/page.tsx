import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Nuestra política de privacidad para Aijolot.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 max-w-3xl">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-sora font-bold text-center">Política de Privacidad</h1>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-sora prose-headings:text-foreground
                       prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80
                       prose-strong:text-foreground prose-ul:text-foreground/90 prose-ol:text-foreground/90">
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="font-sora">1. Introducción</h2>
          <p>Bienvenido a Aijolot ("nosotros", "nuestro"). Nos comprometemos a proteger tu información personal y tu derecho a la privacidad. Si tienes alguna pregunta o inquietud sobre nuestra política, o nuestras prácticas con respecto a tu información personal, por favor contáctanos en [email de contacto de privacidad].</p>

          <h2 className="font-sora">2. Información que Recopilamos</h2>
          <p>Recopilamos información personal que nos proporcionas voluntariamente cuando te registras en los Servicios, expresas interés en obtener información sobre nosotros o nuestros productos y servicios, cuando participas en actividades en los Servicios o de otra manera cuando nos contactas.</p>
          <p>La información personal que recopilamos depende del contexto de tus interacciones con nosotros y los Servicios, las elecciones que haces y los productos y características que utilizas. La información personal que recopilamos puede incluir lo siguiente:</p>
          <ul>
            <li>Información de contacto (como nombre, dirección de correo electrónico, número de teléfono)</li>
            <li>Información de la cuenta (como nombre de usuario, contraseña)</li>
            <li>Información comercial (como nombre de la empresa, industria)</li>
            <li>Datos de uso y cookies (más detalles en nuestra Política de Cookies)</li>
          </ul>

          <h2 className="font-sora">3. Cómo Utilizamos tu Información</h2>
          <p>Utilizamos la información personal recopilada a través de nuestros Servicios para una variedad de propósitos comerciales descritos a continuación. Procesamos tu información personal para estos fines en función de nuestros intereses comerciales legítimos, para celebrar o ejecutar un contrato contigo, con tu consentimiento, y/o para cumplir con nuestras obligaciones legales.</p>
          
          <h2 className="font-sora">4. ¿Compartiremos tu Información?</h2>
          <p>Solo compartimos información con tu consentimiento, para cumplir con las leyes, para proporcionarte servicios, para proteger tus derechos o para cumplir con obligaciones comerciales.</p>

          <h2 className="font-sora">5. Cookies y Tecnologías Similares</h2>
          <p>Podemos utilizar cookies y tecnologías de seguimiento similares para recopilar y almacenar tu información. Nuestra Política de Cookies proporciona más detalles sobre cómo utilizamos estas tecnologías.</p>
          
          <h2 className="font-sora">6. Tus Derechos de Privacidad</h2>
          <p>En algunas regiones (como el EEE y el Reino Unido), tienes ciertos derechos bajo las leyes de protección de datos aplicables. Estos pueden incluir el derecho (i) a solicitar acceso y obtener una copia de tu información personal, (ii) a solicitar rectificación o eliminación; (iii) a restringir el procesamiento de tu información personal; y (iv) si aplica, a la portabilidad de datos.</p>

          <h2 className="font-sora">7. Actualizaciones a esta Política</h2>
          <p>Podemos actualizar esta política de privacidad de vez en cuando. La versión actualizada será indicada por una fecha de "Última actualización" revisada y la versión actualizada será efectiva tan pronto como sea accesible.</p>

          <h2 className="font-sora">8. Cómo Contactarnos</h2>
          <p>Si tienes preguntas o comentarios sobre esta política, puedes enviarnos un correo electrónico a [email de contacto de privacidad] o por correo postal a:</p>
          <p>[Nombre de la Empresa Aijolot]</p>
          <p>[Dirección de la Empresa]</p>
          <p>[Ciudad, Código Postal]</p>
          <p>[País]</p>
        </div>
      </AnimatedOnScroll>
    </div>
  );
}
