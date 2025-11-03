import Particles from "../components/Particles";
import CardNav from "../components/CardNav";
import TextType from "../components/TextType";
import LogoLoop from "../components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiJavascript, SiExpress, SiMysql, SiMongodb, SiSupabase, SiVuedotjs, SiSpring, SiKubernetes, SiDocker, SiGitlab, SiNestjs, SiAmazon } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CardNav
        logo="SAMRIEK LEEUWIN"
        items={[
          {
            label: "Home",
            bgColor: "#111111",
            textColor: "#ffffff",
            links: [
              { label: "Home", href: "#home", ariaLabel: "Ga naar home sectie" },
              { label: "About", href: "#about", ariaLabel: "Ga naar over mij sectie" },
              { label: "Experience", href: "#experience", ariaLabel: "Ga naar ervaring sectie" },
              { label: "Skills", href: "#skills", ariaLabel: "Ga naar skills sectie" }
            ]
          },
          {
            label: "Projecten",
            bgColor: "#1a1a1a",
            textColor: "#ffffff",
            links: [
              { label: "My Projects", href: "#projects", ariaLabel: "Bekijk projecten" },
              { label: "GitHub", href: "https://github.com/samriekLeeuwin", ariaLabel: "Bekijk GitHub profiel" }
            ]
          },
          {
            label: "Contact",
            bgColor: "#222222",
            textColor: "#ffffff",
            links: [
              { label: "Email", href: "#contact", ariaLabel: "Stuur een email" },
              { label: "LinkedIn", href: "#contact", ariaLabel: "Bekijk LinkedIn profiel" },
              { label: "GitHub", href: "#contact", ariaLabel: "Bekijk GitHub profiel" }
            ]
          }
        ]}
        baseColor="#ffffff"
        menuColor="#000000"
        buttonBgColor="#333333"
        buttonTextColor="#ffffff"
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm"
      />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles
          particleColors={['#ffffff', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']}
          particleCount={300}
          particleSpread={15}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="relative z-10 text-center px-8">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
              WELCOME
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400/60 to-cyan-400 mx-auto mb-8"></div>
          </div>
          
          <TextType
            text={["SAMRIEK LEEUWIN", "Software Engineer", "3rd Year Student"]}
            typingSpeed={100}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white"
            textColors={['#ffffff', '#22D3EE', '#67E8F9']}
            loop={true}
          />
          
          <p className="text-lg md:text-xl mb-8 font-light tracking-wide text-gray-300 max-w-2xl mx-auto">
            Software Engineering Student • 3rd Year
          </p>
          
          <p className="text-base md:text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I like making complex things simpler and building stuff that actually works. 
            Right now I&apos;m learning about cloud stuff and automation — it&apos;s pretty interesting how all these services connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black hover:bg-gray-200 font-bold py-4 px-8 rounded-none transition-all duration-300 hover:scale-105">
              MY PROJECTS
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-none transition-all duration-300 hover:scale-105">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </header>

      <section id="about" className="py-20 px-8 max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">ABOUT ME</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Hi, I&apos;m Samriek Leeuwin. I&apos;m a 3rd year Software Engineering student, and I&apos;m really into tech 
            and sports. When I&apos;m not coding, you&apos;ll probably find me at the gym or doing some kind of sport. 
            But most of my free time at home I spend working on projects to become a better programmer.
          </p>
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            I did an internship at BridgeFund where I got really into system design and how complex systems 
            actually work. That experience showed me how different from school the real world can be, which 
            was both challenging and exciting. When I&apos;m not in school or at the gym, I&apos;m usually working on 
            personal projects — I find I learn best by building things and figuring out how stuff works.
          </p>
          
          <div className="bg-black/50 p-6 border border-gray-800 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">What I focus on</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I like projects where everything clicks together — when you see how the backend talks to the database, 
              or how different services connect. That&apos;s probably why I got into system design. Recently been 
              learning more about cloud stuff and automation, which has been pretty cool.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I&apos;ve used React, Vue.js, TypeScript, and Node.js at BridgeFund and in school projects. For personal projects I&apos;ve worked with Java Spring Boot to build microservices. 
              Git/GitLab I use pretty much every day, and I&apos;ve worked with Docker and CI/CD stuff too.
            </p>
          </div>

            <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-white">TECHNOLOGIES I WORK WITH</h3>
            <div className="h-16 bg-black/50 rounded-lg p-4 border border-gray-800">
              <LogoLoop
                logos={[
                  { node: <SiReact className="text-4xl text-blue-500" />, title: "React" },
                  { node: <SiVuedotjs className="text-4xl text-green-500" />, title: "Vue.js" },
                  { node: <SiNextdotjs className="text-4xl text-black" />, title: "Next.js" },
                  { node: <SiTypescript className="text-4xl text-blue-600" />, title: "TypeScript" },
                  { node: <SiJavascript className="text-4xl text-yellow-500" />, title: "JavaScript" },
                  { node: <FaJava className="text-4xl text-orange-500" />, title: "Java" },
                  { node: <SiSpring className="text-4xl text-green-600" />, title: "Spring Boot" },
                  { node: <SiNodedotjs className="text-4xl text-green-500" />, title: "Node.js" },
                  { node: <SiNestjs className="text-4xl text-red-500" />, title: "NestJS" },
                  { node: <SiExpress className="text-4xl text-gray-600" />, title: "Express" },
                  { node: <SiAmazon className="text-4xl text-orange-500" />, title: "AWS" },
                  { node: <SiKubernetes className="text-4xl text-blue-500" />, title: "Kubernetes" },
                  { node: <SiDocker className="text-4xl text-blue-400" />, title: "Docker" },
                  { node: <SiMysql className="text-4xl text-blue-600" />, title: "MySQL" },
                  { node: <SiMongodb className="text-4xl text-green-600" />, title: "MongoDB" },
                  { node: <SiSupabase className="text-4xl text-green-500" />, title: "Supabase" },
                  { node: <SiGitlab className="text-4xl text-orange-500" />, title: "GitLab" }
                ]}
                speed={80}
                direction="left"
                logoHeight={32}
                gap={40}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#000000"
                ariaLabel="Technologies I work with"
              />
            </div>
          </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src="/images/samriek-profile.jpg" 
              alt="Samriek Leeuwin"
              className="w-full max-w-md h-auto rounded-lg shadow-2xl"
              style={{
                filter: 'grayscale(100%) brightness(0.85) contrast(1.15)'
              }}
            />
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-8 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">PROFESSIONAL EXPERIENCE</h2>
          
          <div className="bg-black/60 border border-gray-800 p-8 rounded-lg mb-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Software Engineering Intern</h3>
              <p className="text-blue-400 text-lg">BridgeFund</p>
              <p className="text-gray-400">System Architecture & Cloud Development</p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                My main project was building this thing that automatically synced data from Backstage into IcePanel. 
                Before that, someone had to manually update diagrams every time something changed. I wrote TypeScript 
                scripts that pulled data from APIs, turned it into C4 diagrams, and kept everything in sync. 
                It was cool to see how different systems talk to each other, and you can actually automate stuff 
                that used to take forever.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I also got to work with AWS stuff — EC2, S3, Lambda — and learned about Kubernetes. But honestly, 
                the most interesting part was understanding how authentication actually works in real systems. 
                Like, how services authenticate with each other, IAM roles, that kind of thing. You read about it 
                in books, but seeing it work in practice is totally different.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                On the backend I worked with Node.js and NestJS — mostly building REST APIs and moving data around. 
                On the frontend I built some Vue.js components for their customer portal. Working in an Agile team 
                was good practice for explaining technical stuff to people who aren&apos;t necessarily technical.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-black/40 border border-gray-800 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-white">What I learned</h4>
              <p className="text-gray-300 leading-relaxed">
                The integration I built is actually being used by the team now, which is pretty cool. But beyond 
                the technical stuff, I learned how to work with different teams — product people, engineers, risk guys. 
                And how to explain what I&apos;m doing in a way that makes sense to them. The AWS and Kubernetes experience 
                helped me understand how cloud systems actually work when people are using them for real, not just 
                in tutorials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            SKILLS & EXPERTISE
            <span className="ml-3 text-cyan-400/60 text-3xl">→</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/60 border-l-4 border-cyan-400/60 p-7 hover:border-cyan-400/90 hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                <span className="ml-2 text-cyan-400/60">→</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I build interfaces that feel fast and smooth. React and Vue.js are my go-to, and TypeScript makes everything a bit more reliable.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800/80 text-white px-3 py-1 text-sm rounded border border-gray-700">React</span>
                <span className="bg-gray-800/80 text-white px-3 py-1 text-sm rounded border border-gray-700">Next.js</span>
                <span className="bg-gray-800/80 text-white px-3 py-1 text-sm rounded border border-gray-700">Vue.js</span>
                <span className="bg-gray-800/80 text-cyan-300 px-3 py-1 text-sm rounded border border-cyan-500/30">TypeScript</span>
                <span className="bg-gray-800/80 text-white px-3 py-1 text-sm rounded border border-gray-700">JavaScript</span>
              </div>
            </div>

            <div className="bg-black/40 border border-gray-700/50 p-5 hover:border-cyan-400/40 hover:bg-black/60 transition-all duration-300 transform hover:rotate-1" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="mb-3">
                <h3 className="text-lg font-bold text-white">Backend</h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Node.js and NestJS at work, Spring Boot for personal projects. Building REST APIs is still cool.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-gray-900/80 text-white px-2.5 py-0.5 text-xs rounded">Node.js</span>
                <span className="bg-gray-900/80 text-white px-2.5 py-0.5 text-xs rounded">NestJS</span>
                <span className="bg-gray-900/80 text-white px-2.5 py-0.5 text-xs rounded">Spring</span>
                <span className="bg-gray-900/80 text-white px-2.5 py-0.5 text-xs rounded">Java</span>
              </div>
            </div>

            <div className="bg-black/50 border-t-2 border-cyan-500/40 p-6 hover:bg-black/70 hover:border-cyan-500/70 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Databases</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                MySQL for my budget app, tried Supabase for a project — really liked how it simplified things. MongoDB mostly used in school projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded">MySQL</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded">Supabase</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded">MongoDB</span>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 p-5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-white">Version Control</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Daily Git user, mostly GitLab. Docker when I need to containerize something.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-gray-800/80 text-white px-2.5 py-0.5 text-xs rounded">Git</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-0.5 text-xs rounded">GitLab</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-0.5 text-xs rounded">Docker</span>
              </div>
            </div>

            <div className="bg-black/40 border border-gray-700/40 p-5 hover:bg-black/60 transition-all duration-200">
              <div className="mb-3">
                <h3 className="text-base font-bold text-gray-300">Tools</h3>
              </div>
              <p className="text-gray-400 mb-3 text-xs">
                VS Code, NPM, Terminal — the basics I use every day.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">VS Code</span>
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">NPM</span>
              </div>
            </div>

            <div className="lg:col-span-2 bg-gradient-to-br from-black/60 to-black/40 border-l-4 border-cyan-400/50 p-7 hover:border-cyan-400/80 hover:from-black/70 hover:to-black/50 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Cloud & DevOps</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Worked with AWS during my internship — EC2, S3, Lambda. Learned about Kubernetes. Still don&apos;t understand everything, but I see how it all fits together.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800/80 text-white px-3 py-1 text-sm rounded border border-gray-700">AWS</span>
                <span className="bg-gray-800/80 text-white px-3 py-1 text-sm rounded border border-gray-700">Kubernetes</span>
                <span className="bg-gray-800/80 text-cyan-300 px-3 py-1 text-sm rounded border border-cyan-500/30">Docker</span>
                <span className="bg-gray-800/80 text-white px-3 py-1 text-sm rounded border border-gray-700">CI/CD</span>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 p-6 hover:border-cyan-400/40 transition-all duration-300 transform hover:-rotate-1" style={{ transform: 'rotate(0.5deg)' }}>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">System Design</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Built the Backstage-IcePanel integration during my internship. C4 models and UML — enjoyed making complex systems understandable.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded">C4 Model</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded">UML</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded">IcePanel</span>
              </div>
            </div>

            <div className="bg-black/40 border border-gray-700/40 p-5 hover:bg-black/60 transition-all duration-200">
              <div className="mb-3">
                <h3 className="text-base font-bold text-gray-300">Agile</h3>
              </div>
              <p className="text-gray-400 mb-3 text-xs">
                Agile teams at internship and school. Helps me stay organized.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">Scrum</span>
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">Agile</span>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border border-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">EXPERIENCE LEVEL</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Programming Languages</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">JavaScript/TypeScript</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Java</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">HTML/CSS</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Vue.js</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Frameworks & Libraries</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">React/Next.js</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Spring Boot</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Node.js/NestJS</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">AWS & Cloud</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '50%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Kubernetes/Docker</span>
                      <span className="text-white">Beginner</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">UML & System Design</span>
                      <span className="text-white">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            MY PROJECTS
            <span className="ml-3 text-cyan-400/60 text-3xl">→</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gradient-to-br from-black/60 to-black/40 border-l-4 border-cyan-400/60 p-7 hover:border-cyan-400/90 hover:from-black/70 hover:to-black/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">BudgetLife</h3>
                <span className="bg-cyan-400/20 text-cyan-300 px-2.5 py-1 text-xs font-bold border border-cyan-400/30 rounded">TypeScript</span>
              </div>
              <p className="text-gray-300 mb-5 leading-relaxed">
                Budget app I built for myself. Supabase for the backend, MySQL for data. Learned a lot about how databases actually work — way more than in school projects. It&apos;s different when you&apos;re building something you actually use.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded border border-gray-700">TypeScript</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded border border-gray-700">React</span>
                <span className="bg-gray-800/80 text-cyan-300 px-2.5 py-1 text-xs rounded border border-cyan-500/30">Supabase</span>
                <span className="bg-gray-800/80 text-white px-2.5 py-1 text-xs rounded border border-gray-700">MySQL</span>
              </div>
              <a 
                href="https://github.com/samriekLeeuwin/BudgetLife" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 font-bold hover:underline inline-flex items-center"
              >
                GitHub <span className="ml-1">→</span>
              </a>
            </div>

            <div className="bg-black/40 border border-gray-700/50 p-5 hover:border-cyan-400/40 hover:bg-black/60 transition-all duration-300 transform hover:rotate-1" style={{ transform: 'rotate(-0.3deg)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white">StuddyBuddy</h3>
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs font-bold rounded">Java</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Study companion app for students. Planning, group sessions, progress tracking.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bg-gray-900/80 text-white px-2 py-0.5 text-xs rounded">Java</span>
                <span className="bg-gray-900/80 text-white px-2 py-0.5 text-xs rounded">Spring</span>
                <span className="bg-gray-900/80 text-white px-2 py-0.5 text-xs rounded">MySQL</span>
              </div>
              <a 
                href="https://github.com/samriekLeeuwin/StuddyBuddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 text-sm font-bold hover:underline"
              >
                GitHub →
              </a>
            </div>

            <div className="bg-black/50 border-t-2 border-cyan-500/30 p-6 hover:border-cyan-500/60 hover:bg-black/70 transition-all duration-300" style={{ transform: 'rotate(0.3deg)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Budgett-app</h3>
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs font-bold rounded">HTML</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Simple budget tracker with HTML, CSS, JavaScript. My first serious project actually.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs rounded">HTML</span>
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs rounded">CSS</span>
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs rounded">JS</span>
              </div>
              <a 
                href="https://github.com/samriekLeeuwin/budgett-app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-300 text-sm font-bold hover:underline"
              >
                GitHub →
              </a>
            </div>

            <div className="bg-black/40 border border-gray-700/40 p-5 hover:bg-black/60 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-300">Portfolio</h3>
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs font-bold rounded">HTML</span>
              </div>
              <p className="text-gray-400 mb-3 text-xs">
                Old portfolio project. First version actually.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">HTML</span>
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">CSS</span>
              </div>
              <a 
                href="https://github.com/samriekLeeuwin/Portfolio" 
            target="_blank"
            rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 text-xs font-bold hover:underline"
              >
                GitHub →
              </a>
            </div>

            <div className="bg-black/40 border border-gray-700/40 p-5 hover:bg-black/60 transition-all duration-200 transform" style={{ transform: 'rotate(-0.2deg)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-300">Skills Pages</h3>
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs font-bold rounded">Pages</span>
              </div>
              <p className="text-gray-400 mb-3 text-xs">
                GitHub Pages exercise for web development.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">Pages</span>
                <span className="bg-gray-900/80 text-gray-300 px-2 py-0.5 text-xs rounded">HTML</span>
              </div>
              <a 
                href="https://github.com/samriekLeeuwin/skills-github-pages" 
            target="_blank"
            rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 text-xs font-bold hover:underline"
          >
                GitHub →
          </a>
        </div>

            <div className="bg-black/50 border-t-2 border-cyan-500/30 p-6 hover:border-cyan-500/60 hover:bg-black/70 transition-all duration-300" style={{ transform: 'rotate(0.2deg)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Test Terminals</h3>
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs font-bold rounded">Testing</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Terminal and system admin project. Command-line tools and Linux stuff.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs rounded">Terminal</span>
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs rounded">Bash</span>
                <span className="bg-gray-800/80 text-white px-2 py-0.5 text-xs rounded">Linux</span>
              </div>
              <a 
                href="https://github.com/samriekLeeuwin/testTerminals" 
          target="_blank"
          rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-300 text-sm font-bold hover:underline"
              >
                GitHub →
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Want to see more of my work?</p>
            <a 
              href="https://github.com/samriekLeeuwin" 
          target="_blank"
          rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-black hover:bg-gray-200 font-bold py-3 px-6 rounded-none transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">🐙</span>
              VIEW ALL PROJECTS ON GITHUB
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-8 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">LET&apos;S WORK TOGETHER</h2>
          <p className="text-xl mb-12 text-gray-300">
            Interested in collaboration? Let&apos;s get in touch!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 text-white">EMAIL</h3>
              <a 
                href="mailto:semriekk@gmail.com" 
                className="text-gray-300 hover:text-white hover:underline"
              >
                semriekk@gmail.com
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 text-white">LINKEDIN</h3>
              <p className="text-gray-300">linkedin.com/in/samriekleeuwin</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 text-white">GITHUB</h3>
              <a 
                href="https://github.com/samriekLeeuwin" 
          target="_blank"
          rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:underline"
              >
                github.com/samriekLeeuwin
              </a>
            </div>
          </div>
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-12 rounded-none transition-all duration-300 hover:scale-105">
            SEND MESSAGE
          </button>
        </div>
      </section>

      <footer className="py-8 px-8 bg-transparent border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Samriek Leeuwin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}