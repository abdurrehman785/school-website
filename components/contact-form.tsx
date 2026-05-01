"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="border-border space-y-8 rounded-2xl border bg-card p-8 shadow-md md:p-10">
      {sent ? (
        <div className="bg-muted/70 rounded-xl p-6">
          <p className="text-foreground text-lg font-semibold">Thank you for reaching out.</p>
          <p className="text-muted-foreground mt-3 text-[15px] leading-relaxed">
            Our admissions team will respond shortly. For urgent matters, phone the campus during
            office hours — we prioritise enrolment counselling for families transitioning into G-12.
          </p>
        </div>
      ) : null}
      {!sent ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="name">Full name</Label>
              <Input required id="name" name="name" autoComplete="name" className="h-11 md:h-12" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
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
              className="h-11 md:h-12"
              placeholder="you@family.com"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="student">Interested grade</Label>
            <Input
              id="student"
              name="student"
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
              className="min-h-[132px]"
              placeholder="Tell us how we can assist—campus tours, fee structure, readiness questions…"
            />
          </div>
          <Button type="submit" className="h-12 rounded-lg px-10 text-[15px] font-semibold">
            Send enquiry
          </Button>
          <p className="text-muted-foreground max-w-xl text-[13px] leading-relaxed">
            This demonstration form does not transmit data externally. Connected production sites can
            post to admissions APIs or integrations.
          </p>
        </>
      ) : (
        <Button type="button" variant="outline" onClick={() => setSent(false)} className="h-11">
          Send another message
        </Button>
      )}
    </form>
  );
}
