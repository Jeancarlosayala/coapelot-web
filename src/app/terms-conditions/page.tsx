import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Nuestros términos y condiciones de uso para Aijolot.',
};

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 max-w-3xl">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-sora font-bold text-center">Términos y Condiciones</h1>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-sora prose-headings:text-foreground
                       prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80
                       prose-strong:text-foreground prose-ul:text-foreground/90 prose-ol:text-foreground/90">
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="font-sora">1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar los servicios de Aijolot (el "Servicio"), aceptas cumplir y estar sujeto a estos Términos y Condiciones de Uso. Si no estás de acuerdo con alguna parte de los términos, no puedes acceder al Servicio.</p>

          <h2 className="font-sora">2. Descripción del Servicio</h2>
          <p>Aijolot proporciona soluciones de inteligencia artificial para empresas de eCommerce, incluyendo pero no limitado a agentes IA, análisis de datos, generación de contenido y consultoría estratégica. Las características específicas y los precios de los servicios se detallarán en propuestas o acuerdos de servicio individuales.</p>

          <h2 className="font-sora">3. Uso del Servicio</h2>
          <p>Eres responsable de tu uso del Servicio y de cualquier contenido que proporciones, incluyendo el cumplimiento de las leyes, reglas y regulaciones aplicables. No debes hacer mal uso del Servicio. Por ejemplo, no debes interferir con el Servicio ni intentar acceder a él utilizando un método que no sea la interfaz y las instrucciones que proporcionamos.</p>
          
          <h2 className="font-sora">4. Cuentas de Usuario</h2>
          <p>Cuando creas una cuenta con nosotros, debes proporcionarnos información precisa, completa y actualizada en todo momento. El incumplimiento de esto constituye una violación de los Términos, lo que puede resultar en la terminación inmediata de tu cuenta en nuestro Servicio.</p>

          <h2 className="font-sora">5. Propiedad Intelectual</h2>
          <p>El Servicio y su contenido original (excluyendo el Contenido proporcionado por los usuarios), características y funcionalidad son y seguirán siendo propiedad exclusiva de Aijolot y sus licenciantes. El Servicio está protegido por derechos de autor, marcas comerciales y otras leyes tanto de [País] como de países extranjeros.</p>
          
          <h2 className="font-sora">6. Terminación</h2>
          <p>Podemos terminar o suspender tu acceso a nuestro Servicio inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo, entre otros, si incumples los Términos.</p>

          <h2 className="font-sora">7. Limitación de Responsabilidad</h2>
          <p>En ningún caso Aijolot, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo, entre otros, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) tu acceso o uso o incapacidad para acceder o usar el Servicio; (ii) cualquier conducta o contenido de terceros en el Servicio; (iii) cualquier contenido obtenido del Servicio; y (iv) acceso no autorizado, uso o alteración de tus transmisiones o contenido, ya sea basado en garantía, contrato, agravio (incluyendo negligencia) o cualquier otra teoría legal, ya sea que hayamos sido informados o no de la posibilidad de dicho daño, e incluso si se determina que un remedio establecido en este documento ha fallado en su propósito esencial.</p>

          <h2 className="font-sora">8. Cambios a los Términos</h2>
          <p>Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar al menos 30 días de aviso antes de que entren en vigor los nuevos términos. Lo que constituye un cambio material se determinará a nuestra sola discreción.</p>

          <h2 className="font-sora">9. Contáctanos</h2>
          <p>Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en [email de contacto legal].</p>
        </div>
      </AnimatedOnScroll>
    </div>
  );
}
