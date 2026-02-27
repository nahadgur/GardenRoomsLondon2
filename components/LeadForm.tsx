"use client";

import { useState } from "react";

type LeadFormProps = {
  sourcePage?: string;
  defaultService?: string;
  isInline?: boolean;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const SERVICE_OPTIONS = [
  { value: "",                          label: "Select a service…" },
  { value: "garden-office-installation", label: "Garden Office Installation" },
  { value: "soundproof-music-studios",   label: "Soundproof Music Studios" },
  { value: "garden-gyms",               label: "Garden Gyms" },
  { value: "bespoke-garden-rooms",      label: "Bespoke Garden Rooms" },
  { value: "garden-annexes",            label: "Garden Annexes" },
  { value: "garden-art-studios",        label: "Garden Art Studios" },
];

export function LeadForm({ sourcePage, defaultService, isInline }: LeadFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
          service: form.service,
          source: sourcePage || "Website",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || data?.ok === false) {
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: defaultService || "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(String(err?.message || err));
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Your name"
        required
        className={inputClass}
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email address"
        type="email"
        required
        className={inputClass}
      />
      <input
        name="phone"
        value={form.phone}
        onChange={onChange}
        placeholder="Phone number"
        className={inputClass}
      />

      {/* Service dropdown — hidden if a defaultService is pre-selected from the page */}
      {!defaultService && (
        <select
          name="service"
          value={form.service}
          onChange={onChange}
          className={inputClass + " appearance-none cursor-pointer"}
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder="Tell us about your project (optional)"
        rows={3}
        className={inputClass + " resize-none"}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm mt-1"
      >
        {status === "submitting" ? "Sending…" : "Get Free Quotes"}
      </button>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 text-sm rounded-xl px-4 py-3">
          ✓ Thanks — we'll be in touch shortly.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 text-sm rounded-xl px-4 py-3">
          <div className="font-semibold mb-0.5">Submission failed</div>
          <div className="whitespace-pre-wrap text-xs">{errorMessage}</div>
        </div>
      )}
    </form>
  );
}

export default LeadForm;
