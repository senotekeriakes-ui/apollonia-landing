"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const roles = [
  "General Dentist",
  "OHT / Hygienist",
  "Dental Student",
  "Dental Specialist",
];

export default function BetaForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      phone: data.get("phone") || null,
      role: data.get("role"),
      uses_loupes: data.get("uses_loupes") === "Yes",
      loupe_brand: data.get("loupe_brand") || null,
      magnification: data.get("magnification") || null,
      excitement: data.get("excitement") || null,
      privacy_consent: data.get("privacy_consent") === "on",
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="apply" className="bg-cream px-6 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] tracking-tight text-ink">
            APPLICATION RECEIVED
          </h2>
          <p className="mt-4 font-body text-lg text-ink/60">
            Thanks for applying. We'll be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="bg-cream px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[700px]">
        <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] tracking-tight text-ink">
          BE AMONG THE FIRST
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/60">
          We're placing units with a small group of clinicians ahead of launch.
          No cost. Your feedback builds the product.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Row: Name */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="FIRST NAME" name="first_name" required />
            <Field label="LAST NAME" name="last_name" required />
          </div>

          {/* Row: Email / Phone */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="EMAIL ADDRESS" name="email" type="email" required />
            <Field label="PHONE (OPTIONAL)" name="phone" type="tel" />
          </div>

          {/* Row: Role / Loupes */}
          <div className="grid gap-6 sm:grid-cols-2">
            <SelectField
              label="SELECT YOUR ROLE"
              name="role"
              options={roles}
              required
            />
            <SelectField
              label="DO YOU CURRENTLY USE LOUPES?"
              name="uses_loupes"
              options={["Yes", "No"]}
              required
            />
          </div>

          {/* Row: Loupe Brand / Magnification */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="LOUPE BRAND" name="loupe_brand" />
            <Field label="MAGNIFICATION" name="magnification" />
          </div>

          {/* Excitement */}
          <div>
            <label className="block font-heading text-[11px] tracking-[0.15em] text-ink/70">
              WHAT EXCITES YOU MOST ABOUT APOLLONIA? (OPTIONAL)
            </label>
            <textarea
              name="excitement"
              rows={4}
              className="mt-2 w-full border-2 border-ink bg-transparent px-4 py-3 font-body text-sm text-ink outline-none focus:border-orange"
            />
          </div>

          {/* Consent */}
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="privacy_consent"
              required
              className="mt-1 h-4 w-4 shrink-0 border-2 border-ink accent-ink"
            />
            <span className="font-body text-sm leading-relaxed text-ink/60">
              I agree to the{" "}
              <Link href="/privacy" className="underline hover:text-ink">
                Privacy Policy
              </Link>{" "}
              and consent to Apollonia Medical Technology collecting my
              information to process this beta application.
            </span>
          </label>

          {/* Error */}
          {status === "error" && (
            <p className="font-body text-sm text-red-600">{errorMsg}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="border-2 border-ink px-10 py-3.5 font-heading text-sm tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream disabled:opacity-50"
          >
            {status === "loading" ? "SUBMITTING..." : "SUBMIT APPLICATION"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-heading text-[11px] tracking-[0.15em] text-ink/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border-2 border-ink bg-transparent px-4 py-3 font-body text-sm text-ink outline-none focus:border-orange"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-heading text-[11px] tracking-[0.15em] text-ink/70">
        {label}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full appearance-none border-2 border-ink bg-transparent px-4 py-3 font-body text-sm text-ink outline-none focus:border-orange"
      >
        <option value="" disabled hidden />
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
