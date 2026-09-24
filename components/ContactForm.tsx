"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

function Field({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const cls = `form-field${textarea ? " textarea-field" : ""}${focused ? " focused" : ""}${filled ? " filled" : ""}`;
  const common = {
    id,
    name: id,
    required: true,
    onFocus: () => setFocused(true),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      setFilled(e.target.value.trim() !== "");
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFilled(e.target.value.trim() !== ""),
  };
  return (
    <div className={cls}>
      {textarea ? <textarea rows={5} {...common} /> : <input type={type} {...common} />}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-form">
      <h2>Leave a message</h2>
      <form onSubmit={onSubmit} noValidate={false}>
        <Field id="name" label="Full Name" />
        <Field id="email" label="Email Address" type="email" />
        <Field id="message" label="Leave a message here" textarea />
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="form-status success" role="status">
            Thanks, your message has been sent. I will get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-status error" role="alert">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>
    </div>
  );
}
