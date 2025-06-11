// Felix Dinh Studio – Framer-ready Site Code with ARIA, Accessibility & Meta Enhancements

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Cookie Consent Banner Component
function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setVisible(true);
  }, []);
  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
      <p className="text-sm">This site uses cookies for analytics and improved performance. By continuing, you agree to our policies.</p>
      <button onClick={accept} className="mt-2 px-3 py-1 bg-blue-500 rounded hover:bg-blue-600">Okay</button>
    </div>
  );
}

export default function FelixDinhStudio() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('dark-mode') : null;
  if (stored) setDarkMode(stored === 'true');
}, []);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.lang = 'en';
  }, [darkMode]);

  useEffect(() => {
    if (formStatus) {
      const t = setTimeout(() => setFormStatus(''), 6000);
      return () => clearTimeout(t);
    }
  }, [formStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch('https://formspree.io/f/xpwrpgyq', {
      method: 'POST', headers: { Accept: 'application/json' }, body: data
    });
    const result = await res.json();
    if (result.ok) {
      setFormStatus('Message sent successfully.');
      e.target.reset();
    } else {
      setFormStatus('Something went wrong. Please try again.');
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } })
  };
  const lyricReveal = { hidden: { opacity: 0 }, visible: i => ({ opacity: 1, transition: { delay: i * 0.15 } }) };
  const splitWords = text => text.split(" ").map((w, i) => (
    <motion.span key={i} variants={lyricReveal} custom={i} className="inline-block mr-1">{w}</motion.span>
  ));

  return (
    <>
      <a href="#hero" className="sr-only focus:not-sr-only absolute top-0 left-0 bg-black text-white px-3 py-1 z-50">Skip to content</a>

      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <title>Felix Dinh Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="London-based piano teacher, songwriter, and musician. Intuitive lessons, original music, heartfelt craft." />
        <meta property="og:title" content="Felix Dinh Studio" />
        <meta property="og:description" content="London-based piano teacher, songwriter, and musician. Intuitive lessons, original music, heartfelt craft." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://felixdinh.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </head>

      <CookieBanner />
      <main className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen px-4 py-10 md:px-8 font-sans space-y-24 transition-colors duration-500`}>
        <style>{`html { scroll-behavior: smooth; }`}</style>

         {/* Nav Bar */}
        <nav className="fixed top-0 left-0 right-0 bg-opacity-60 bg-white dark:bg-gray-900 backdrop-blur-sm shadow-md z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
            <a href="#hero" className="font-bold text-lg">Felix Dinh Studio</a>
            <div className="space-x-4 flex items-center">
              {['hero','lessons','songs','about','contact','privacy'].map(id => (
                <a key={id} href={`#${id}`} className="hover:underline text-sm capitalize">{id}</a>
              ))}
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode" className="px-2">{darkMode ? '☀️' : '🌙'}</button>
            </div>
          </div>
        </nav>

        <section id="hero" className="pt-20"></section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeIn} custom={0.2} className="text-center">
          <h1 className="font-cursive text-4xl sm:text-5xl tracking-tight mb-6">Felix Dinh Studio</h1>
        </motion.div>

        {/* Portrait & Intro */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeIn} custom={1} className="flex flex-col items-center text-center space-y-4">
          <img src="/portrait-felixdinh.png" alt="Felix Dinh – London-based pianist, songwriter, and music teacher" className="w-28 h-28 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Felix Dinh</h1>
          <p className="text-sm sm:text-base md:text-lg italic text-gray-600">songwriter • pianist • firekeeper</p>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 italic">Feel free to reach out using the contact form below - I'd love to hear from you.</p>
        </motion.section>

        {/* Piano Lessons */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeIn} custom={2} className="bg-gray-50 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">🎹 Piano Lessons with Soul</h2>
          <p className="mb-3 text-sm sm:text-base">I teach beginners, returners, and passionate learners. Expression comes first — not dry drills. My approach is intuitive, emotionally grounded, and centred on unlocking feeling, not just reading notes.</p>
          <p className="mb-3 text-sm sm:text-base">This is a quiet return to the music I grew up with – shared with students who care. <strong>Availability is limited</strong> – but if you feel a spark, I’d love to help you begin.</p>
          <ul className="mb-4 list-disc list-inside text-xs sm:text-sm text-gray-800">
            <li>ABRSM Grade 8 Distinction (Piano + Violin), Grade 5 Theory (Merit)</li>
            <li>Learned from wonderful teachers including Susie Summers, Simon Lane, and Emma Parker — whose guidance shaped my musical foundation.</li>
            <li>Based in West London — including Chelsea and Kensington — I'm available for in-person piano lessons across the city. Most of my teaching takes place on evenings and weekends, and I'm happy to travel when possible.</li>
            <li>Open to Visiting Music Teacher roles in schools</li>
          </ul>
          <a href="#contact" className="inline-block px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-transform duration-300">Contact Me</a>
          <span className="block mt-2 text-sm text-gray-600 italic">Booking calendar coming soon</span>
        </motion.section>

        {/* Original Songs */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeIn} custom={3} className="bg-gray-50 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">🎼 Original Songs – Coming Soon</h2>
          <p className="mb-3 text-sm sm:text-base">I write and record lyrical, piano-driven songs shaped by memory, myth, and the sea. Demos are currently in the works. This space will grow as the music takes form.</p>
          <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 text-sm sm:text-base">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once:true }}>
              {splitWords("There’s a ribbon on the water, and her name is written red.")}
            </motion.span>
          </blockquote>
        </motion.section>

        {/* About */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeIn} custom={4} className="bg-gray-50 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">🧍 About</h2>
          <p className="mb-3 text-sm sm:text-base">London-based pianist, violinist, and songwriter. ABRSM Grade 8 Distinction in both piano and violin, Grade 5 Theory (Merit). Available for piano teaching, school partnerships, and select creative projects.</p>
          <p className="mb-3 text-sm sm:text-base">Alongside music, my background spans strategic and creative work across corporate and artistic domains. I care deeply about emotional craft, structured thinking, and collaborating with people who lead with intention and heart.</p>
          <div className="flex space-x-6">
            <a href="#contact" className="underline text-blue-600 hover:text-blue-800">Contact</a>
            <a href="https://www.linkedin.com/in/felixdinh" className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeIn} custom={5} className="bg-gray-50 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">📬 Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form" aria-describedby="form-status">
            <input type="text" name="name" required placeholder="Your Name" className="w-full border px-3 py-2 rounded leading-relaxed" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full border px-3 py-2 rounded leading-relaxed" />
            <div className="space-y-1">
              <label className="font-medium text-sm">Reason for Reaching Out:</label>
              <div role="radiogroup" className="space-y-1 text-sm">
                {['Piano Lessons','Collaboration','Just Saying Hi','Other'].map((reason,i) => (
                  <label key={i} className="block">
                    <input type="radio" name="reason" value={reason} className="mr-2" required />{reason}
                  </label>
                ))}
              </div>
            </div>
            <textarea name="message" required placeholder="Your message..." rows="5" className="w-full border px-3 py-2 rounded leading-relaxed"></textarea>
            <input type="text" name="_gotcha" style={{display:'none'}} />
            <div className="g-recaptcha" data-sitekey="6LdU7lorAAAAAHreRIwqe192_gOF_UNvRnhqtkrw"></div>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-transform duration-300">Send</button>
          </form>
          {formStatus && (
            <motion.div id="form-status" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className={`mt-4 p-3 rounded text-sm text-center shadow-sm ${formStatus.includes('successfully')?'bg-green-100 text-green-800':'bg-red-100 text-red-800'}`} role="status" aria-live="polite">
              {formStatus.includes('successfully')?'✅':'⚠️'} {formStatus}
            </motion.div>
          )}
        </motion.section>

        {/* Privacy Policy */}
        <section id="privacy" className="text-xs text-gray-600 max-w-3xl mx-auto pt-12 border-t">
          <h2 className="text-sm font-semibold mb-2">Privacy Policy</h2>
          <p className="mb-2">This site collects only the information you provide via the contact form – name, email, message – and uses it solely to respond. Data is not shared or sold.</p>
          <p className="mb-2">Form handling is powered by Formspree and protected by Google reCAPTCHA. Analytics via Simple Analytics.</p>
          <p className="mb-2">To request data access or deletion, contact via the form.</p>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 mt-16">
          <p>© {new Date().getFullYear()} Felix Dinh Studio · <a href="#privacy" className="underline">Privacy Policy</a></p>
          <p>Crafted with heart in London.</p>
        </footer>


        
      </main>
    </>
  );
}
