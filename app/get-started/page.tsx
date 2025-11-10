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
    fullName: "",
    email: "",
    jobTitle: "",
    revenue: "",
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
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        jobTitle: "",
        revenue: "",
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
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-xl"
          >
            <span>Supermake</span>
          </Link>
          {/* <div className="hidden md:flex items-center gap-8">
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
          </div> */}
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div className="lg:sticky lg:top-32">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Ready to transform your business with AI?
              </h1>
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
                  <p className="text-base sm:text-lg">AI product development</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">Workflow automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">
                    Engnieering as a service
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-base sm:text-lg">
                    Free AI trainings & workshops
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
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

                  {/* Full Name */}
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

                  {/* Work Email */}
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

                  {/* Job Title */}
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

                  {/* Annual Revenue */}
                  <div className="space-y-2">
                    <Label htmlFor="revenue">
                      Annual Revenue <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      required
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

                  {/* Needs Description */}
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

                  {/* Submit Button */}
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
      </section>

      {/* Footer */}
      {/* <footer className="border-t py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-lg mb-4"
              >
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
                  <Link
                    href="/#services"
                    className="hover:text-foreground transition-colors"
                  >
                    AI Strategy & Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Product Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Engineering as a Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-foreground transition-colors"
                  >
                    Trainings & Workshops
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Supermake. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
