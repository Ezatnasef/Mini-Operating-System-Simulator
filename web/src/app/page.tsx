import Link from "next/link";

const modules = [
  { href: "/process",    num: 1, title: "Process & Thread Simulator",  desc: "PCB/TCB, state transitions, context switch, live table" },
  { href: "/scheduler",  num: 2, title: "CPU Scheduling Laboratory",   desc: "FCFS, SJF, RR, Priority, MLFQ with Gantt charts and comparison" },
  { href: "/sync",       num: 3, title: "Synchronization Playground",  desc: "Producer-Consumer, Readers-Writers, Dining Philosophers, Sleeping Barber" },
  { href: "/deadlock",   num: 4, title: "Deadlock Analyzer",           desc: "Resource Allocation Graph, Banker's Algorithm, safe sequence" },
  { href: "/memory",     num: 5, title: "Memory Management",           desc: "First/Best/Worst Fit, fragmentation, compaction, memory map" },
  { href: "/vmem",       num: 6, title: "Virtual Memory",              desc: "Page table, FIFO/LRU/Optimal/Clock replacement, comparison" },
  { href: "/filesystem", num: 7, title: "Mini File System",            desc: "FAT-based virtual disk, shell commands, directory tree, Block I/O Analyzer" },
];

export default function Home() {
  return (
    <div className="relative p-6 md:p-10 max-w-7xl mx-auto">
      <div className="absolute -top-14 right-10 h-60 w-60 rounded-full bg-teal-300/10 blur-3xl pointer-events-none" />
      <div className="absolute top-28 left-6 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />

      <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.28)] p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,212,191,0.08),transparent_34%,rgba(251,191,36,0.06))]" />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary ring-1 ring-primary/10">
            AI422 - Embedded & Real Time Operating Systems
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-white">
            A cleaner RTOS lab experience for simulation and teaching.
          </h1>
          <p className="mt-4 text-base md:text-lg leading-7 text-slate-300">
            An interactive laboratory for process scheduling, synchronization, deadlocks,
            memory, virtual memory, and file systems. Pick a module and inspect the OS behavior live.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
            {[
              "Process lifecycle",
              "Scheduling metrics",
              "Deadlock detection",
              "Memory allocation",
              "Virtual memory",
              "Mini filesystem",
            ].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          ["7 Modules", "Each one mirrors a core OS topic."],
          ["Live UI", "Cards, charts, logs, and interactive controls."],
          ["AI422 Focus", "Tailored for embedded and real-time systems."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10">
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm text-slate-300 leading-6">{desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {modules.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="group block p-6 rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:border-primary/30 hover:bg-white/8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl font-black text-primary font-mono w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 shrink-0 border border-primary/15 ring-1 ring-primary/10">
                {m.num}
              </span>
              <div>
                <h2 className="font-semibold text-lg text-white group-hover:text-primary transition-colors">{m.title}</h2>
                <p className="text-sm text-slate-300 mt-1 leading-6">{m.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
