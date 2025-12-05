import React from 'react'

const Sample = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/your-username" },
    { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
    { name: "Twitter", url: "https://twitter.com/your-handle" },
  ];

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "Short description of project one. Built with React and Tailwind.",
      github: "https://github.com/your-username/project-one",
      demo: "#",
      tags: ["React", "Tailwind", "API"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "Short description of project two. Machine learning demo.",
      github: "#",
      demo: "#",
      tags: ["Python", "ML"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-blue-50 text-slate-800">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
            LR
          </div>
          <div>
            <h1 className="text-xl font-semibold">Lekshmi R. Rajan</h1>
            <p className="text-sm text-slate-500">MCA • Full-Stack Developer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-block px-4 py-2 rounded-lg bg-purple-600 text-white text-sm shadow-md hover:opacity-95"
          >
            Download CV
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block md:hidden px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm"
          >
            Contact
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-purple-100">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Hi, I'm Lekshmi — I build delightful web apps.</h2>
            <p className="text-slate-600 mb-6">
              Full-stack developer with a passion for front-end design, performance and accessibility.
              Currently exploring AI-powered web tools and modern React patterns.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a href="#projects" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm shadow">See my work</a>
              <a href="#contact" className="px-4 py-2 rounded-lg border border-slate-200 text-sm">Get in touch</a>
            </div>

            <div className="mt-6 flex gap-3 text-sm text-slate-600">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-56 h-56 rounded-2xl bg-gradient-to-tr from-pink-300 to-purple-300 flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
              Your Photo
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-8 p-6 bg-white/60 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold mb-3">About me</h3>
          <p className="text-slate-700">
            I recently completed my MCA and build web applications using React, Node.js, and related technologies.
            I enjoy turning ideas into polished user experiences and learning new stacks.
          </p>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Experience</h4>
              <p className="text-sm text-slate-600">2+ years building web apps and UIs</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Location</h4>
              <p className="text-sm text-slate-600">Kerala, India</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Available for</h4>
              <p className="text-sm text-slate-600">Freelance, Full-time roles, Collaborations</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Selected projects</h3>
            <a href="#" className="text-sm text-slate-600 hover:underline">View all</a>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="p-4 bg-white rounded-lg shadow hover:shadow-md border border-gray-100">
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <p className="text-sm text-slate-600 mb-3">{p.description}</p>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-2 rounded border">Code</a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-2 rounded bg-indigo-600 text-white">Live</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-8 p-6 bg-white/60 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold mb-3">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['React', 'JavaScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Python', 'Git'].map((s) => (
              <div key={s} className="p-3 bg-white rounded-lg text-sm text-slate-700 shadow-sm">{s}</div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-8 p-6 bg-white/70 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold mb-3">Contact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700 mb-4">
                Want to chat about a project or opportunity?
                Send a message — I usually reply within a few days.
              </p>

              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:youremail@example.com" className="text-indigo-600 hover:underline">youremail@example.com</a></li>
                <li><strong>Phone:</strong> <span className="text-slate-600">+91 98765 43210</span></li>
              </ul>

              <div className="mt-4 flex gap-3">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.url} className="text-sm px-3 py-2 border rounded" target="_blank" rel="noopener noreferrer">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <form
              className="space-y-3 bg-white p-4 rounded-lg shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                alert('This demo form does not submit — replace with your backend or use Formspree.');
              }}
            >
              <div>
                <label className="text-sm">Name</label>
                <input required className="w-full mt-1 p-2 border rounded" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input required type="email" className="w-full mt-1 p-2 border rounded" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea required className="w-full mt-1 p-2 border rounded" rows={4} placeholder="Tell me about your project..." />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded bg-purple-600 text-white">Send message</button>
                <button
                  type="button"
                  onClick={() => { window.location.href = 'mailto:youremail@example.com'; }}
                  className="px-4 py-2 rounded border"
                >
                  Email me
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t bg-white/60 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Lekshmi R. Rajan • Built with React + Tailwind</div>
          <div className="hidden sm:block">Made with ❤️ in India</div>
        </div>
      </footer>
    </div>
  );
};

export default Sample;
