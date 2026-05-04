import { Code2, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white/60 backdrop-blur-xl border-t border-white/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-teal-400 p-[2px]">
                <div className="w-full h-full bg-white/90 rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <Code2 className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-slate-800">
                Tyr Tecnology
              </span>
            </a>
            <p className="text-slate-600 max-w-sm mb-8 leading-relaxed">
              Transformando desafios em oportunidades reais de crescimento com tecnologia e inovação digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-100 hover:text-brand-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-600 hover:text-brand-600 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#about" className="text-slate-600 hover:text-brand-600 transition-colors">Quem é Douglas Lima</a></li>
              <li><a href="#portfolio" className="text-slate-600 hover:text-brand-600 transition-colors">Projetos de Destaque</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-brand-600 transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="text-slate-600">douggonline.lima@gmail.com</li>
              <li className="text-slate-600">(91) 98224-6766</li>
              <li className="text-slate-600">Atendimento Nacional</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Tyr Tecnology. Todos os direitos reservados.
          </p>
          
          {/* Assinatura NANO */}
          <div className="text-sm font-medium text-slate-500">
            <a 
              href="https://nano.net.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1"
            >
              Desenvolvido por{" "}
              <span className="font-bold tracking-wider text-brand-600 group-hover:text-brand-500 group-hover:drop-shadow-[0_0_8px_rgba(192,38,211,0.5)] group-hover:scale-105 transition-all duration-300 transform-gpu">
                NANO
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
