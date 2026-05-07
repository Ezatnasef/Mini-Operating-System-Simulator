type ModuleHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
};

export default function ModuleHeader({ eyebrow, title, description, chips }: ModuleHeaderProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,26,45,0.96),rgba(16,26,45,0.72))] backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.24)] p-6 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.08),transparent_28%)]" />
      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary ring-1 ring-primary/10">
          {eyebrow}
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-white">{title}</h1>
        <p className="mt-3 max-w-3xl text-sm md:text-base leading-7 text-slate-300">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-slate-300">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}