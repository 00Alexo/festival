import { useState, useEffect } from 'react';
import { FaHome, FaFacebookF, FaChevronDown, FaInstagram, FaYoutube } from 'react-icons/fa';
import festivalPoster from '../assets/poster.png';

const HomePage = () => {
  return (
    <div>
      {/* Main content */}
      <main className="flex-grow container mx-auto pb-16 pt-16 px-4">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-orange-600 mb-6 font-serif">
            Clubul de Teatru "Ioana Cîcu"
          </h1>
          <p className="text-xl md:text-2xl text-amber-900 max-w-3xl mx-auto">
            O experiență culturală unică în inima artelor performative
          </p>
        </section>

        {/* Current Event Poster Section */}
        <section className="my-24 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={festivalPoster} 
                alt="Festival Interjudețean de Teatru pentru Elevi" 
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg transform rotate-3">
                <span className="font-bold">Ediția 2025</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 font-serif">
              Festivalul Interjudețean de Teatru pentru Elevi "Ioana Cîcu"
            </h2>
            <div className="space-y-5 text-amber-900">
              <p className="text-xl">
                Te invităm să participi la cea mai recentă ediție a festivalului nostru de teatru, un eveniment dedicat tinerelor talente.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Data:</span> 24 Mai 2025</li>
                <li><span className="font-semibold">Locația:</span> Teatrul Municipal Carei</li>
                <li><span className="font-semibold">Program:</span> 09:00 - 16:00</li>
              </ul>
              <p>
                Festivalul aduce împreună tineri pasionați de teatru din diverse județe, oferind o platformă pentru exprimarea 
                creativității și dezvoltarea abilităților actoricești într-un cadru profesionist.
              </p>
              <button className="inline-block mt-4 bg-amber-700 text-amber-50 px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors shadow-md">
                Detalii eveniment
              </button>
            </div>
          </div>
        </section>

        {/* Festival Concept Section */}
        <section className="my-20">
          <h2 className="text-4xl font-bold text-amber-800 mb-10 text-center font-serif">Conceptul Festivalului</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-amber-100 p-8 rounded-2xl shadow-lg h-[100%]">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Viziune și Misiune</h3>
              <p className="text-amber-900 mb-4">
                Clubul de Teatru Ioana Cicu își propune să fie un laborator de creativitate și expresie artistică, reunind artiști și iubitori 
                de teatru într-un spațiu de dialog și experimentare. Festivalul nostru celebrează diversitatea și profunzimea 
                artei teatrale contemporane.
              </p>
              <p className="text-amber-900 mb-4">
                Misiunea noastră este să promovăm arta teatrală ca formă de educare, inspirație și transformare socială, 
                încurajând tinerii artiști să-și exploreze potențialul creativ și să dezvolte proiecte inovatoare.
              </p>
              <h3 className="text-2xl font-bold text-orange-600 mb-4 mt-8">Valori</h3>
              <ul className="list-disc pl-5 text-amber-900">
                <li className="mb-2">Excelență artistică și profesionalism</li>
                <li className="mb-2">Incluziune și diversitate culturală</li>
                <li className="mb-2">Colaborare și comunitate</li>
                <li className="mb-2">Inovație și experimentare</li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-700 to-orange-600 p-8 rounded-2xl shadow-lg text-amber-50">
                <h3 className="text-2xl font-bold mb-4">Experiență Unică</h3>
                <p>
                  Pe parcursul festivalului, publicul va avea ocazia să asiste la reprezentații diverse, de la teatru 
                  experimental până la reinterpretări ale operelor clasice, toate într-o atmosferă intimă și vibrantă.
                </p>
              </div>
              
              <div className="bg-amber-800 p-8 rounded-2xl shadow-lg text-amber-50">
                <h3 className="text-2xl font-bold mb-4">Ateliere și Workshopuri</h3>
                <p>
                  Festivalul include ateliere de actorie, scriere dramatică și regie, oferind participanților oportunitatea 
                  de a învăța de la profesioniști cu experiență în domeniu și de a-și dezvolta abilitățile artistice.
                </p>
              </div>
              
              <div className="bg-orange-500 p-8 rounded-2xl shadow-lg text-amber-50">
                <h3 className="text-2xl font-bold mb-4">Comunitate și Dialog</h3>
                <p>
                  Mai mult decât un simplu festival, Clubul de Teatru Ioana Cicu creează un spațiu de comuniune și dialog între artiști, 
                  public și critici, încurajând dezbaterile despre rolul teatrului în societatea contemporană.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="/program" className="text-lg text-amber-800 font-semibold border-b-2 border-amber-600 pb-1 hover:text-amber-600 transition-colors">
              Descoperă programul complet al festivalului →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;