import Header from '@/components/Header'
import FeatureCard from '@/components/FeatureCard'
import StepGuide from '@/components/StepGuide'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-5xl font-bold leading-tight text-gray-800">Your companion for apartment living</h2>
            <p className="mt-6 text-xl text-gray-600">Everything you need to make moving into your new apartment a breeze.</p>
            <button className="mt-8 bg-primary text-white px-10 py-3 rounded-md text-lg font-medium">
              Get Started
            </button>

            <StepGuide />
          </div>

          <div className="space-y-8">
            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              } 
              title="Budget Calculator" 
              description="Estimate your monthly apartment expenses" 
            />

            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              } 
              title="Apartment Tips" 
              description="Advice on renting and apartment management" 
            />

            <FeatureCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              } 
              title="Renters Insurance" 
              description="Compare renters insurance quotes" 
            />

            <Testimonial 
              quote="ApartmentBuddy made my move so much easier. Highly recommend!" 
              author="Sarah W." 
            />
          </div>
        </div>
      </main>
    </div>
  )
}
