"use client";

export default function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col max-w-[760px] mx-auto">
      {faqs.map((faq, i) => (
        <details key={i} className="group border-t" style={{ borderColor: "var(--border)" }} open={i === 0}>
          <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[15px] font-medium text-zinc-300 hover:text-[#F4F4F5] transition-colors duration-200">
            {faq.q}
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-zinc-500 group-open:text-accent transition-colors duration-200"
              style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
            >
              <span className="text-[14px] leading-none group-open:hidden">+</span>
              <span className="text-[14px] leading-none hidden group-open:block">−</span>
            </span>
          </summary>
          <p className="pb-5 text-[14px] text-zinc-400 leading-relaxed max-w-[65ch]">{faq.a}</p>
        </details>
      ))}
      <div className="border-t" style={{ borderColor: "var(--border)" }} />
    </div>
  );
}
