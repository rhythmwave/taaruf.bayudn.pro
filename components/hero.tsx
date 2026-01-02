"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  Cloud,
  Brain,
  Zap,
  MapPin,
  Calendar,
} from "lucide-react";

const ROLES = [
  { text: "Software Engineer", icon: Code2 },
  { text: "Backend & Distributed Systems", icon: Zap },
  { text: "DevOps & Cloud Architecture", icon: Cloud },
  { text: "AI/ML Engineer", icon: Brain },
];

const STATS = [
  { label: "Years Experience", value: "10+", icon: Calendar },
  { label: "Location", value: "Indonesia", icon: MapPin },
];

const TECH_STACK = [
  { name: "Go", color: "from-cyan-400 to-cyan-600" },
  { name: "Python", color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Kubernetes", color: "from-indigo-400 to-indigo-600" },
  { name: "AI/ML", color: "from-purple-400 to-purple-600" },
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const currentRole = ROLES[roleIndex];
  const RoleIcon = currentRole.icon;

  return (
    <div className="relative pb-10 pt-20 sm:pb-14 sm:pt-24 lg:pb-16 lg:pt-28">
      {/* Animated background - softer, more diffuse */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute -left-1/3 -top-1/3 h-[500px] w-[500px] animate-blob rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-[100px] sm:h-[700px] sm:w-[700px]" />
        <div className="animation-delay-2000 absolute -right-1/3 top-0 h-[400px] w-[400px] animate-blob rounded-full bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent blur-[100px] sm:h-[600px] sm:w-[600px]" />
        <div className="animation-delay-4000 absolute -bottom-1/4 left-1/4 h-[350px] w-[350px] animate-blob rounded-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-[100px] sm:h-[500px] sm:w-[500px]" />
      </div>

      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Main hero content */}
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for impactful opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="whitespace-nowrap bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:via-slate-200 dark:to-slate-400 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Bayu Dian Nugroho
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex h-10 items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 px-4 py-2 backdrop-blur-sm"
              >
                <RoleIcon className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {currentRole.text}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-2xl px-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:mt-6 sm:px-0 sm:text-base lg:text-lg"
          >
            Senior backend engineer crafting{" "}
            <span className="font-medium text-slate-900 dark:text-slate-200">
              event-driven microservices
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-900 dark:text-slate-200">
              AI-powered systems
            </span>{" "}
            on Kubernetes. Obsessed with observability, performance, and shipping
            with confidence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <a
              href="/Bayu_Dian_Nugroho_CV.pdf"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-primaryDark px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download CV</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primaryDark to-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Seamless info section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto w-full max-w-4xl"
        >
          {/* Tech stack - floating pills */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:mb-8 sm:gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className={`inline-flex items-center rounded-full bg-gradient-to-r ${tech.color} px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 dark:shadow-black/20`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>

          {/* Stats row - minimal, seamless */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-6 sm:mb-8 sm:gap-10 lg:gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
                    <stat.icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center"
            >
              <div className="mb-2 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                5+
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Cloud Platforms
              </p>
            </motion.div>
          </div>

          {/* Focus areas - subtle inline list */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-400 sm:gap-4">
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Backend & APIs
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-secondary" />
              DevOps & Cloud
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-accent" />
              AI/ML Systems
            </span>
          </div>
        </motion.div>

        {/* Impact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white dark:from-slate-800 dark:to-slate-900 sm:p-6"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]" />
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl sm:h-48 sm:w-48" />
          <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-secondary/20 blur-3xl sm:h-48 sm:w-48" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm sm:h-12 sm:w-12 sm:rounded-2xl">
                <Sparkles className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold sm:text-lg">Impact-Driven Engineering</h3>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  Building reliable infrastructure, optimizing performance, and enabling teams to ship with confidence.
                </p>
              </div>
            </div>
            <div className="flex gap-6 border-t border-white/10 pt-4 sm:border-t-0 sm:pt-0">
              <div className="text-center sm:text-right">
                <p className="text-xl font-bold text-primary sm:text-2xl">5+</p>
                <p className="text-[10px] text-slate-400 sm:text-xs">Cloud Platforms</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-xl font-bold text-secondary sm:text-2xl">∞</p>
                <p className="text-[10px] text-slate-400 sm:text-xs">Curiosity</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
