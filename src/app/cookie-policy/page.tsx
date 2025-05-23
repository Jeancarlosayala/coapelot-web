import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Nuestra política de cookies para Aijolot.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 max-w-3xl">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-sora font-bold text-center">Política de Cookies</h1>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-sora prose-headings:text-foreground
                       prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80
                       prose-strong:text-foreground prose-ul:text-foreground/90 prose-ol:text-foreground/90">
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="font-sora">1. ¿Qué son las Cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu dispositivo. Se utilizan ampliamente para que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.</p>

          <h2 className="font-sora">2. ¿Cómo Utilizamos las Cookies?</h2>
          <p>En Aijolot, utilizamos cookies para varios propósitos, incluyendo:</p>
          <ul>
            <li><strong>Cookies Esenciales:</strong> Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Generalmente solo se configuran en respuesta a acciones realizadas por ti que equivalen a una solicitud de servicios, como establecer tus preferencias de privacidad, iniciar sesión o completar formularios.</li>
            <li><strong>Cookies de Rendimiento y Análisis:</strong> Estas cookies nos permiten contar las visitas y las fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares y ver cómo los visitantes se mueven por el sitio. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima.</li>
            <li><strong>Cookies de Funcionalidad:</strong> Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas.</li>
            <li><strong>Cookies de Publicidad/Segmentación (si aplica):</strong> Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por esas empresas para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios. No almacenan directamente información personal, sino que se basan en la identificación única de tu navegador y dispositivo de internet.</li>
          </ul>

          <h2 className="font-sora">3. Tipos de Cookies que Utilizamos</h2>
          <p>A continuación, se muestra una lista más detallada de los tipos de cookies que podemos utilizar:</p>
          <ul>
            <li><strong>Cookies de Sesión:</strong> Son cookies temporales que permanecen en el archivo de cookies de tu navegador hasta que abandonas el sitio.</li>
            <li><strong>Cookies Persistentes:</strong> Estas permanecen en el archivo de cookies de tu navegador durante mucho más tiempo (aunque cuánto tiempo dependerá de la vida útil de la cookie específica).</li>
            <li><strong>Cookies Propias:</strong> Son cookies establecidas por el sitio web que estás visitando.</li>
            <li><strong>Cookies de Terceros:</strong> Son cookies establecidas por un sitio web diferente al que estás visitando. Por ejemplo, podríamos usar Google Analytics, que establece sus propias cookies para rastrear el uso.</li>
          </ul>
          
          <h2 className="font-sora">4. Cómo Controlar las Cookies</h2>
          <p>Puedes controlar y/o eliminar las cookies como desees. Para obtener más detalles, consulta aboutcookies.org. Puedes eliminar todas las cookies que ya están en tu computadora y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio y algunos servicios y funcionalidades pueden no funcionar.</p>
          <p>La mayoría de los navegadores web permiten cierto control de la mayoría de las cookies a través de la configuración del navegador. Para obtener más información sobre las cookies, incluyendo cómo ver qué cookies se han establecido, visita www.aboutcookies.org o www.allaboutcookies.org.</p>

          <h2 className="font-sora">5. Cambios a esta Política de Cookies</h2>
          <p>Podemos actualizar nuestra Política de Cookies de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Cookies en esta página.</p>

          <h2 className="font-sora">6. Contáctanos</h2>
          <p>Si tienes alguna pregunta sobre nuestra Política de Cookies, por favor contáctanos en [email de contacto para cookies o privacidad].</p>
        </div>
      </AnimatedOnScroll>
    </div>
  );
}
