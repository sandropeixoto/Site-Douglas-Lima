<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />
  
  # NANO
  
  ### TECNOLOGIA SOB MEDIDA
</div>

---

## 🎯 Visão Geral

O portfólio institucional da **Tyr Tecnology** é uma Single Page Application (SPA) responsiva e de alta performance desenhada para o especialista em tecnologia e inovação digital Douglas Lima. O projeto centraliza as verticais de serviço da empresa (Portais da Transparência, Marketing Digital, Desenvolvimento de Software e Google Empresas), atuando como uma plataforma de presença digital e conversão. O foco principal da arquitetura do projeto é a entrega de uma experiência de usuário premium, através de interfaces responsivas fluidas que comunicam credibilidade técnica.

---

## ✨ Funcionalidades Principais

> **Design System Premium (Glassmorphism)**
> Interface moderna construída sobre o conceito de vidro fosco interativo (backdrop-blur), texturas de fundo em mesh gradients e sombras orgânicas, reforçando o branding de alto valor tecnológico da corporação.

> **Landing Page Altamente Conversiva**
> Estrutura baseada em narrativa de engajamento segmentada estrategicamente: Hero destacada, Grade de Serviços, Perfil de Confiança, Showcase de Projetos de Destaque e Central de Contato.

> **Motion Design e Micro-interações**
> Animações projetadas para on-scroll reveal (revelação durante rolagem da página) e layout transitions utilizando física de layout sofisticada para guiar progressivamente a atenção do usuário.

> **Formulário Dinâmico e Contact Center**
> Gestão de contatos com validações rigorosas nativas focadas em Client-Side e rotas instantâneas (deep links) dedicadas de integração com E-mail corporativo e WhatsApp comercial.

---

## 🛠️ Stack Técnica

A infraestrutura utiliza o que há de mais moderno dentro do ecosistema JavaScript para web:

| Categoria | Tecnologia |
|---|---|
| **Frontend Foundation** | React 19, TypeScript 5 |
| **Bundler & Tooling** | Vite, ESBuild |
| **Estilização & UI Architecture** | Tailwind CSS v4, Lucide React (Sistema de Tipografia de Ícones) |
| **Engine de Animação** | Framer Motion (`motion/react`) |
| **Gestor de Estado de Formulários** | React Hook Form |
| **Utilitários Estruturais Globais** | clsx, tailwind-merge |
| **Cloud Target & CI/CD** | GitHub Pages, GitHub Actions (YAML Workflows) |

---

## 🏗️ Arquitetura do Projeto

A arquitetura orienta-se à componetização escalável, seguindo padrões modulares de forte coesão e baixo acoplamento:

- **Root Compositon (`App.tsx`):** A malha unificada que integra todos os cenários sem fragmentação em sub-rotas pesadas, priorizando a indexação limpa (SPA Behavior).
- **Seções Dimensionais (`src/sections/`):** Estruturas que modelam domínios ou contextos separados de negócio, garantindo que "Serviços", ou "Contato", mantenham seu estado isolado, propiciando manutenibilidade livre de "side-effects".
- **Design Atômico (`src/components/ui/`):** Base da construção do design interface contendo microestruturas (ex: `GlassCard.tsx`) utilizadas amplamente por toda a aplicação. Reúnem responsabilidades restritas de aparência padrão, com propriedades controláveis.

---

## 🚀 Instalação e Execução

### Pré-requisitos
- **Node.js**: Versão 20+ recomendada.
- **Gerenciador de Pacotes**: NPM nativo está configurado e alinhado no sistema.

### Ambientes de Desenvolvimento Local

```bash
# 1. Obtenha o repositório em sua máquina física
git clone URL_DO_SEU_REPOSITORIO.git

# 2. Acesse o diretório do projeto clonado
cd nome-do-repositorio

# 3. Instale a árvore de dependências do Node Modules
npm install

# 4. Inicie o Server de testes local em Hot-Module Replacement
npm run dev
```

### Criando Manuais do Build de Produção
```bash
# Executa primeiro o verificador estático do TypeScript e após sucesso segue com empacotamento completo de artefatos
npm run lint && npm run build
```

---

## 📜 Scripts Disponíveis

Base mapeada no `package.json` para facilitar orquestração e fluxos via linha de comando:

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor local otimizado via Vite para inspeção local sob demand. |
| `npm run build` | Faz transpilagem do pacote TS/React e gera os artefatos puros para o diretório de destino `/dist`. |
| `npm run preview` | Simula a versão do ambiente "Build" internamente por servidor web estático do vite local. |
| `npm run lint` | Validador sintático completo pelo compilador do typescript (apontando detecções via `--noEmit`). |
| `npm run clean` | Expurgos de artefatos e temporários visando manter diretivas atualizadas com zero-cache. |
| `npm run deploy` | Execução base por script de fallback via lib gh-pages atuando num runtime CLI direto. |

---

## 📁 Estrutura de Pastas

```text
├── .github/          # Regras e Pipelines para CI/CD (GitHub Actions env)
├── public/           # Diretório estático raiz para index e media brute (assets originais)
├── src/
│   ├── components/   # Blocos granulares da web com UI elements e layout patterns
│   │   └── ui/       # Componentes reusáveis isolados, padronizados de style global (GlassCard)
│   ├── lib/          # Handlers e utils customizados base estrutural lógica (ex: utils.ts para tailwind)
│   ├── sections/     # Modelos de grande agrupamento vertical, construindo o grid raiz da aplicação
│   ├── App.tsx       # Componente Mestre integrador arquitetural
│   ├── main.tsx      # Configuração injetora central e wrapper root do React na sintaxe da web DOM
│   └── index.css     # Definições raiz do Tailwind `@theme` configuration para variância customizada
├── .env.example      # Dicionário da topologia das variáveis de ambientações do sistema
├── package.json      # Mapping estrutural de bibliotecas npm e gerência global de scripts
├── tsconfig.json     # Configurações de verificação e checagem forte e estrita da tipagem typescript
└── vite.config.ts    # Propriedades de setup do builder nativo, definição de rotas e alias resolvents
```

---

## 🌐 Deploy

A estratégia central de Continuous Deployment/Continuous Integration (CI/CD) foi montada dentro da infraestrutura do provedor **GitHub Pages governado por GitHub Actions**.
Fluxo reativo após commits diretos em `main`:
1. Uma Virtual Machine Ubuntu é comissionada on-demand no cloud provider.
2. Checkout automatizado via branch e Setup de Node Engine 20 efetuado.
3. Steps mandatórios validam o linter da aplicação: (`npm run lint`), bloqueando subidas de inconsistências estruturais no Typescript.
4. Concluída aprovação, realiza-se o processo `npm run build` com artefatos injetados nativos e sem runtime (Static Deployment).
5. Empacotamento de artefatos repassado e alocado ao host com URLs seguras e TLS via Pages artifact upload.

---

## 🛡️ Considerações Técnicas

- **Modularização & Separação de Preocupações:** O projeto adere severamente às boas práticas (DRY e SOLID componentizational). Elementos sem regras negociais ficam em UI, mantendo regras focais de view controller internamente dispostas nas `Sections`. Modificações futuras tornam-se previsíveis e controláveis.
- **Escalabilidade & Integridade:** A inserção estrita de TypeScript v5 atua com o `skipLibCheck` e monitoramento direto do linter garantindo tolerância zero a falhas em compilação na pipeline.
- **Segurança de Execução:** Ao operar por Single Page Application, arquitetada com pacotes buildados estaticamente, as superfícies críticas de servidor foram eliminadas. Não há endpoint de execução maliciosa direta a expor vulnerabilidades de Backend, SQLInjection e interações a endpoints abertos mitigam as falhas padrão da Open Web Application Security Project (OWASP).
- **Performance e FCP/LCP:** A ferramenta Vite garante resoluções HMR milissegundos e outputs "Tree-shaken", ou seja, fragmentos em desuso não entram no arquivo final de produção minimizando impacto dramático nas taxas Time to Interactive e gerando escores de auditoria Lighthouse avançados.

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br
