import Header from './components/Header'
import About_Me from './components/About_Me'
import Technical_skills from './components/Technical_skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import Reviews from './components/Review'
import ContactModal from './components/ContactModal'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
        <Header />
        <main className="p-6 md:p-8 space-y-8">
          <About_Me />
          <Technical_skills />
          <Projects />
          <Education />
          <Reviews />
          <Footer />
        </main>
      </div>
      <ContactModal />
    </div>
  );
}

export default App;