import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-brand-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Tyr Tecnology</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Especialistas em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-teal-500">
              Inovação Digital
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
            Soluções estratégicas para empresas e instituições públicas. Transformamos desafios em oportunidades reais de crescimento com tecnologia de ponta.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition-all shadow-[0_8px_30px_rgb(192,38,211,0.3)] hover:shadow-[0_8px_30px_rgb(192,38,211,0.5)]"
            >
              Nossas Soluções
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-slate-800 font-medium hover:bg-white/80 transition-all"
            >
              Falar com Especialista
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 z-20"
          >
            <GlassCard className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-brand-600">🏆</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Portais Premiados</p>
                <p className="text-xs text-slate-500">Destaque nacional</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 z-20"
          >
            <GlassCard className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal-100 flex items-center justify-center shrink-0">
                 <span className="text-xl">📈</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">+ Conversões</p>
                <p className="text-xs text-slate-500">Google Empresas</p>
              </div>
            </GlassCard>
          </motion.div>

          <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-tr from-brand-200/50 to-accent-teal-100/50 backdrop-blur-xl border border-white/40 shadow-2xl p-8 flex items-center justify-center">
            {/* Abstract visual representation */}
            <div className="w-full h-full relative rounded-2xl overflow-hidden glass-reflection">
              <img 
                src="/foto-douglas-tyr.jpg" 
                alt="Douglas Damasceno de Lima - Tyr Tecnology" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
