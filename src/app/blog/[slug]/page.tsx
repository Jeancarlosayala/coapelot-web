import { Button } from '@/components/ui/button';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { ArrowLeft, CalendarDays, MessageCircle, UserCircle } from 'lucide-react';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
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
  const post = getBlogPostBySlug(params.slug);

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

          <div className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-sora prose-headings:text-foreground prose-headings:leading-tight
                       prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-primary hover:prose-a:text-primary/80 prose-a:underline
                       prose-strong:text-foreground prose-strong:font-semibold
                       prose-ul:text-foreground/90 prose-ol:text-foreground/90
                       prose-li:mb-2 prose-li:leading-relaxed
                       prose-table:border-collapse prose-table:border-border
                       prose-thead:bg-muted prose-th:border prose-th:border-border prose-th:p-4 prose-th:font-semibold
                       prose-td:border prose-td:border-border prose-td:p-4
                       prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
                       prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                       prose-h2:text-2xl prose-h2:mb-5 prose-h2:mt-8 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                       prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-6 prose-h3:font-semibold
                       prose-h4:text-lg prose-h4:mb-3 prose-h4:mt-5 prose-h4:font-semibold
                       prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm">
            <ReactMarkdown>{post.content || ''}</ReactMarkdown>
          </div>
        </article>
      </AnimatedOnScroll>

      {/* CTA Section */}
      <AnimatedOnScroll animation="fadeInUp" delay={200}>
        <div className="mt-16 mb-12">
          <div className="gradient-bg rounded-2xl p-10 md:p-16 text-center text-white flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-white">
              Agenda una Demo y Ve la Diferencia con Tus Propios Ojos
            </h3>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg text-white/90 mb-4">
                Una cosa es leer sobre inteligencia artificial para B2C y otra es verla en acción con tus propios productos, tu inventario, tus procesos.
              </p>
              <p className="text-lg text-white/90 mb-4">
                No te quedes con la duda de "¿qué pasaría si...?".
              </p>
              <p className="text-lg text-white/90 mb-4">
                Agenda una demo para ver nuestros Agente de IA en acción. Te vamos a mostrar exactamente cómo funcionaría en tu negocio, con tus productos reales, simulando conversaciones con tus clientes típicos.
              </p>
              <p className="text-lg text-white/90 mb-4">
                Vas a ver en 30 minutos la diferencia entre seguir perdiendo ventas con tecnología del pasado o empezar a dominar con automatización de ventas con IA.
              </p>
              <p className="text-lg text-white/90 mb-4">
                <strong>¿Estás listo para triplicar tus ventas o vas a seguir viendo cómo tu competencia se queda con tus clientes?</strong>
              </p>
              <p className="text-lg text-white/90">
                La elección es tuya. Pero recuerda: en el mundo del ecommerce, los que no evolucionan, se extinguen.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
              <Link href="/contact">
                Agendar una Demo
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fadeInUp" delay={300}>
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-sora font-semibold mb-4">Discute este artículo</h3>
          <p className="text-muted-foreground mb-6">
            ¿Tienes preguntas o comentarios sobre este artículo? ¡Habla con nuestros expertos en IA para profundizar en el tema o explorar ideas relacionadas!
          </p>
          <Button asChild size="lg" className="rounded-lg text-base font-bold transition-transform hover:scale-105 h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shine-button">
            <Link href={`/ai-agent?prompt=Quiero discutir sobre el artículo: ${encodeURIComponent(post.title)}`}>
              <MessageCircle className="w-5 h-5 mr-2" /> Hablar con Aijolot
            </Link>
          </Button>
        </div>
      </AnimatedOnScroll>
    </div>
  );
}

// For static generation of blog post pages
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
