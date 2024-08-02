
import Header from './components/headerAbout/header'
import NavbarLinks from './components/navbar/navbarLinks'


export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <>  
    
    <section className="flex gap-6 pt-28 px-3 pb-4 max-w-screen-2xl m-auto">
    <NavbarLinks />   
   
       <div className="w-full space-y-6">       
        {children}
      </div>
        
      
    </section>
    </>
  )
}
