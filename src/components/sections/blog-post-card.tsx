'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CalendarDays, MessageCircle } from 'lucide-react';
import AnimatedOnScroll from '../utils/animated-on-scroll';
import { analytics } from '@/lib/analytics';
import { BlogPost } from '@/lib/blog';

interface BlogPostCardProps {
  post: BlogPost;
  animationDelay?: number;
  section?: 'home' | 'blog_page';
}

export function BlogPostCard({ post, animationDelay = 0, section = 'home' }: BlogPostCardProps) {
  return (
    <AnimatedOnScroll animation="fadeInUp" delay={animationDelay}>
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-border hover:border-primary/50">
        <Link 
          href={`/blog/${post.slug}`} 
          className="block"
          onClick={() => analytics.trackBlogClick(post.slug, post.title, `/blog/${post.slug}`, section)}
        >
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={post.imageHint || "technology article"}
          />
        </Link>
        <CardHeader>
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:text-primary transition-colors"
            onClick={() => analytics.trackBlogClick(post.slug, post.title, `/blog/${post.slug}`, section)}
          >
            <CardTitle className="text-xl font-sora mb-1">{post.title}</CardTitle>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{post.date}</span>
            <span className="font-bold">&middot;</span>
            <span>{post.category}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{post.summary}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="link" asChild className="text-primary p-0 hover:text-primary/80">
            <Link 
              href={`/blog/${post.slug}`}
              onClick={() => analytics.trackBlogClick(post.slug, post.title, `/blog/${post.slug}`, section)}
            >
              Leer más <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link 
              href={`/ai-agent?prompt=Quiero discutir sobre el artículo: ${encodeURIComponent(post.title)}`}
              onClick={() => analytics.trackCTAClick('Discutir con Aijolot', `/ai-agent?prompt=Quiero discutir sobre el artículo: ${encodeURIComponent(post.title)}`, `blog_card_${section}`)}
            >
              <MessageCircle className="w-4 h-4 mr-2"/> Discutir con Aijolot
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedOnScroll>
  );
}
