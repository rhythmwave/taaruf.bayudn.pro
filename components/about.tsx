import Image from "next/image";
import { SectionHeader } from "./section-header";
import { profile } from "@/data/portfolio";
import { Zap, Layers, Brain, Users, Globe, Heart } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: "Impact",
    description: "Reduced document processing latency from minutes to seconds.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Layers,
    title: "Architecture",
    description: "Event-driven microservices with strong observability and tracing.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Brain,
    title: "AI / ML",
    description: "LLM, RAG, and computer vision workloads integrated into products.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Cross-functional communication and mentoring engineering teams.",
    color: "from-green-400 to-emerald-500",
  },
];

export function AboutSection() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader
          eyebrow="About"
          title="Software engineer across backend, DevOps, and AI/ML"
          description={profile.summary}
        />
      </div>

      {/* Main content grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile card */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/60 p-6 backdrop-blur-xl transition-all hover:shadow-xl dark:border-slate-800/50 dark:bg-slate-900/60 lg:row-span-2">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl transition-all group-hover:scale-150" />
          <div className="relative flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-75 blur" />
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-slate-200 dark:border-slate-800 dark:bg-slate-700">
                <Image
                  src="/profile.png"
                  alt="Portrait of Bayu Dian Nugroho"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{profile.name}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{profile.role}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Globe className="h-3.5 w-3.5" />
              <span>{profile.location} · Remote friendly</span>
            </div>

            <div className="mt-6 w-full space-y-4 border-t border-slate-200/50 pt-6 text-left dark:border-slate-700/50">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      <Heart className="h-3 w-3" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/60 p-5 backdrop-blur-xl transition-all hover:shadow-xl dark:border-slate-800/50 dark:bg-slate-900/60"
          >
            <div
              className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-2xl transition-all group-hover:scale-150`}
            />
            <div className="relative">
              <div
                className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
              >
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Philosophy card - spans 2 cols */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white dark:from-slate-800 dark:to-slate-900 sm:p-6 lg:col-span-3">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              My Philosophy
            </p>
            <p className="text-lg font-medium leading-relaxed">
              I specialise in building reliable, observable systems across the stack: from backend APIs and data
              pipelines to Kubernetes infrastructure and real-time applications.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              My work focuses on <span className="text-primary">performance</span>,{" "}
              <span className="text-secondary">cost efficiency</span>, and{" "}
              <span className="text-accent">developer experience</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
