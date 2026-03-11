import { Cursor } from './components/Cursor';
import { Section } from './components/Section';
import { Terminal } from './components/Terminal';
import { InteractiveGrid } from './components/InteractiveGrid';
import { HeroPortrait } from './components/HeroPortrait';
import { Github, ArrowUpRight, Mail } from 'lucide-react';

const projects = [
  {
    name: 'Backlight',
    description: 'A tool to brighten your workflow.',
    link: 'https://github.com/sidharthsreelal/Backlight',
  },
  {
    name: 'Codra',
    description: 'A conceptual code exploration library.',
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

function App() {
  return (
    <div className="relative w-full overflow-hidden selection:bg-olive-dark selection:text-offwhite">
      <div className="noise-overlay"></div>
      <Cursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-40 mix-blend-difference text-offwhite">
        <div className="font-serif text-xl tracking-wide italic">sidsrlal.</div>
        <div className="flex gap-6 text-sm tracking-wider uppercase font-medium">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfolio</a>
          <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" theme="light" className="justify-center pt-32 relative">
        {/* Interactive Grid Background */}
        <InteractiveGrid className="absolute inset-0" />

        <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-olive-dark mb-6">
              sidsrlal.
            </h1>
            <p className="text-xl md:text-2xl text-text/70 max-w-2xl font-light leading-relaxed mb-12">
              Software developer crafting tools for a refined, and performant digital experiences.
            </p>
            <a
              href="https://github.com/sidharthsreelal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-olive-dark px-6 py-3 rounded-full hover:bg-olive-dark hover:text-offwhite transition-colors duration-300 group"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>

          {/* Editorial Photograph */}
          <HeroPortrait className="hidden md:block w-full max-w-sm ml-auto aspect-square" />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" theme="dark">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 italic">About</h2>
            <div className="space-y-6 text-lg md:text-xl font-light text-offwhite/80 leading-relaxed">
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
          <div className="hidden md:flex justify-end relative w-full items-center">
            <Terminal className="w-full max-w-lg aspect-[16/9]" />
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" theme="light">
        <h2 className="font-serif text-4xl md:text-6xl mb-16 text-olive-dark italic">Portfolio</h2>
        <div className="flex flex-col gap-8 pt-8 max-w-4xl">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-l-4 border-olive-dark/20 pl-6 py-6 hover:bg-olive-dark/5 hover:border-olive-dark transition-all duration-500 rounded-lg relative bg-grid-olive"
              data-clickable="true"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-4xl font-serif font-medium text-olive-dark group-hover:translate-x-3 transition-transform duration-500">
                    {project.name}
                  </h3>
                  <p className="text-lg text-text/70 font-light group-hover:text-text transition-colors duration-500 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-olive-dark/20 flex items-center justify-center group-hover:bg-olive-dark group-hover:text-offwhite transition-all duration-500 flex-shrink-0 group-hover:scale-110 mr-2">
                  <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" theme="dark">
        <h2 className="font-serif text-4xl md:text-6xl mb-16 italic">Experience</h2>
        <div className="space-y-16">
          <div className="border-t border-offwhite/20 pt-8 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-offwhite scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <h3 className="text-2xl font-serif mb-2 text-offwhite group-hover:text-white transition-colors duration-300">Freelancer</h3>
                <p className="text-offwhite/50 font-mono text-sm uppercase tracking-wider">Present</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-offwhite/90">Independent Software Developer</h4>
                <p className="text-offwhite/70 font-light text-lg leading-relaxed group-hover:text-offwhite transition-colors duration-300">
                  Building custom software for independent clients. My work usually involves bridging the gap between reliable backend architecture and a highly polished frontend.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-offwhite/20 pt-8 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-offwhite scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <h3 className="text-2xl font-serif mb-2 text-offwhite group-hover:text-white transition-colors duration-300">HackTVM</h3>
                <p className="text-offwhite/50 font-mono text-sm uppercase tracking-wider">Sep 2025 — Nov 2025</p>
                <p className="text-offwhite/40 text-sm mt-1">Kerala, India</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-offwhite/90">Founder & Lead Event Organizer</h4>
                <p className="text-offwhite/70 font-light text-lg leading-relaxed group-hover:text-offwhite transition-colors duration-300">
                  Built HackTVM to be India's first interschool hackathon under the Hack Club network. Partnered with a global NGO to scale and create real-world opportunities for students.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Event Planning</span>
                  <span className="px-3 py-1 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Presentation Skills</span>
                  <span className="px-3 py-1 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Leadership</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-offwhite/20 pt-8 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-offwhite scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <h3 className="text-2xl font-serif mb-2 text-offwhite group-hover:text-white transition-colors duration-300">UST Global</h3>
                <p className="text-offwhite/50 font-mono text-sm uppercase tracking-wider">Mar 2025 — Apr 2025</p>
                <p className="text-offwhite/40 text-sm mt-1">Kerala, India</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-offwhite/90">Extern</h4>
                <p className="text-offwhite/70 font-light text-lg leading-relaxed group-hover:text-offwhite transition-colors duration-300">
                  Participated in a comprehensive externship program to understand how a multinational technology company operates on a daily basis compared to academics.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Teamwork</span>
                  <span className="px-3 py-1 rounded-full border border-offwhite/20 text-xs text-offwhite/80">Collaborative Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* GitHub & Contact Section */}
      <Section id="contact" theme="dark" className="min-h-[70vh]">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-7xl italic">Let's connect</h2>
            <p className="text-xl text-offwhite/70 max-w-xl mx-auto font-light">
              Explore more of my open-source work on GitHub or reach out to discuss technical ideas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://github.com/sidharthsreelal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-offwhite text-olive-dark px-8 py-4 rounded-full font-medium hover:bg-white transition-colors duration-300 group"
            >
              <Github className="w-5 h-5" />
              <span>@sidharthsreelal</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            <a
              href="mailto:sidharthsreelal@gmail.com"
              className="inline-flex items-center gap-3 border border-offwhite px-8 py-4 rounded-full font-medium text-offwhite hover:bg-offwhite/10 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-offwhite/20 text-center text-sm text-offwhite/50 tracking-wider font-light">
          © {new Date().getFullYear()} SIDHARTH SREELAL. CRAFTED WITH CARE.
        </footer>
      </Section>
    </div>
  );
}

export default App;