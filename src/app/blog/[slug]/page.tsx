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
                       prose-headings:font-sora prose-headings:text-foreground
                       prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80
                       prose-strong:text-foreground prose-ul:text-foreground/90 prose-ol:text-foreground/90">
            <ReactMarkdown>{post.content || ''}</ReactMarkdown>
          </div>
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
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
