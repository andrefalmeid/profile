"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Code2, Briefcase, GraduationCap, ExternalLink } from "lucide-react";

const profile = {
  name: "André Filipe Pereira de Almeida",
  role: "Desenvolvedor Front-End Pleno",
  contact: {
    email: "andrefelipi2@hotmail.com",
    linkedin: "https://www.linkedin.com/in/andref-almeida/",
    github: "https://github.com/andrefalmeid",
    phone: "(38) 99878-9364"
  },
  summary: "Desenvolvedor com mais de 2 anos de experiência em Next.js, React e TypeScript. Focado em entregar soluções de alto impacto, escabilidade e desempenho. Atualmente liderando front-ends complexos para clientes globais.",
  skills: [
    "Next.js", "React.js", "TypeScript", "Tailwind CSS", "Material-UI",
    "Git/GitHub", "Scrum/TDD", "UX/UI Design"
  ],
  experience: [
    {
      company: "Omega Solutions",
      role: "Desenvolvedor Front-End Pleno",
      period: "Nov 2023 - Presente",
      description: "Principal responsável pelo front-end de sistemas de comércio exterior. Atuação direta com clientes como Johnson & Johnson LATAM, utilizando Next.js e metodologias ágeis.",
    },
    {
      company: "Cube App's",
      role: "Desenvolvedor Front-End Júnior",
      period: "Início da Carreira",
      description: "Início da jornada como desenvolvedor, evoluindo rapidamente para Pleno através de contratação direta pela Omega Solutions.",
    }
  ],
  education: [
    {
      institution: "UFVJM",
      degree: "Bacharelado em Sistemas de Informação",
      period: "2016 - 2022",
      details: "TCC premiado (3º lugar) no IHC 2022 sobre Design Participativo."
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-cyan-950 font-sans">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">

        {/* HERO SECTION */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
              {profile.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
              {profile.role}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              {profile.summary}
            </p>

            <div className="flex gap-4">
              <SocialBtn icon={<Linkedin size={20} />} href={profile.contact.linkedin} label="LinkedIn" />
              <SocialBtn icon={<Mail size={20} />} href={`mailto:${profile.contact.email}`} label="Email" />
              <SocialBtn icon={<Github size={20} />} href={profile.contact.github} label="GitHub" />
              <a
                href="/curriculo.pdf" // Você colocará seu PDF na pasta public
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/50 transition-all hover:scale-105"
              >
                <FileText size={20} /> Baixar CV
              </a>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <Section title="Tech Stack" icon={<Code2 />}>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-cyan-300 hover:border-cyan-500/50 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section title="Experiência" icon={<Briefcase />}>
          <div className="space-y-12">
            {profile.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-slate-800"
              >
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <h3 className="text-xl font-semibold text-slate-100">{job.role}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-400 font-medium">{job.company}</span>
                  <span className="text-sm text-slate-500">{job.period}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section title="Formação" icon={<GraduationCap />}>
          {profile.education.map((edu, index) => (
            <div key={index} className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
              <p className="text-cyan-400">{edu.degree}</p>
              <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
              <p className="text-slate-400 mt-4 text-sm border-t border-slate-800 pt-4">
                {edu.details}
              </p>
            </div>
          ))}
        </Section>

      </main>
    </div>
  );
}

// Subcomponentes para organização
function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-cyan-400">{icon}</span>
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SocialBtn({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}