import { useState } from "react";
import { Mail, Github, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailtoUrl = `mailto:onyangodavid5566@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setForm(INITIAL_FORM);

    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section id="contact" className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
            Let's Build Something for Kenya
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Need a custom app for your business? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <p className="text-foreground font-semibold text-lg">Message ready to send!</p>
                <p className="text-muted-foreground text-sm">
                  Your email client should have opened. If not, email David directly at{" "}
                  <a
                    href="mailto:onyangodavid5566@gmail.com"
                    className="text-primary underline"
                  >
                    onyangodavid5566@gmail.com
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    data-testid="input-subject"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-11"
                  data-testid="button-send-message"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Quick Contact Links */}
          <div className="space-y-6 pt-2">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Prefer a quick channel?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reach out directly via email, WhatsApp, or browse the GitHub to see the code.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:onyangodavid5566@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
                data-testid="link-email"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-foreground">onyangodavid5566@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/254797968578"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
                data-testid="link-whatsapp"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-sm font-semibold text-foreground">+254 797 968 578</p>
                </div>
              </a>

              <a
                href="https://github.com/davidChuPaDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
                data-testid="link-github"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">GitHub</p>
                  <p className="text-sm font-semibold text-foreground">github.com/davidChuPaDev</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
