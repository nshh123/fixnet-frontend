import React from "react";
import { Wrench, ShieldCheck, Clock, ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-xl">
              <Wrench className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Fix<span className="text-blue-600">Net</span>
            </span>
            <span className="ml-2 text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
              Rwanda
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-colors">
              Log In
            </button>
            <button className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all">
              Find a Technician
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Verified & Certified Rwandan Technicians
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              On-demand technical services,{" "}
              <span className="text-blue-600">done right.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Connect with vetted local specialists for plumbing, electrical, IT networking, HVAC, and home repairs across Kigali and Rwanda.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition-all text-base">
                Book a Service Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 font-medium rounded-xl border border-slate-300 hover:bg-slate-50 transition-all text-base">
                Join as a Technician
              </button>
            </div>
          </div>

          {/* Value Badges */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Background Checked</h3>
                <p className="text-sm text-slate-500 mt-1">Every professional is ID-verified and skills-tested.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Fast Response</h3>
                <p className="text-sm text-slate-500 mt-1">Matched with available specialists in your sector within minutes.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Transparent Pricing</h3>
                <p className="text-sm text-slate-500 mt-1">Upfront quotes, clear warranties, and customer reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <Wrench className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white">
              Fix<span className="text-blue-500">Net</span>
            </span>
          </div>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} FixNet Rwanda. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
