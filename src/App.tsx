import { useState } from 'react';
import { Cursor } from './components/Cursor';
import { Section } from './components/Section';
import { Terminal } from './components/Terminal';
import { InteractiveGrid } from './components/InteractiveGrid';
import { HeroPortrait } from './components/HeroPortrait';
import { Github, ArrowUpRight, Mail, Menu, X } from 'lucide-react';

const projects = [
  {
    name: 'Backlight',
    description: 'Tells you to take a break. You will ignore it. It will ask again. One of you will eventually give in, and it won\'t be backlight.',
    link: 'https://github.com/sidharthsreelal/Backlight',
  },
  {
    name: 'Codra',
    description: 'A TUI vibe-coder hooked up to local LLMs. All the AI-assisted coding, none of the subscription fees.',
    link: 'https://github.com/sidharthsreelal/codra',
  },
  {
    name: 'PassCLI',
    description: 'A command-line interface for your secrets.',
    link: 'https://github.com/sidharthsreelal/passcli',
  },
  {
    name: 'FluxSim',
    description: 'Simulation environment for complex data flows.',
    link: 'https://github.com/sidharthsreelal/fluxsim',
  },
];

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden selection:bg-olive-dark selection:text-offwhite">
      <div className="noise-overlay"></div>
      <Cursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-40 mix-blend-difference text-offwhite">
        <div className="font-serif text-2xl md:text-3xl tracking-wide italic">sidsrlal.</div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 text-sm tracking-wider uppercase font-medium">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:opacity-70 transition-opacity">{label}</a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-olive-dark/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-offwhite text-3xl font-serif italic tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <Section id="home" theme="light" className="justify-center pt-32 relative">
        {/* Interactive Grid Background */}
        <InteractiveGrid className="absolute inset-0" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-olive-dark mb-4 md:mb-6">
              sidsrlal.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text/70 max-w-2xl font-light leading-relaxed mb-8 md:mb-12">
              Software developer crafting tools for a refined, and performant digital experiences.
            </p>
            <a
              href="https://github.com/sidharthsreelal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-olive-dark px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-olive-dark hover:text-offwhite transition-colors duration-300 group text-sm md:text-base"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              <span>View GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>

          {/* Editorial Photograph — visible on all screens */}
          <HeroPortrait className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto md:ml-auto md:mr-0 aspect-square mt-8 md:mt-0" />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" theme="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-8 italic">About</h2>
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl font-light text-offwhite/80 leading-relaxed">
              <p>
                I build software with a focus on minimal design, calm interactions, and sophisticated architecture.
              </p>
              <p>
                My work spans across tooling, user interfaces, and technical systems, always striving for a balance between form and function.
              </p>
              <p>
                I believe that good software should feel handcrafted with thoughtful typography, generous spacing, and an underlying sense of intention.
              </p>
            </div>
          </div>
          {/* Terminal — visible on all screens, stacks below on mobile */}
          <div className="flex justify-center md:justify-end relative w-full items-center mt-6 md:mt-0">
            <Terminal className="w-full max-w-lg aspect-[16/9]" />
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" theme="light">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-8 md:mb-16 text-olive-dark italic">Portfolio</h2>
        <div className="flex flex-col gap-6 md:gap-8 pt-4 md:pt-8 max-w-4xl">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-l-4 border-olive-dark/20 pl-4 py-4 md:pl-6 md:py-6 hover:bg-olive-dark/5 hover:border-olive-dark transition-all duration-500 rounded-lg relative bg-grid-olive"
              data-clickable="true"
            >
              <div className="flex items-center justify-between gap-4 md:gap-6">
                <div className="space-y-1 md:space-y-2 min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-serif font-medium text-olive-dark group-hover:translate-x-3 transition-transform duration-500">
                    {project.name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-text/70 font-light group-hover:text-text transition-colors duration-500 max-w-xl truncate sm:whitespace-normal">
                    {project.description}
                  </p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-olive-dark/20 flex items-center justify-center group-hover:bg-olive-dark group-hover:text-offwhite transition-all duration-500 flex-shrink-0 group-hover:scale-110 mr-1 md:mr-2">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 opacity-50 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" theme="dark">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-8 md:mb-16 italic">Experience</h2>
        <div className="space-y-10 md:space-y-16">
          <div className="border-t border-offwhite/20 pt-6 md:pt-8 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-offwhite scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-1 md:mb-2 text-offwhite group-hover:text-white transition-colors duration-300">Freelancer</h3>
                <p className="text-offwhite/50 font-mono text-xs md:text-sm uppercase tracking-wider">Present</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium text-offwhite/90">Independent Software Developer</h4>
                <p className="text-offwhite/70 font-light text-base md:text-lg leading-relaxed group-hover:text-offwhite transition-colors duration-300">
                  Building custom software for independent clients. My work usually involves bridging the gap between reliable backend architecture and a highly polished frontend.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-offwhite/20 pt-6 md:pt-8 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-offwhite scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-1 md:mb-2 text-offwhite group-hover:text-white transition-colors duration-300">HackTVM</h3>
                <p className="text-offwhite/50 font-mono text-xs md:text-sm uppercase tracking-wider">Sep 2025 — Nov 2025</p>
                <p className="text-offwhite/40 text-xs md:text-sm mt-1">Kerala, India</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium text-offwhite/90">Founder & Lead Event Organizer</h4>
                <p className="text-offwhite/70 font-light text-base md:text-lg leading-relaxed group-hover:text-offwhite transition-colors duration-300">
                  Built HackTVM to be India's first interschool hackathon under the Hack Club network. Partnered with a global NGO to scale and create real-world opportunities for students.
                </p>
                <div className="flex flex-wrap gap-2 mt-3 md:mt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-1 md:px-3 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Event Planning</span>
                  <span className="px-2.5 py-1 md:px-3 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Presentation Skills</span>
                  <span className="px-2.5 py-1 md:px-3 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Leadership</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-offwhite/20 pt-6 md:pt-8 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-offwhite scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-1 md:mb-2 text-offwhite group-hover:text-white transition-colors duration-300">UST Global</h3>
                <p className="text-offwhite/50 font-mono text-xs md:text-sm uppercase tracking-wider">Mar 2025 — Apr 2025</p>
                <p className="text-offwhite/40 text-xs md:text-sm mt-1">Kerala, India</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium text-offwhite/90">Extern</h4>
                <p className="text-offwhite/70 font-light text-base md:text-lg leading-relaxed group-hover:text-offwhite transition-colors duration-300">
                  Participated in a comprehensive externship program to understand how a multinational technology company operates on a daily basis compared to academics.
                </p>
                <div className="flex flex-wrap gap-2 mt-3 md:mt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-1 md:px-3 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Teamwork</span>
                  <span className="px-2.5 py-1 md:px-3 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Collaborative Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* GitHub & Contact Section */}
      <Section id="contact" theme="dark" className="min-h-[70vh]">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl italic">Let's connect</h2>
            <p className="text-base sm:text-lg md:text-xl text-offwhite/70 max-w-xl mx-auto font-light px-4">
              Explore more of my open-source work on GitHub or reach out to discuss technical ideas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="https://github.com/sidharthsreelal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-offwhite text-olive-dark px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-white transition-colors duration-300 group text-sm md:text-base"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              <span>@sidharthsreelal</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sidharthsreelal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-offwhite px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-offwhite hover:bg-offwhite/10 transition-colors duration-300 text-sm md:text-base"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        <footer className="mt-16 md:mt-32 pt-6 md:pt-8 border-t border-offwhite/20 text-center text-xs md:text-sm text-offwhite/50 tracking-wider font-light">
          © {new Date().getFullYear()} SIDHARTH SREELAL. CRAFTED WITH CARE.
        </footer>
      </Section>
    </div>
  );
}

export default App;