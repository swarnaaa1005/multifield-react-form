import React, { useState } from "react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const socialLinks = [
    { name: "GitHub", url: "http://github.com/Swarnnapadini" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/m-j-swarnnapadini-07a024234" },
  ];

  const services = [
    { title: "Web Development", desc: "Building responsive, fast and modern websites with React and Tailwind.", icon: "💻" },
    { title: "E-Commerce Development", desc: "Creating secure, scalable e-commerce platforms with rich features.", icon: "🛒" },
    { title: "Website Design", desc: "Crafting visually appealing and intuitive UI/UX experiences.", icon: "🎨" },
    { title: "Web App Development", desc: "Delivering full-stack modern web applications with seamless functionality.", icon: "🚀" },
  ];

  const projects = [
    { id: 1, title: "Payroll Management", description: "A clean and modern React application for managing payroll.", tech: ["PHP", "HTML", "CSS",'Mysql'], image: "https://www.pockethrms.com/wp-content/uploads/2025/03/what-is-payroll-management-.webp" },
    { id: 2, title: "CyberSafe Community Platform", description: "Secure and efficient platform for cyber safety advices.", tech: ["React", "Node Js", "Mysql"], image: "https://accelinfotec.com/wp-content/uploads/2024/02/cybersafe-img2.jpg" },
    { id: 3, title: "Online Wedding Planner", description: "Plan weddings online with intuitive tools and features.", tech: ["Flutter", "Firebase"], image: "https://images.stockcake.com/public/c/d/8/cd88aa58-15d4-48e4-a841-5261f6bf5b74_large/wedding-ring-exchange-stockcake.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="transition-all duration-300">
        {/* HEADER */}
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight"></h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#projects" className="hover:text-orange-500">Projects</a>
            <a href="#skills" className="hover:text-orange-500">Skills</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mt-20 mb-10 px-6">
          <p className="text-orange-500 uppercase tracking-wider mb-2 text-sm">MCA Student</p>
          <h1 className="text-6xl font-extrabold leading-tight">I'm <br /> M J Swarnnapadini</h1>
          <p className="text-gray-400 mt-4 text-lg leading-relaxed">
            I'm a MCA student passionate about building modern, accessible, high-performance digital experiences.
          </p>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.url} target="_blank" className="text-gray-300 hover:text-orange-500 text-lg transition">{s.name}</a>
            ))}
            <a href="/M J SWARNNAPADINI__CV.pdf" download className="text-black bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded font-semibold text-sm transition">Resume</a>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="max-w-7xl mx-auto px-6 mt-24 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              I am a highly motivated and detail-oriented MCA student passionate about exploring and implementing
              emerging technologies to create effective, real-world solutions. I have hands-on experience in Python programming, database design, and the fundamentals of web development. My strong analytical and problem-solving skills are reflected in my academic projects, where I have successfully applied theoretical knowledge to practical challenges. I am eager to contribute to a growth-oriented professional environment, bringing technical expertise, adaptability, and a collaborative mindset.
            </p>
          </div>

          {/* INTERESTS / SERVICES */}
          <div className="md:w-1/2 bg-[#141414] p-6 rounded-xl border border-[#222]">
            <p className="text-gray-300 mb-4 text-lg font-semibold">Interested in:</p>
            <ul className="space-y-3 text-gray-300">
              {services.map((s, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mt-24">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="bg-[#141414] border border-[#222] p-5 rounded-xl hover:border-orange-600 hover:shadow-[0_0_20px_rgba(255,120,0,0,0.15)] transition duration-300 cursor-pointer"
                onClick={() => setSelectedProject(p.id === selectedProject ? null : p.id)}>
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">{p.description}</p>

                {/* Inline project details */}
                {selectedProject === p.id && (
                  <div className="mt-4 bg-[#1a1a1a] p-4 rounded border border-[#333]">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      {p.tech.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-7xl mx-auto px-6 mt-24">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["React", "JavaScript", "Node.js", "Tailwind", "MongoDB", "Git", "Python", "Express","Flutter","Android"].map((skill) => (
              <div key={skill} className="bg-[#141414] px-4 py-3 text-center rounded-xl border border-[#222] hover:border-orange-600 hover:shadow-[0_0_20px_rgba(255,120,0,0.15)] transition duration-300">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-7xl mx-auto px-6 mt-24 pb-20">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Feel free to reach out regarding collaborations, work opportunities, or creative projects.
              </p>
              <p className="text-gray-400 text-sm"><strong>Email:</strong> swarnnpadini@example.com</p>
              <p className="text-gray-400 text-sm mt-1"><strong>Phone:</strong> +91 98765 43210</p>
            </div>
            <form className="bg-[#141414] p-6 rounded-xl border border-[#222]" onSubmit={(e) => { e.preventDefault(); alert("Form demo only."); }}>
              <input className="w-full p-3 bg-[#111] border border-[#333] rounded mb-3 text-sm focus:border-orange-600 outline-none transition" placeholder="Your Name" required />
              <input type="email" className="w-full p-3 bg-[#111] border border-[#333] rounded mb-3 text-sm focus:border-orange-600 outline-none transition" placeholder="Email" required />
              <textarea rows="4" className="w-full p-3 bg-[#111] border border-[#333] rounded mb-3 text-sm focus:border-orange-600 outline-none transition" placeholder="Message..."></textarea>
              <button className="w-full py-2 bg-orange-600 rounded hover:bg-orange-700 text-black font-semibold transition">Send</button>
            </form>
          </div>
        </section>

        <footer className="text-center py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} M J Swarnnapadini • Built with React + Tailwind
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
