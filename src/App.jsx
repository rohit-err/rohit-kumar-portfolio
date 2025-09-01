import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Link as LinkIcon,
  Code2,
  Layout,
  Database,
  Wrench,
  Download,
} from "lucide-react";

export default function App() {
  const skills = useMemo(
    () => [
      {
        title: "Frontend",
        icon: <Layout className="h-5 w-5" />,
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "TailwindCSS", "Zustand", "Responsive UI", "Reusable Components"],
      },
      {
        title: "Backend",
        icon: <Code2 className="h-5 w-5" />,
        items: ["Node.js", "Express.js", "REST APIs", "JWT", "Email Verification", "Password Reset", "Razorpay Integration", "Cloudinary"],
      },
      {
        title: "Databases",
        icon: <Database className="h-5 w-5" />,
        items: ["MongoDB (Mongoose)", "Schema Design", "SQL (100+ problems)"],
      },
      {
        title: "DevOps & Tools",
        icon: <Wrench className="h-5 w-5" />,
        items: ["Vercel", "Render", "Git & GitHub", "Mailtrap", "MS Excel"],
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        name: "ChatX — Realtime Chat App",
        tags: ["MERN", "Socket.io", "JWT", "Zustand", "DaisyUI"],
        live: "https://chatx-chat-app-beta.vercel.app/",
        code: "https://github.com/rohit-err/chatx-chat-app",
        desc: "Realtime chat with auth, online status, and polished UI.",
      },
      {
        name: "ClosetX — Ecommerce (Second-hand)",
        tags: ["MERN", "Razorpay", "Cloudinary", "Admin"],
        live: "https://closetx-frontend.vercel.app/",
        code: "https://github.com/rohit-err/closetx-ecommerce-app",
        desc: "Marketplace for pre-loved fashion with payments and media storage.",
      },
      {
        name: "Advanced MERN Auth System",
        tags: ["MERN", "Email Verification", "Password Recovery"],
        code: "https://github.com/rohit-err/mern-auth-app",
        desc: "Auth with email verification, reset password, and protected routes.",
      },
      {
        name: "PassHUB — Password Manager",
        tags: ["React", "TailwindCSS", "Local Storage"],
        live: "https://pass-hub.netlify.app/",
        code: "https://github.com/rohit-err/PassHUB-PasswordManager",
        desc: "Offline-first credential manager with persistent storage.",
      },
      {
        name: "Bajatey Raho — Music Streaming",
        tags: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/rohit-err/bajatey-raho-music-player",
        desc: "Lightweight music player with responsive layout.",
      },
    ],
    []
  );

  const socials = [
    { href: "mailto:rohit2004r82@gmail.com", label: "Email", icon: Mail },
    { href: "https://github.com/rohit-err", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/rohit-kumar-653b022a7", label: "LinkedIn", icon: Linkedin },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-100 relative">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      </div>


      <header className="sticky top-0 z-40 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">Rohit Kumar</a>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {["Home", "Skills", "Projects", "About", "Contact"].map((label) => (
              <li key={label}><a href={`#${label.toLowerCase()}`} className="text-gray-300 hover:text-white transition">{label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10 transition">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>
      </header>


      <section id="home" className="mx-auto max-w-6xl px-4 pt-16 pb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-sm font-medium tracking-wide text-purple-400">Full-Stack Developer</p>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-white">Hi, I’m Rohit — I build clean, scalable web apps with the MERN stack.</h1>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-sm hover:scale-105 transition"><ExternalLink className="h-4 w-4" /> View Projects</a>
              <a href="/Rohit_Kumar_Resume.pdf" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"><Download className="h-4 w-4" /> Download Resume</a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>


      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-3 text-purple-300">{group.icon}<h3 className="font-medium text-white">{group.title}</h3></div>
              <ul className="space-y-1 text-sm text-gray-300">{group.items.map((item) => (<li key={item} className="flex items-start gap-2"><LinkIcon className="h-3.5 w-3.5 mt-1 flex-none text-purple-400" />{item}</li>))}</ul>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 shadow-sm hover:shadow-lg transition h-full flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-white">{p.name}</h3>
                <div className="flex gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-xl border border-white/20 px-2 py-1 text-xs hover:bg-white/10 transition"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-blue-400" />
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-xl border border-white/20 px-2 py-1 text-xs hover:bg-white/10 transition"
                      title="Source Code"
                    >
                      <Github className="h-3.5 w-3.5 text-gray-300" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-300 flex-grow">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>

          ))}
        </div>
      </section>


      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">About</h2>
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-sm">
          <p className="text-gray-300 leading-relaxed">I’m a BCA graduate from Sarala Birla University who enjoys building practical, production-ready web apps with the MERN stack. Experienced in auth, real-time features, Razorpay integration, and deploying apps to Vercel/Render.</p>
        </div>
      </section>


      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Contact</h2>
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const subject = encodeURIComponent("Portfolio Inquiry — Rohit Kumar");
            const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
            window.location.href = `mailto:rohit2004r82@gmail.com?subject=${subject}&body=${body}`;
          }}>
            <input name="name" required placeholder="Your Name" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400" />
            <input name="email" type="email" required placeholder="Your Email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400" />
            <textarea name="message" placeholder="Message" className="md:col-span-2 min-h-[120px] rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400" />
            <div className="md:col-span-2">
              <button type="submit" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-sm hover:scale-105 transition"><Mail className="h-4 w-4" /> Send Message</button>
            </div>
          </form>
        </div>
      </section>


      <footer className="border-t border-white/10 py-8 text-sm">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© {new Date().getFullYear()} Rohit Kumar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-gray-400 hover:text-white">
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
