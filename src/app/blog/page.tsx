import { BlogPostCard } from '@/components/sections/blog-post-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AnimatedOnScroll from '@/components/utils/animated-on-scroll';
import { Search } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getBlogCategories } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Recursos y Blog IA - El Laboratorio de Leo IA',
  description: 'Insights, tendencias y guías prácticas sobre IA para eCommerce. Mantente al día con Aijolot.',
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <AnimatedOnScroll animation="fadeInUp">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            El Laboratorio de Aijolot: Insights y Tendencias
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Sumérgete en el mundo de la Inteligencia Artificial para eCommerce. Encuentra artículos, guías y las últimas novedades para potenciar tu negocio.
          </p>
        </header>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fadeInUp" delay={100}>
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full md:w-auto">
            <Input type="search" placeholder="Buscar artículos..." className="pl-10 h-11 text-base" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-[180px] h-11 text-base">
              <SelectValue placeholder="Categorías" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las Categorías</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </AnimatedOnScroll>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} animationDelay={index * 100 + 200} section="blog_page" />
        ))}
      </div>
      
      <AnimatedOnScroll animation="fadeInUp" delay={400}>
        <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Cargar más artículos
            </Button>
        </div>
      </AnimatedOnScroll>

      {/* Placeholder for other sections like Guides, Glossary etc. */}
      {/* 
      <section className="mt-16 py-12 bg-card rounded-lg">
        <h2 className="text-2xl font-sora font-semibold text-center mb-8">Guías Prácticas</h2>
        <p className="text-center text-muted-foreground">Próximamente...</p>
      </section>
      */}
    </div>
  );
}
