"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      student: String(fd.get("student") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setErrorMessage(typeof data.error === "string" ? data.error : "Something went wrong.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  function sendAnother() {
    setStatus("idle");
    setErrorMessage(null);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border-border space-y-8 rounded-2xl border bg-card p-8 shadow-md md:p-10"
    >
      {status === "success" ? (
        <div className="bg-muted/70 rounded-xl p-6">
          <p className="text-foreground text-lg font-semibold">Thank you for reaching out.</p>
          <p className="text-muted-foreground mt-3 text-[15px] leading-relaxed">
            Your message has been recorded. Our admissions team will respond when they can — for urgent
            matters, phone the campus during office hours.
          </p>
          <Button type="button" variant="outline" onClick={sendAnother} className="mt-8 h-11">
            Send another message
          </Button>
        </div>
      ) : null}

      {status !== "success" ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="name">Full name</Label>
              <Input
                required
                id="name"
                name="name"
                autoComplete="name"
                disabled={status === "loading"}
                className="h-11 md:h-12"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                disabled={status === "loading"}
                className="h-11 md:h-12"
                placeholder="+92 ..."
              />
            </div>
          </div>
          <div className="space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              disabled={status === "loading"}
              className="h-11 md:h-12"
              placeholder="you@family.com"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="student">Interested grade</Label>
            <Input
              id="student"
              name="student"
              disabled={status === "loading"}
              className="h-11 md:h-12"
              placeholder="e.g., Montessori Year 3, Grade 9"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="message">Message</Label>
            <Textarea
              required
              id="message"
              name="message"
              rows={5}
              disabled={status === "loading"}
              className="min-h-[132px]"
              placeholder="Tell us how we can assist—campus tours, fee structure, readiness questions…"
            />
          </div>
          {errorMessage ? (
            <p className="text-destructive text-[14px] leading-relaxed" role="alert">
              {errorMessage}
            </p>
          ) : null}
          <Button type="submit" disabled={status === "loading"} className="h-12 rounded-lg px-10 text-[15px] font-semibold">
            {status === "loading" ? "Sending…" : "Send enquiry"}
          </Button>
          <p className="text-muted-foreground max-w-xl text-[13px] leading-relaxed">
            Submissions are added as new rows on the school’s enquiry spreadsheet so staff can follow up from
            Google Sheets (when the integration is configured on the server).
          </p>
        </>
      ) : null}
    </form>
  );
}
