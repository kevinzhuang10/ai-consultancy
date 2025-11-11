"use client";

import { useState } from "react";
import {
  Bot,
  Moon,
  Sun,
  Target,
  GraduationCap,
  Code2,
  Zap,
  Users,
  Headphones,
  Phone,
  FileText,
  TrendingUp,
  Check,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/components/theme-provider";
import { BookingModal } from "@/components/booking-modal";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    needs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Google Sheets via API route
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitStatus("success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        needs: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2 font-semibold text-xl">
            {/* <Bot className="h-6 w-6" /> */}
            <span>Supermake</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#use-cases"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Use Cases
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="#contact">
              <Button size="sm">Get In Touch</Button>
            </Link>
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
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              We take AI from idea to production.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategize, implement, and launch. We help companies deploy AI
              solutions that work at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="text-base">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          {/* <p className="text-center text-lg font-medium text-muted-foreground mb-8">
            Built by engineers from
          </p> */}
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

      {/* What We Do */}
      <section id="services" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Services
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re your AI partner. From defining your strategy to
              deploying production-ready solutions.
            </p> */}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Card className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <CardHeader>
                <Target className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>AI Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Identify areas for AI transformation. Develop AI strategy
                  roadmap tailored to your business.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Streamline operations with AI. Scale your output without
                  scaling headcount.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <CardHeader>
                <Code2 className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrate AI features into your product. Bring new
                  capabilities that delight customers.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Engineering as a Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Top-tier engineers to augment your team and help execute your
                  product roadmap.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <CardHeader>
                <GraduationCap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Trainings & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Upskill your team on AI knowledge. Hands-on workshops that get
                  them going with AI.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Use Cases */}
      <section id="use-cases" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Example Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We support a wide array of AI applications & use cases
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Headphones className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Customer Support Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automate responses and resolve common issues 24/7 with
                  intelligent AI agents.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Sales Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automate lead qualification, follow-ups, and CRM updates to
                  let your team focus on selling.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Phone className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Voice AI Customer Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Collect information and onboard customers through natural
                  voice conversations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Bot className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Research Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered research agents that gather, analyze, and
                  synthesize information to provide actionable insights.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>High Volume Document Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Extract and analyze data from thousands of documents in
                  minutes, not days.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code2 className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Custom Software Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored solutions for your unique business needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We function as your AI partner, helping you with AI strategy and
              execution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "AI Strategy",
                description:
                  "Identity AI opportunities and develop execution roadmap.",
              },
              {
                number: "02",
                title: "Implementation",
                description:
                  "Design and build production-ready solutions alongside your team.",
              },
              {
                number: "03",
                title: "Launch",
                description:
                  "Deploy to production and validate performance at scale.",
              },
              {
                number: "04",
                title: "Iterate & Innovate",
                description:
                  "Continue evolving your AI capabilities and execute your AI roadmap.",
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

      {/* CTA Section - Version 1 (Current - Form-based) */}
      {/* <section id="contact" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to transform your business with AI?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether it's AI strategy development or hands-on implementation,
                we've got you covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">
                    AI strategy & roadmap development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">Workflow automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">AI product development</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">
                    Engineering as a service
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">
                    AI trainings & workshops
                  </p>
                </div>
              </div>
            </div>

            <div>
              {submitStatus === "success" ? (
                <div className="bg-background rounded-lg border p-8 text-center shadow-lg">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
                  <p className="text-muted-foreground mb-6">
                    We've received your information. Our team will contact you
                    within 1-2 business days.
                  </p>
                  <Button onClick={() => setSubmitStatus("idle")}>
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-background rounded-lg border p-6 shadow-lg space-y-4"
                >
                  {submitStatus === "error" && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4 text-sm text-destructive">
                      Something went wrong. Please try again or contact us
                      directly.
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Work Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="needs">
                      Tell us about your needs{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="needs"
                      name="needs"
                      value={formData.needs}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe your goals and challenges..."
                      rows={4}
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section - Version 2 (Original - BookingModal) */}
      <section id="contact" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border p-8 md:p-12 lg:p-16">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Ready to transform your business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a free consultation to discuss your needs and see how
                we can help.
              </p>
              <BookingModal
                triggerText="Book A Free Consultation"
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-semibold text-lg mb-4">
                {/* <Bot className="h-5 w-5" /> */}
                <span>Supermake</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your AI strategy + execution partner
              </p>
            </div>
            {/* <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    AI Strategy & Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Product Development
                  </a>
                </li>
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Workflow Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Engineering as a Serivce
                  </a>
                </li>
                <li>
                  <a
                    href="#use-cases"
                    className="hover:text-foreground transition-colors"
                  >
                    Trainings & Workshops
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div>
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
            </div> */}
          </div>
          <div className="pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Supermake. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
