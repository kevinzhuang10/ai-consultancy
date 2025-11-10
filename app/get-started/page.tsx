"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    revenue: "",
    services: "",
    heardFrom: "",
    heardFromOther: "",
    needs: "",
  });

  const [showOther, setShowOther] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "heardFrom") {
      setShowOther(value === "Other");
      if (value !== "Other") {
        setFormData((prev) => ({ ...prev, heardFromOther: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        revenue: "",
        services: "",
        heardFrom: "",
        heardFromOther: "",
        needs: "",
      });
      setShowOther(false);
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
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <span>Supermake</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#use-cases"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="/#process"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How We Work
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Ready to transform your business with AI?
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              From AI engineering squads to end-to-end AI transformation, we'll help you win the next decade.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm sm:text-base mb-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Learning enterprise AI strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Access to technical AI talent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Bespoke partnership options</span>
              </div>
            </div>
          </div>

          {/* Form */}
          {submitStatus === "success" ? (
            <div className="bg-background rounded-lg border p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
              <p className="text-muted-foreground mb-6">
                We've received your information. Our team will contact you within 1-2 business days.
              </p>
              <Button onClick={() => setSubmitStatus("idle")}>Submit another request</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-background rounded-lg border p-8 space-y-6">
              {submitStatus === "error" && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4 text-sm text-destructive">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
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
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Company Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">
                    Company Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder="Acme Inc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">
                    Job Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    placeholder="CEO"
                  />
                </div>
              </div>

              {/* Revenue and Services */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="revenue">Annual Revenue</Label>
                  <Select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                  >
                    <option value="">Select revenue range</option>
                    <option value="<$1M">&lt;$1M</option>
                    <option value="$1M-$5M">$1M-$5M</option>
                    <option value="$5M-$10M">$5M-$10M</option>
                    <option value="$10M-$50M">$10M-$50M</option>
                    <option value="$50M-$100M">$50M-$100M</option>
                    <option value=">$100M">&gt;$100M</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="services">Services Interest</Label>
                  <Select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                  >
                    <option value="">Select service</option>
                    <option value="AI Transformation">AI Transformation</option>
                    <option value="AI Engineering">AI Engineering</option>
                    <option value="Both">Both</option>
                  </Select>
                </div>
              </div>

              {/* How did you hear about us */}
              <div className="space-y-2">
                <Label htmlFor="heardFrom">How did you hear about us?</Label>
                <Select
                  id="heardFrom"
                  name="heardFrom"
                  value={formData.heardFrom}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Referral">Referral</option>
                  <option value="Newsletter">Newsletter</option>
                  <option value="Conference">Conference</option>
                  <option value="Blog">Blog</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Other">Other</option>
                </Select>
              </div>

              {/* Conditional Other field */}
              {showOther && (
                <div className="space-y-2">
                  <Label htmlFor="heardFromOther">Please specify</Label>
                  <Input
                    id="heardFromOther"
                    name="heardFromOther"
                    value={formData.heardFromOther}
                    onChange={handleInputChange}
                    placeholder="Please tell us how you heard about us"
                  />
                </div>
              )}

              {/* Needs Description */}
              <div className="space-y-2">
                <Label htmlFor="needs">
                  Tell us about your specific needs <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe your project, goals, and what you're looking to achieve with AI..."
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-4">
                <span>Supermake</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Your AI strategy + execution partner
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    AI Strategy & Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    Product Development
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    Engineering as a Service
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    Trainings & Workshops
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Supermake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
