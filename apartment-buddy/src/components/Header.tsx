export default function Header() {
    return (
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">ApartmentBuddy</h1>
        </div>
        <nav className="flex items-center">
          <a href="#" className="mx-4">Home</a>
          <a href="#" className="mx-4">Features</a>
          <a href="#" className="mx-4">Pricing</a>
          <a href="#" className="ml-4 bg-primary text-white px-6 py-2 rounded-md">Get Started</a>
        </nav>
      </header>
    )
  }