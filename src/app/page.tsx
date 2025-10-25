"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Activity, Award, BookOpen, Cloud, Code, DollarSign, Globe, HelpCircle, Lock, MessageSquare, Package, Rocket, Shield, Star, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "feature" },
            { name: "Solutions", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Developers", id: "blog" },
            { name: "Support", id: "faq" }
          ]}
          logoSrc="https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Cloudflare"
          brandName="Cloudflare"
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="The Web Performance & Security Company"
          description="Build faster, more secure websites. Cloudflare's connectivity cloud protects and accelerates any Internet application online without adding hardware, installing software, or changing a line of code."
          tag="Trusted by millions"
          tagIcon={Shield}
          buttons={[
            { text: "Get Started Free", href: "contact" },
            { text: "Talk to Sales", href: "https://cloudflare.com/contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cloudflare dashboard interface"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Cloudflare"
          description="Our global network spans over 320 cities in more than 120 countries, ensuring your applications perform optimally anywhere in the world."
          tag="Platform"
          tagIcon={Globe}
          bulletPoints={[
            {
              title: "Global Network",
              description: "Deliver content from the edge closest to your users",
              icon: Globe
            },
            {
              title: "Enterprise Security",
              description: "Protect against DDoS attacks and security threats",
              icon: Shield
            },
            {
              title: "Zero Trust Architecture",
              description: "Secure your workforce and applications with Zero Trust",
              icon: Lock
            },
            {
              title: "Developer Experience",
              description: "Build with serverless computing at the edge",
              icon: Code
            }
          ]}
          buttons={[{ text: "Learn More", href: "feature" }]}
          imageSrc="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Global network visualization"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Everything You Need to Succeed Online"
          description="Cloudflare's suite of products work together to secure, accelerate, and make your applications more reliable."
          tag="Products"
          tagIcon={Zap}
          features={[
            {
              title: "CDN & Performance",
              description: "Cache static content globally and optimize dynamic content delivery for lightning-fast load times.",
              icon: Zap,
              button: { text: "Learn More", href: "https://cloudflare.com/cdn" }
            },
            {
              title: "DNS & Security",
              description: "Authoritative DNS with built-in DDoS protection and advanced security features.",
              icon: Shield,
              button: { text: "Learn More", href: "https://cloudflare.com/dns" }
            },
            {
              title: "Zero Trust Network Access",
              description: "Secure remote access to applications and resources without a VPN.",
              icon: Lock,
              button: { text: "Learn More", href: "https://cloudflare.com/zero-trust" }
            },
            {
              title: "Serverless Computing",
              description: "Run code at the edge with Cloudflare Workers for ultra-low latency applications.",
              icon: Cloud,
              button: { text: "Learn More", href: "https://workers.cloudflare.com" }
            }
          ]}
          buttons={[{ text: "View All Products", href: "https://cloudflare.com/products" }]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Featured Solutions"
          description="Popular Cloudflare products and services to accelerate and secure your applications."
          tag="Solutions"
          tagIcon={Package}
          products={[
            {
              id: "cdn",
              name: "Content Delivery Network",
              price: "Free",
              imageSrc: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "CDN performance dashboard",
              initialQuantity: 1,
              onProductClick: () => window.open('https://cloudflare.com/cdn', '_blank')
            },
            {
              id: "security",
              name: "Web Application Firewall",
              price: "$20/month",
              imageSrc: "https://images.pexels.com/photos/5475786/pexels-photo-5475786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Security dashboard",
              initialQuantity: 1,
              onProductClick: () => window.open('https://cloudflare.com/waf', '_blank')
            },
            {
              id: "workers",
              name: "Serverless Computing Platform",
              price: "$5/month",
              imageSrc: "https://images.pexels.com/photos/374630/pexels-photo-374630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Workers platform",
              initialQuantity: 1,
              onProductClick: () => window.open('https://workers.cloudflare.com', '_blank')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Plans for Every Need"
          description="Start free and scale as you grow. All plans include our global CDN and basic security features."
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "free",
              price: "Free",
              name: "Free plan",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "https://cloudflare.com/plans/free" }
              ],
              features: [
                "Global CDN",
                "DDoS protection",
                "Shared SSL certificate",
                "Analytics & reporting"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$20/month",
              name: "Pro plan",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Contact Sales", href: "https://cloudflare.com/contact" }
              ],
              features: [
                "Everything in Free",
                "Web Application Firewall",
                "Polish image optimization",
                "Advanced analytics",
                "Mobile redirect"
              ]
            },
            {
              id: "business",
              price: "$200/month",
              name: "Business plan",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Contact Sales", href: "https://cloudflare.com/contact" }
              ],
              features: [
                "Everything in Pro",
                "Advanced DDoS protection",
                "Custom SSL for business",
                "99.99% uptime SLA",
                "24/7 email support"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Cloudflare by the Numbers"
          description="See how our global network delivers performance and security at scale."
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "320+",
              title: "Cities",
              description: "Global network presence across 6 continents",
              icon: Globe
            },
            {
              id: "2",
              value: "28M+",
              title: "Domains",
              description: "Internet properties powered by Cloudflare",
              icon: Zap
            },
            {
              id: "3",
              value: "55M+",
              title: "Requests",
              description: "HTTP requests per second at peak",
              icon: Activity
            },
            {
              id: "4",
              value: "100%",
              title: "Uptime",
              description: "Network uptime commitment with SLA",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Trusted by Developers Worldwide"
          description="See what developers and businesses are saying about Cloudflare."
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahdev",
              testimonial: "Cloudflare has transformed how we think about web performance. Our site loads 3x faster and we've had zero downtime since switching.",
              imageSrc: "https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              handle: "@marcusr",
              testimonial: "The Zero Trust security model gave us the confidence to go fully remote. Our team can access everything securely from anywhere.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emily Johnson",
              handle: "@emilyj_dev",
              testimonial: "Workers changed everything. We can deploy serverless functions globally in seconds. The developer experience is incredible.",
              imageSrc: "https://images.pexels.com/photos/7594090/pexels-photo-7594090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Johnson portrait"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidk",
              testimonial: "Setup was literally minutes. Copy two nameservers and boom - global CDN, security, and analytics. Game changer for startups.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Over 28 million internet properties trust Cloudflare to keep them secure and fast."
          tag="Enterprise"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Cloudflare's products and services."
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is Cloudflare?",
              content: "Cloudflare is a web infrastructure and website security company that provides content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services."
            },
            {
              id: "2",
              title: "Is Cloudflare free?",
              content: "Yes! Cloudflare offers a generous free plan that includes global CDN, DDoS protection, and SSL certificates. Paid plans add advanced features and higher limits."
            },
            {
              id: "3",
              title: "How fast can I get started?",
              content: "You can get started in minutes. Simply sign up, add your website, and update your nameservers. Cloudflare will automatically optimize your site."
            },
            {
              id: "4",
              title: "What is Zero Trust?",
              content: "Zero Trust is a security model that assumes breach and verifies each request as though it originated from an open network, regardless of location."
            },
            {
              id: "5",
              title: "Do you offer enterprise support?",
              content: "Yes, our Business and Enterprise plans include premium support with faster response times and dedicated account management."
            },
            {
              id: "6",
              title: "Can I use Cloudflare with any hosting provider?",
              content: "Absolutely! Cloudflare works with any hosting provider and requires no changes to your existing infrastructure or codebase."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest from Our Blog"
          description="Stay updated with the latest developments in web performance, security, and internet infrastructure."
          tag="Resources"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Performance",
              title: "Introducing HTTP/3 Support",
              excerpt: "Learn how HTTP/3 improves web performance and why it matters for your applications.",
              imageSrc: "https://images.pexels.com/photos/18475683/pexels-photo-18475683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "HTTP/3 performance visualization",
              authorName: "John Smith",
              authorAvatar: "https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025",
              onBlogClick: () => window.open('https://blog.cloudflare.com', '_blank')
            },
            {
              id: "2",
              category: "Security",
              title: "Zero Trust Architecture Guide",
              excerpt: "A comprehensive guide to implementing Zero Trust security for modern organizations.",
              imageSrc: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Zero Trust security diagram",
              authorName: "Lisa Chen",
              authorAvatar: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025",
              onBlogClick: () => window.open('https://blog.cloudflare.com', '_blank')
            },
            {
              id: "3",
              category: "Developers",
              title: "Building with Workers",
              excerpt: "Best practices for developing serverless applications with Cloudflare Workers.",
              imageSrc: "https://images.pexels.com/photos/19813740/pexels-photo-19813740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cloudflare Workers code editor",
              authorName: "Mike Johnson",
              authorAvatar: "https://images.pexels.com/photos/7594090/pexels-photo-7594090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025",
              onBlogClick: () => window.open('https://developers.cloudflare.com', '_blank')
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Get Started?"
          description="Join millions of websites that trust Cloudflare to make them faster and more secure. Start your free account today."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email address"
          buttonText="Start Free"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required."
          imageSrc="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cloudflare dashboard preview"
          mediaPosition="right"
          onSubmit={(email) => console.log('Contact form submitted:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                { label: "CDN", href: "https://cloudflare.com/cdn" },
                { label: "DNS", href: "https://cloudflare.com/dns" },
                { label: "Security", href: "https://cloudflare.com/security" },
                { label: "Workers", href: "https://workers.cloudflare.com" }
              ]
            },
            {
              title: "Solutions",
              items: [
                { label: "E-commerce", href: "https://cloudflare.com/ecommerce" },
                { label: "Enterprise", href: "https://cloudflare.com/enterprise" },
                { label: "Gaming", href: "https://cloudflare.com/gaming" },
                { label: "SaaS", href: "https://cloudflare.com/saas" }
              ]
            },
            {
              title: "Developers",
              items: [
                { label: "Documentation", href: "https://developers.cloudflare.com" },
                { label: "API", href: "https://api.cloudflare.com" },
                { label: "Community", href: "https://community.cloudflare.com" },
                { label: "GitHub", href: "https://github.com/cloudflare" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "https://cloudflare.com/about" },
                { label: "Careers", href: "https://cloudflare.com/careers" },
                { label: "Blog", href: "https://blog.cloudflare.com" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 Cloudflare, Inc. All rights reserved."
          onPrivacyClick={() => window.open('https://cloudflare.com/privacy', '_blank')}
        />
      </div>
    </ThemeProvider>
  );
}