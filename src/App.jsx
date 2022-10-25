import { RiHashtag, RiLineChartLine } from "react-icons/ri"
import Header from "./components/Header"
import Sidebar from "./components/SideBar"

function App() {

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen ">
      <Sidebar/>
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-5 h-[100vh] overflow-y-scroll">
      <Header/>
      {/*SECTION 1*/}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-7">
        {/*CARD 1*/}
        <div className="bg-primary-100/90 p-8 rounded-2xl text-gray-300 flex flex-col gap-6">
          <RiLineChartLine className="text-5xl  "/>
          <h4 className="text-2xl">Earnings</h4>
          <span className="text-5xl text-white">&euro; 8,350</span>
          <span className="py-1 px-3 bg-primary-300/80 rounded-full">+ 10% since last month</span>
        </div>
        {/*CARD 2*/}
        <div className="p-4 bg-white rounded-2xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
            <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">98</span>
            <div>
              <h3 className="font-bold">Rank</h3>
              <p className="text-gray-500">In top 30%</p>
            </div>
          </div>
          <div className="bg-primary-100/10 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">32</span>
              <div>
                <h3 className="font-bold">Projects</h3>
                <p className="text-gray-500">8 this month</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="bg-primary-100/20 py-1 px-3 rounded-full">Mobile App</span>
              <span className="bg-primary-100/20 py-1 px-3 rounded-full">Branding</span>
            </div>
          </div>
        </div>
        {/*CARD 3*/}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="font-bold text-2xl mb-8">Your Project</h1>
          <div className="bg-white p-6 rounded-2xl drop-shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://img.freepik.com/psd-gratis/retrato-avatar-dibujos-animados-3d-hombre-fresco_627936-10.jpg" 
              className="object-cover w-14 h-14 rounded-full" alt=""/>
              <div>
                <h3 className="font-bold">Logo design for Bakery</h3>
                <p className="text-gray-500">1 day renaining</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img src="https://img.freepik.com/psd-gratis/retrato-avatar-dibujos-animados-3d-anciana_627936-28.jpg" 
              className="object-cover w-14 h-14 rounded-full" alt=""/>
              <div>
                <h3 className="font-bold">Logo design for Bakery</h3>
                <p className="text-gray-500">1 day renaining</p>
              </div>
            </div>
            <div className="flex justify-end">
              <a href="#" className="hover:text-primary-100 transition-colors hover:underline">See all Projects</a>
            </div>
          </div>
        </div>
      </section>
      {/*SECTION 2*/}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-7">
        <div>
          <h1 className="text-2xl font-bold mb-8">Recent Invoices</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            {/*CARD 1*/}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img src="https://img.freepik.com/psd-premium/retrato-avatar-dibujos-animados-3d-servicio-al-cliente-masculino_627936-27.jpg?"
                className="w-14 h-14 object-cover rounded-xl" alt="" />
                <div>
                  <h3 className="font-bold">Alexander Willians</h3>
                  <p className="text-gray-500">JQ Holdings</p>
                </div>
              </div>
              <div>
                <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">Paid</span>
              </div>
              <div>
                <span className="font-bold">&euro;1,200.87</span>
              </div>
            </div>
            {/*CARD 2*/}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img src="https://img.freepik.com/psd-premium/retrato-avatar-dibujos-animados-3d-artista-masculino_627936-29.jpg?"
                className="w-14 h-14 object-cover rounded-xl" alt="" />
                <div>
                  <h3 className="font-bold">Jhon Philips</h3>
                  <p className="text-gray-500">Inchor Techs</p>
                </div>
              </div>
              <div>
                <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">Paid</span>
              </div>
              <div>
                <span className="font-bold">&euro;12,900.88</span>
              </div>
            </div>
          </div>
          <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between 
                            flex-wrap xl:flex-nowrap gap-8">
            <div>
              <RiHashtag className="text-4xl -rotate-12"/>
            </div>
            <div>
              <h5 className="font-bold text-white">Engage with clients</h5>
              <p>Join slack channel</p>
            </div>
            <div className="w-full xl:w-auto">
              <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">Join now</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-8">Recommended projectc</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src="https://img.freepik.com/psd-premium/retrato-avatar-dibujos-animados-3d-hombre-negocios-senior_627936-34.jpg" 
                className="w-14 h-14 object-cover rounded-full" alt="" />
                <div>
                  <h3 className="font-bold">Thomas Martin</h3>
                  <p className="text-gray-500">Updated 10m ago</p>
                </div>
              </div>
              <div>
                <span className="bg-primary-100 py-2 px-4 rounded-full text-white font-medium">Design</span>
              </div>
            </div>
            <div >
              <h3 className="text-lg font-bold">Need a designer to form branding essentials for my business</h3>
              <p className="text-gray-500">Looking for a talented brand designer to create all branding materials my new strartup</p>
            </div>
            <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
              <div>
              <sup className="text-xs text-gray-500">&euro;</sup>
              <span className="text-2xl font-bold">8,700</span>
              <span className="text-sm text-gray-500 ml-2">/month</span>
              </div>
              <div>
                <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">Full Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}

export default App
