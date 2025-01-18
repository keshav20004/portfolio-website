import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, GraduationCap, Briefcase, Award, Code, ExternalLink } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.animate-fade').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="animate-fade opacity-0 transition-all duration-1000 delay-300">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Keshav Bajpai
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              AI Engineer 
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:ikeshav62@gmail.com" 
                 className="flex items-center gap-2 text-gray-600">
                <Mail size={20} />
                ikeshav62@gmail.com
              </a>
              <a href="tel:9451363788" 
                 className="flex items-center gap-2 text-gray-600">
                <Phone size={20} />
                +91 9451363788
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/keshav-bajpai-3409322b6/" 
                 className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/keshav20004" 
                 className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="animate-fade opacity-0 transition-all duration-1000 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">B.Tech in Computer Science</h3>
            <p className="text-gray-600">SRMCEM</p>
            <p className="text-gray-500">Expected Graduation: 2026</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade opacity-0 transition-all duration-1000 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stock Market Prediction</h3>
                <p className="text-gray-600 mb-4">
                  Led the development of a machine learning model for algorithmic trading and prediction. 
                  Utilized Python libraries like Matplotlib for data visualization and managed a team of coders, 
                  debuggers, and designers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Matplotlib</span>
                </div>
              </div>
            </div>

            <div className="animate-fade opacity-0 transition-all duration-1000 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Handwriting Recognition</h3>
                <p className="text-gray-600 mb-4">
                  Implemented handwritten text detection using TensorFlow and OpenCV. Built a GUI with 
                  Tkinter for image uploads and incorporated Speller and WordSearcher for autocorrect functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Tkinter</span>
                </div>
              </div>
            </div>

            <div className="animate-fade opacity-0 transition-all duration-1000 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Generative AI Mathematical Solver</h3>
                <p className="text-gray-600 mb-4">
                  Created an advanced system to solve equations, recognize shapes, and interpret drawings using 
                  OpenCV and Google Gemini. Deployed via Streamlit for enhanced user interaction.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Google Gemini</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Streamlit</span>
                </div>
              </div>
            </div>

            <div className="animate-fade opacity-0 transition-all duration-1000 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Language Translator</h3>
                <p className="text-gray-600 mb-4">
                  Built a Flask-based web application that translates hand gestures into spoken language in 
                  real-time using advanced computer vision techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Flask</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Computer Vision</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Real-time Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Experience & Achievements</h2>
          </div>
          <div className="grid gap-8">
            <div className="animate-fade opacity-0 transition-all duration-1000 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Digital Studio Manager & AI Developer</h3>
              <p className="text-gray-600 font-semibold">NEET XCEL</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Managed digital studio setup for NEET preparation material</li>
                <li>• Developed an AI chatbot for student support</li>
              </ul>
            </div>

            <div className="animate-fade opacity-0 transition-all duration-1000 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Prompt Engineering Competition Runner-Up</h3>
              <p className="text-gray-600 font-semibold">Sugarcane AI</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Developed an advanced career counseling chatbot</li>
                <li>• Implemented sophisticated prompt engineering techniques</li>
                <li>• Created personalized career guidance solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade opacity-0 transition-all duration-1000 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Programming Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
              </ul>
            </div>
            <div className="animate-fade opacity-0 transition-all duration-1000 delay-150 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frameworks & Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Flask</li>
                <li>TensorFlow</li>
                <li>Streamlit</li>
                <li>OpenCV</li>
                <li>Hugging Face</li>
                <li>Pinecone</li>
              </ul>
            </div>
            <div className="animate-fade opacity-0 transition-all duration-1000 delay-300 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Generative AI</li>
                <li>Machine Learning</li>
                <li>Computer Vision</li>
                <li>Prompt Engineering</li>
                <li>Chatbot Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:ikeshav62@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/keshav-bajpai-3409322b6/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/keshav20004" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;