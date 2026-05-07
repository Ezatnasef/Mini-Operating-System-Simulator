"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const modules = [
  { href: "/process", label: "Process & Thread", num: 1 },
  { href: "/scheduler", label: "CPU Scheduling", num: 2 },
  { href: "/sync", label: "Synchronization", num: 3 },
  { href: "/deadlock", label: "Deadlock Analyzer", num: 4 },
  { href: "/memory", label: "Memory Mgmt", num: 5 },
  { href: "/vmem", label: "Virtual Memory", num: 6 },
  { href: "/filesystem", label: "File System", num: 7 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 shrink-0 border-r border-white/10 bg-[linear-gradient(180deg,rgba(9,15,27,0.96),rgba(10,17,30,0.92))] backdrop-blur h-screen sticky top-0 flex flex-col shadow-[12px_0_40px_rgba(0,0,0,0.30)]">
      <Link href="/" className="block p-6 border-b border-white/10 hover:bg-white/5 transition-colors">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary ring-1 ring-primary/20">
          AI422
        </div>
        <h1 className="mt-3 text-xl font-black tracking-tight text-white">RTOS Lab</h1>
        <p className="text-xs leading-5 text-slate-400 mt-2 max-w-[17rem]">
          Embedded and Real Time Systems simulator for core OS concepts.
        </p>
      </Link>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1.5">
        {modules.map((m) => {
          const active = pathname === m.href;
          return (
            <Link
              key={m.href}
              href={m.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all border",
                active
                  ? "bg-primary text-slate-950 font-semibold border-transparent shadow-lg shadow-primary/20 translate-x-1"
                  : "text-slate-300 bg-white/3 border-white/5 hover:bg-white/7 hover:border-white/10 hover:text-white"
              )}
            >
              <span className={cn(
                "w-8 h-8 flex items-center justify-center rounded-xl text-xs font-black shrink-0",
                active ? "bg-slate-950/10" : "bg-white/8 text-slate-300"
              )}>
                {m.num}
              </span>
              <span className="flex-1">{m.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-white/10 text-xs text-slate-400">
        C++17 &amp; TypeScript
      </div>
    </aside>
  );
}
