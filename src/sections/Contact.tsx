import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Vamos Iniciar um Projeto?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforme a sua organização com as nossas soluções em tecnologia. Entre em contato para uma avaliação estratégica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard hoverEffect className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">E-mail Corporativo</h3>
              <p className="text-slate-600 mb-6 flex-1">
                Envie suas dúvidas, propostas ou solicite um orçamento detalhado.
              </p>
              <a 
                href="mailto:douggonline.lima@gmail.com" 
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-brand-600 transition-colors shadow-lg"
              >
                Enviar E-mail <ArrowRight className="w-4 h-4" />
              </a>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard hoverEffect className="p-8 h-full flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal-400/10 blur-3xl rounded-full"></div>
              <div className="w-16 h-16 rounded-2xl bg-accent-teal-100 text-accent-teal-500 flex items-center justify-center mb-6 relative z-10">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">WhatsApp / Telefone</h3>
              <p className="text-slate-600 mb-6 flex-1 relative z-10">
                Fale diretamente com um especialista para um atendimento ágil.
              </p>
              <a 
                href="https://wa.me/5591982246766?text=Ol%C3%A1%2C%20acessei%20o%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-white bg-accent-teal-500 hover:bg-accent-teal-600 transition-colors shadow-lg relative z-10"
              >
                Chamar no WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard hoverEffect className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-500 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Localização</h3>
              <p className="text-slate-600 mb-6 flex-1">
                Com suporte 100% online, prestamos atendimento a empresas em todo o Brasil.
              </p>
              <div className="w-full py-3 px-4 rounded-xl font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 mt-auto">
                Atendimento Nacional
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
