import NavbarLinks from './components/navbar/navbarLinks'


export default function AboutLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex gap-6 pt-28 max-w-screen-2xl m-auto pb-8 px-3">
      <NavbarLinks />
      <div className="w-full space-y-6">
        { children }
      </div>
    </div>
  )
}
