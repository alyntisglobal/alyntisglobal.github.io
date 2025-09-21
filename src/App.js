import { Helmet } from "react-helmet";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Minimal, single-file React app for Alyntis Global Technologies
// TailwindCSS is used for styling (no explicit imports here — assumed to be set up in the host project)

function Nav() {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>Alyntis Global Technologies LLC - IT Consulting & Staffing</title>
      <meta name="description" content="Alyntis Global Technologies delivers expert IT consulting, staffing, and digital transformation services globally." />
      <meta name="keywords" content="IT consulting, staffing solutions, digital transformation, cloud services, cybersecurity" />
      <meta name="author" content="Alyntis Global Technologies LLC" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Alyntis Global Technologies LLC" />
      <meta property="og:description" content="Expert IT consulting, staffing, and digital transformation services for global enterprises." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alyntisglobal.github.io/" />
      <meta property="og:image" content="https://alyntisglobal.github.io/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Alyntis Global Technologies LLC" />
      <meta name="twitter:description" content="IT consulting, staffing, and digital transformation solutions." />
      <meta name="twitter:image" content="https://alyntisglobal.github.io/og-image.png" />
    </Helmet>
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">A</div>
          <div>
            <div className="text-lg font-semibold">Alyntis Global</div>
            <div className="text-xs text-gray-500">Technologies LLC</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/industries" className="hover:text-indigo-600">Industries</Link>
          <Link to="/careers" className="hover:text-indigo-600">Careers</Link>
          <Link to="/contact" className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">Contact</Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded bg-gray-100 hover:bg-gray-200"
        aria-label="menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border">
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/industries" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>Industries</Link>
          <Link to="/careers" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>Careers</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-white text-lg font-semibold">Alyntis Global</div>
          <p className="mt-3 text-sm">Empowering Innovation. Enabling Growth.</p>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>IT Consulting</li>
            <li>Staffing & Workforce</li>
            <li>Cloud & Digital</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p className="mt-3 text-sm">Email: info@alyntisglobal.com</p>
          <p className="text-sm">Phone: +1 (555) 555-5555</p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs">© {new Date().getFullYear()} Alyntis Global Technologies LLC. All rights reserved.</div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Empowering Innovation. Enabling Growth.</h1>
            <p className="mt-6 text-lg text-slate-600">Alyntis Global Technologies delivers expert IT consulting, staffing, and digital transformation services to help enterprises scale and innovate.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded">Get Started</Link>
              <Link to="/services" className="inline-block border border-indigo-600 text-indigo-600 px-6 py-3 rounded">Explore Services</Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <div className="text-sm font-semibold">Cloud</div>
                <div className="text-xs text-gray-500 mt-1">AWS / Azure / GCP</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <div className="text-sm font-semibold">Security</div>
                <div className="text-xs text-gray-500 mt-1">Risk & Compliance</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <div className="text-sm font-semibold">Talent</div>
                <div className="text-xs text-gray-500 mt-1">Staffing & Hiring</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <div className="text-sm font-semibold">AI</div>
                <div className="text-xs text-gray-500 mt-1">ML & Automation</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Talk to an Expert</h3>
              <p className="text-sm text-gray-500 mt-2">Book a quick consultation with one of our specialists.</p>
              <form className="mt-4 space-y-3">
                <input type="text" placeholder="Full name" className="w-full border rounded px-3 py-2" />
                <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
                <input type="text" placeholder="Company" className="w-full border rounded px-3 py-2" />
                <button className="w-full bg-indigo-600 text-white py-2 rounded mt-2">Request a Call</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold">Why Alyntis?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold">Innovation-Driven Solutions</h3>
            <p className="mt-2 text-sm text-gray-600">We bring cutting-edge technology and strategy to every engagement.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold">Global Talent Pool</h3>
            <p className="mt-2 text-sm text-gray-600">Access to vetted IT professionals across cloud, dev, and data domains.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold">Trusted Partnership</h3>
            <p className="mt-2 text-sm text-gray-600">We deliver measurable outcomes with transparency and integrity.</p>
          </div>
        </div>
      </section>

    </main>
  );
}

function About() {
  return (
    <Helmet>
      <title>About Alyntis Global Technologies LLC</title>
      <meta name="description" content="Learn about Alyntis Global Technologies, your trusted IT consulting and staffing partner delivering innovation worldwide." />
    </Helmet>

    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold">About Alyntis Global Technologies</h1>
          <p className="mt-4 text-gray-600">Alyntis Global Technologies LLC is a forward-thinking IT consulting and staffing partner. We specialize in delivering innovative technology services that empower businesses to scale, transform, and thrive in a rapidly evolving digital world.</p>
          <h3 className="mt-6 font-semibold">Our Mission</h3>
          <p className="text-gray-600">To bridge the gap between technology and business by delivering reliable, future-ready solutions that drive measurable impact.</p>
          <h3 className="mt-4 font-semibold">Our Values</h3>
          <ul className="mt-2 list-disc ml-5 text-gray-600">
            <li>Innovation First</li>
            <li>Integrity Always</li>
            <li>Client Success</li>
            <li>Excellence in Delivery</li>
          </ul>
        </div>
        <div>
          <div className="bg-indigo-50 p-8 rounded">
            <h4 className="font-semibold">Leadership</h4>
            <p className="mt-2 text-gray-600">Our leadership team blends deep technical expertise with decades of consulting experience to help enterprises achieve strategic technology goals.</p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">Maya Henderson</div>
                <div className="text-sm text-gray-500">CEO & Founder</div>
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="font-semibold">Ravi Kumar</div>
                <div className="text-sm text-gray-500">Head of Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Services() {
  const services = [
    {
      title: "IT Consulting",
      desc: "Digital transformation strategy, enterprise architecture, and cloud adoption roadmaps.",
    },
    {
      title: "Staffing & Workforce",
      desc: "Contract, contract-to-hire, and full-time staffing with specialized IT talent.",
    },
    {
      title: "Managed Services",
      desc: "Application support, monitoring, and managed infrastructure services.",
    },
    {
      title: "Emerging Tech",
      desc: "AI/ML, RPA, blockchain, and cloud-native development.",
    },
  ];

  return (
    <Helmet>
      <title>About Alyntis Global Technologies LLC</title>
      <meta name="description" content="Learn about Alyntis Global Technologies, your trusted IT consulting and staffing partner delivering innovation worldwide." />
    </Helmet>
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-3 text-gray-600">We combine strategic consulting, technical excellence, and talent solutions to help businesses innovate and grow.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
            <ul className="mt-3 text-sm text-gray-500 list-disc ml-5">
              <li>Tailored assessments</li>
              <li>Roadmap and implementation</li>
              <li>Managed outcomes & SLAs</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-indigo-50 p-8 rounded flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">Ready to transform?</h3>
          <p className="text-gray-600">Schedule a consultation with our experts to discuss your next project.</p>
        </div>
        <Link to="/contact" className="bg-indigo-600 text-white px-5 py-2 rounded">Schedule a Consultation</Link>
      </div>
    </main>
  );
}

function Industries() {
  const industries = [
    { title: "Banking & Financial Services", icon: "💳", items: ["Digital Banking", "Risk & Compliance", "Data Analytics"] },
    { title: "Healthcare & Life Sciences", icon: "🏥", items: ["EHR Integration", "Telemedicine", "HIPAA Compliance"] },
    { title: "Retail & E-Commerce", icon: "🛒", items: ["Omnichannel", "Inventory Optimization"] },
    { title: "Telecom & Media", icon: "📡", items: ["Network Optimization", "5G Enablement"] },
    { title: "Energy & Utilities", icon: "⚡", items: ["Smart Grid", "IoT & Predictive Maintenance"] },
  ];

  return (
    <Helmet>
      <title>About Alyntis Global Technologies LLC</title>
      <meta name="description" content="Learn about Alyntis Global Technologies, your trusted IT consulting and staffing partner delivering innovation worldwide." />
    </Helmet>
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Industries We Serve</h1>
      <p className="mt-3 text-gray-600">We deliver tailored solutions across industries, combining domain expertise with technical excellence.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {industries.map((i) => (
          <div key={i.title} className="p-6 bg-white rounded shadow-sm">
            <div className="text-2xl">{i.icon}</div>
            <h3 className="font-semibold mt-2">{i.title}</h3>
            <ul className="text-sm text-gray-500 mt-2 list-disc ml-5">
              {i.items.map((it) => (<li key={it}>{it}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

function Careers() {
  const jobs = [
    { title: "Senior Cloud Architect", location: "Remote / USA", id: "C-101" },
    { title: "Full-Stack Developer", location: "Hybrid / India", id: "C-102" },
    { title: "Data Engineer", location: "Remote / EMEA", id: "C-103" },
  ];

  return (
    <Helmet>
      <title>About Alyntis Global Technologies LLC</title>
      <meta name="description" content="Learn about Alyntis Global Technologies, your trusted IT consulting and staffing partner delivering innovation worldwide." />
    </Helmet>
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Careers</h1>
      <p className="mt-3 text-gray-600">Join a growing team of technologists, consultants, and innovators. Explore open roles and apply today.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {jobs.map((j) => (
          <div key={j.id} className="p-6 bg-white rounded shadow-sm flex justify-between items-center">
            <div>
              <div className="font-semibold">{j.title}</div>
              <div className="text-sm text-gray-500">{j.location}</div>
            </div>
            <Link to="/contact" className="text-indigo-600">Apply</Link>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-indigo-50 p-8 rounded">
        <h3 className="font-semibold">Internships & Graduate Programs</h3>
        <p className="text-gray-600 mt-2">Structured programs to jumpstart careers with hands-on training and mentorship.</p>
        <Link to="/contact" className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded">Apply Now</Link>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <Helmet>
      <title>About Alyntis Global Technologies LLC</title>
      <meta name="description" content="Learn about Alyntis Global Technologies, your trusted IT consulting and staffing partner delivering innovation worldwide." />
    </Helmet>
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-600 mt-2">Reach out for consulting, staffing, or career inquiries.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded shadow-sm">
          <h3 className="font-semibold">Get in Touch</h3>
          <p className="text-sm text-gray-600 mt-2">Email: info@alyntisglobal.com</p>
          <p className="text-sm text-gray-600">Careers: careers@alyntisglobal.com</p>
          <p className="text-sm text-gray-600">Phone: +1 (555) 555-5555</p>
          <div className="mt-4">
            <h4 className="font-semibold">Office</h4>
            <p className="text-sm text-gray-600">[City, State, Country]</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded shadow-sm">
          <form className="space-y-4">
            <input className="w-full border rounded px-3 py-2" placeholder="Full name" />
            <input className="w-full border rounded px-3 py-2" placeholder="Email" />
            <input className="w-full border rounded px-3 py-2" placeholder="Phone" />
            <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="Message"></textarea>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function AlyntisWebsite() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
