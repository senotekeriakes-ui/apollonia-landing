"use client";

import { useState, type FormEvent } from "react";

export default function StayInTheLoop() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const email = new FormData(e.currentTarget).get("email");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
        <hr className="mb-16 border-cream/20" />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div>
            <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] leading-[1] tracking-tight text-orange">
              STAY IN THE LOOP
            </h2>
            <p className="mt-4 max-w-md font-body text-base leading-relaxed text-cream/70">
              Not ready to apply? Leave your email and we'll keep you posted.
              One update when we launch. Nothing else.
            </p>
          </div>

          {/* Form */}
          <div className="shrink-0">
            {status === "success" ? (
              <p className="font-body text-sm text-cream/70">
                You're on the list. We'll be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-end gap-0">
                <div className="bg-cream border-2 border-ink px-4 pt-2 pb-3">
                  <label className="block font-heading text-[10px] tracking-[0.15em] text-ink/60">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-48 bg-transparent font-body text-sm text-ink outline-none sm:w-56"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="border-2 border-ink bg-cream px-6 py-[18px] font-heading text-[11px] tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream disabled:opacity-50"
                >
                  KEEP ME POSTED
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 font-body text-xs text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
