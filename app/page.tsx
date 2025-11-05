"use client";
// Testing automatic Vercel deployment

import {
  Bot,
  Zap,
  Cog,
  Lightbulb,
  BarChart3,
  Shield,
  Moon,
  Sun,
  Briefcase,
  Megaphone,
  Headphones,
  Phone,
  Package,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import { BookingModal } from "@/components/booking-modal";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Bot className="h-6 w-6" />
            <span>Super Motion Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#use-cases"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#case-studies"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#process"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </a>
          </div>
          <div className="flex items-center gap-2">
            <BookingModal triggerText="Get In Touch" triggerSize="sm" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Scale your business with custom AI agents
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              We build custom AI agents that automate your most time-consuming
              workflows, <br />
              so your team can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal
                triggerText="Book a Free Consultation"
                triggerSize="lg"
                triggerClassName="text-base"
              />
              {/* <Button size="lg" variant="outline" className="text-base">
                View Case Studies
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <p className="text-center text-lg font-medium text-muted-foreground mb-8">
            Built by engineers from
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {["Y Combinator", "HeyGen", "Uber", "UC Berkeley"].map(
              (company) => (
                <div key={company} className="text-2xl font-bold">
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Solutions that drive results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built AI services that eliminate bottlenecks and
              accelerate your business
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Bot className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Custom AI Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intelligent agents that automate complex workflows, handle
                  customer interactions, and integrate seamlessly with your
                  existing systems.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Workflow Audit & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Identify system bottlenecks and implement targeted automations
                  that eliminate repetitive tasks and accelerate operations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cog className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Document Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Extract, classify, and process data from complex documents
                  automatically, handling unstructured formats with intelligent
                  parsing.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Consulting & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert guidance on AI transformation roadmaps, implementation
                  strategy, and identifying high-impact automation opportunities
                  for your business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Use Cases */}
      <section id="use-cases" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What we can build together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Example use cases to help you get started with AI
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Briefcase className="h-12 w-12 mb-3 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-2xl font-bold">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base font-medium text-muted-foreground">
                  <li>• Lead generation</li>
                  <li>• Automated outreach</li>
                  <li>• Inbound lead qualification</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Megaphone className="h-12 w-12 mb-3 text-purple-600 dark:text-purple-400" />
                <CardTitle className="text-2xl font-bold">Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base font-medium text-muted-foreground">
                  <li>• Market research</li>
                  <li>• Competitor monitoring</li>
                  <li>• Content creation pipeline</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Headphones className="h-12 w-12 mb-3 text-green-600 dark:text-green-400" />
                <CardTitle className="text-2xl font-bold">
                  Customer Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base font-medium text-muted-foreground">
                  <li>• Tier-1 support ticket automation</li>
                  <li>• Knowledge base integration</li>
                  <li>• Voice agent</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Package className="h-12 w-12 mb-3 text-orange-600 dark:text-orange-400" />
                <CardTitle className="text-2xl font-bold">Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base font-medium text-muted-foreground">
                  <li>• Document processing</li>
                  <li>• Invoice reconciliation</li>
                  <li>• Data entry automation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Phone className="h-12 w-12 mb-3 text-cyan-600 dark:text-cyan-400" />
                <CardTitle className="text-2xl font-bold">
                  Voice Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base font-medium text-muted-foreground">
                  <li>• Customer support</li>
                  <li>• Receptionist</li>
                  <li>• Screening & routing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Sparkles className="h-12 w-12 mb-3 text-primary" />
                <CardTitle className="text-2xl font-bold">
                  Custom Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base font-medium text-muted-foreground">
                  <li>• Bespoke AI agents</li>
                  <li>• Industry-specific workflows</li>
                  <li>• Custom integrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              See what's possible: ROI scenarios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              *Projected outcomes based on industry data and our technical
              capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:scale-[1.02] transition-transform relative">
              <div className="absolute top-4 right-4 text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Potential ROI Example
              </div>
              <CardHeader>
                <CardTitle>E-commerce Brand</CardTitle>
                <CardDescription className="text-base">
                  Customer Support Agent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">
                      Support team drowning in 15,000+ monthly tickets about
                      order status, returns, and product info. Average response
                      time: 6-8 hours. Customer satisfaction suffering.
                    </p>
                  </div>
                  <div className="pt-3 border-t space-y-3">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">200x</p>
                      <p className="text-sm text-muted-foreground">
                        faster response time (4hrs → 60 seconds)
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">80%</p>
                      <p className="text-sm text-muted-foreground">
                        of queries automated
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">$40k</p>
                      <p className="text-sm text-muted-foreground">
                        annual savings (57% cost reduction)
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <BookingModal
                      triggerText="Learn More"
                      triggerSize="sm"
                      triggerVariant="outline"
                      triggerClassName="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-[1.02] transition-transform relative">
              <div className="absolute top-4 right-4 text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Potential ROI Example
              </div>
              <CardHeader>
                <CardTitle>B2B Software Company</CardTitle>
                <CardDescription className="text-base">
                  Lead Generation & Sales Automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">
                      Small team trying to scale outbound. Spending 20+
                      hours/week manually prospecting, researching, and
                      personalizing outreach. But only reaching 50-75 prospects.
                    </p>
                  </div>
                  <div className="pt-3 border-t space-y-3">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">5x</p>
                      <p className="text-sm text-muted-foreground">
                        increase in outreach volume
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">3x</p>
                      <p className="text-sm text-muted-foreground">
                        more meetings booked per month
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">$250k</p>
                      <p className="text-sm text-muted-foreground">
                        in new pipeline opportunities
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <BookingModal
                      triggerText="Learn More"
                      triggerSize="sm"
                      triggerVariant="outline"
                      triggerClassName="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-[1.02] transition-transform relative">
              <div className="absolute top-4 right-4 text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Potential ROI Example
              </div>
              <CardHeader>
                <CardTitle>Healthcare Service Provider</CardTitle>
                <CardDescription className="text-base">
                  Voice AI Receptionist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">
                      Front desk overwhelmed with 500+ calls/week for
                      appointments and basic questions. Patients waiting 5-10
                      minutes on hold. After-hours calls going to voicemail.
                    </p>
                  </div>
                  <div className="pt-3 border-t space-y-3">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">24/7</p>
                      <p className="text-sm text-muted-foreground">
                        availability (vs business hours only)
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">70%</p>
                      <p className="text-sm text-muted-foreground">
                        of routine calls handled by AI
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">$45k</p>
                      <p className="text-sm text-muted-foreground">
                        annual savings in staffing costs
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <BookingModal
                      triggerText="Learn More"
                      triggerSize="sm"
                      triggerVariant="outline"
                      triggerClassName="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-[1.02] transition-transform relative">
              <div className="absolute top-4 right-4 text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Potential ROI Example
              </div>
              <CardHeader>
                <CardTitle>Financial Service Firm</CardTitle>
                <CardDescription className="text-base">
                  Intelligent Document Processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">
                      Processing 800+ invoices monthly with manual data entry.
                      Finance team spending 120+ hours/month on reconciliation
                      with 5-8% error rate.
                    </p>
                  </div>
                  <div className="pt-3 border-t space-y-3">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">90%</p>
                      <p className="text-sm text-muted-foreground">
                        reduction in processing time
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">1.2%</p>
                      <p className="text-sm text-muted-foreground">
                        error rate (down from 8%)
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-primary">$67k+</p>
                      <p className="text-sm text-muted-foreground">
                        annual savings + avoided duplicates
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <BookingModal
                      triggerText="Learn More"
                      triggerSize="sm"
                      triggerVariant="outline"
                      triggerClassName="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering results
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Audit",
                description:
                  "Analyze your business needs and identify top AI opportunities.",
              },
              {
                number: "02",
                title: "Develop",
                description:
                  "Develop custom AI solutions that align with your business objectives.",
              },
              {
                number: "03",
                title: "Optimize",
                description:
                  "Monitor results and continously optimize agent performance.",
              },
              {
                number: "04",
                title: "Scale",
                description:
                  "Uncover more system bottlenecks and deploy AI agents across your org.",
              },
            ].map((step) => (
              <Card key={step.number}>
                <CardHeader>
                  <div className="text-4xl font-bold text-primary/20 mb-2">
                    {step.number}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {/* <section id="benefits" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The 10x Agents Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why leading companies choose to work with us
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Shield className="h-12 w-12 mb-3 text-primary" />
                <CardTitle className="text-2xl font-bold">
                  World-Class Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-medium">
                  Our team has built and scaled some of the world's most popular
                  products at companies like Uber and HeyGen. We bring
                  world-class engineering to your AI automation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <Zap className="h-12 w-12 mb-3 text-primary" />
                <CardTitle className="text-2xl font-bold">
                  Move fast and iterate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-medium">
                  No months of planning and strategizing. We believe in shipping
                  fast and iterating. We aim to deploy your first agent in 2-4
                  weeks, so we can measure, optimize, and see ROI sooner.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <BarChart3 className="h-12 w-12 mb-3 text-primary" />
                <CardTitle className="text-2xl font-bold">
                  ROI Focused
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-medium">
                  We measure every automation's impact on efficiency and
                  performance. Continuous monitoring and optimization keeps us
                  accountable to delivering measurable results for your
                  business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border p-8 md:p-12 lg:p-16">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Ready to transform your business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a free consultation to discuss your automation needs{" "}
                <br />
                and see how much you can save using AI.
              </p>
              <BookingModal
                triggerText="Book Your Free Consultation"
                triggerSize="lg"
                triggerClassName="text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-semibold text-lg mb-4">
                <Bot className="h-5 w-5" />
                <span>Super Motion Lab</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of business automation with custom AI
                agents.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Custom AI Agents
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Workflow Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Document Processing
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Consulting & Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Operations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kevinzhuang10/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/kevinzhuang10"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Super Motion Lab. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
