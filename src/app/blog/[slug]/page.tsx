import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { ArrowLeft, CalendarDays, MessageCircle, UserCircle } from 'lucide-react';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This is a placeholder. In a real app, you'd fetch this data.
// For now, use a simplified version of the blogPosts data from the main blog page.
const blogPostsData = [
  {
    slug: 'ia-en-ecommerce-2024',
    title: 'Tendencias de IA que Dominarán el eCommerce en 2024',
    summary: 'Descubre las innovaciones en inteligencia artificial que están configuradas para transformar la forma en que vendemos online este año.',
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: "futuristic ai",
    date: '15 Julio, 2024',
    category: 'Tendencias IA',
    author: 'Leo IA',
    content: `
      <p>La inteligencia artificial (IA) continúa su marcha imparable, transformando industrias enteras, y el eCommerce no es la excepción. A medida que nos adentramos en 2024, varias tendencias de IA están preparadas para redefinir la experiencia de compra online, la eficiencia operativa y las estrategias de crecimiento de los negocios digitales.</p>
      <h2 class="text-2xl font-sora font-semibold my-4">1. Hiper-Personalización Impulsada por IA</h2>
      <p>Los consumidores esperan experiencias cada vez más personalizadas. La IA permite analizar grandes cantidades de datos de clientes en tiempo real – historial de navegación, compras previas, interacciones en redes sociales, e incluso datos contextuales como el clima o eventos locales – para ofrecer recomendaciones de productos ultra-relevantes, contenido personalizado en la web y emails, y ofertas dinámicas. Esto no solo aumenta la conversión sino también la lealtad del cliente.</p>
      <h2 class="text-2xl font-sora font-semibold my-4">2. Agentes IA Conversacionales Avanzados</h2>
      <p>Los chatbots están evolucionando de simples respondedores de FAQs a verdaderos asistentes de compra inteligentes. Impulsados por Procesamiento de Lenguaje Natural (NLP) y Aprendizaje Automático (ML) avanzados, estos agentes IA pueden entender intenciones complejas, guiar a los usuarios a través del proceso de compra, resolver problemas proactivamente, e incluso realizar ventas cruzadas y ventas adicionales de manera natural y efectiva, disponibles 24/7.</p>
      <h2 class="text-2xl font-sora font-semibold my-4">3. Búsqueda Visual e Inteligente</h2>
      <p>La capacidad de buscar productos utilizando imágenes o lenguaje natural descriptivo está ganando terreno. La IA permite a los motores de búsqueda internos de los eCommerce entender consultas visuales ("encuéntrame un vestido similar a este") o semánticas complejas ("zapatillas cómodas para correr en montaña con buen agarre"). Esto mejora drásticamente la descubribilidad de productos y reduce la fricción en la búsqueda.</p>
      <p class="mt-6">Estas son solo algunas de las tendencias que marcarán el futuro del eCommerce. En Aijolot, estamos listos para ayudarte a implementar estas y otras soluciones IA para llevar tu negocio al siguiente nivel.</p>
    `
  },
  // Add other posts if needed for testing, or fetch dynamically
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsData.find(p => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }
  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 max-w-4xl">
      <AnimatedOnScroll animation="fadeInUp">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-1.5" />
                <span>{post.date}</span>
              </div>
              <span className="font-bold">&middot;</span>
              <span>Categoría: <Link href={`/blog?category=${post.category}`} className="text-primary hover:underline">{post.category}</Link></span>
              {post.author && (
                <>
                  <span className="font-bold">&middot;</span>
                  <div className="flex items-center">
                    <UserCircle className="w-4 h-4 mr-1.5" />
                    <span>Por {post.author}</span>
                  </div>
                </>
              )}
            </div>
          </header>

          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg mb-8 object-cover"
            data-ai-hint={post.imageHint || "blog post image"}
            priority
          />

          <div 
            className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-sora prose-headings:text-foreground
                       prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80
                       prose-strong:text-foreground prose-ul:text-foreground/90 prose-ol:text-foreground/90"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fadeInUp" delay={200}>
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-sora font-semibold mb-4">Discute este artículo</h3>
          <p className="text-muted-foreground mb-6">
            ¿Tienes preguntas o comentarios sobre este artículo? ¡Habla con Leo IA para profundizar en el tema o explorar ideas relacionadas!
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={`/ai-agent?prompt=Quiero discutir sobre el artículo: ${encodeURIComponent(post.title)}`}>
              <MessageCircle className="w-5 h-5 mr-2" /> Hablar con Leo IA
            </Link>
          </Button>
        </div>
      </AnimatedOnScroll>
    </div>
  );
}

// For static generation of blog post pages
export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}
