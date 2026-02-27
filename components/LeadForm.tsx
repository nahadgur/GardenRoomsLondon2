"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          source: "Website",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || data?.ok === false) {
        const msg =
          data?.error ||
          data?.message ||
          "Something went wrong submitting the form. Check Vercel function logs.";
        setStatus("error");
        setErrorMessage(msg);
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(String(err?.message || err));
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={onChange}
        placeholder="Phone"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder="Message"
        rows={4}
      />

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <div style={{ padding: 10, border: "1px solid #ddd" }}>
          Thanks — we received your message.
        </div>
      )}

      {status === "error" && (
        <div style={{ padding: 10, border: "1px solid #f5c2c7" }}>
          <div style={{ fontWeight: 600 }}>Submission failed</div>
          <div style={{ whiteSpace: "pre-wrap" }}>{errorMessage}</div>
        </div>
      )}
    </form>
  );
}
