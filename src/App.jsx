import { RiLineChartLine, RiMoneyPoundCircleLine } from "react-icons/ri"
import Header from "./components/Header"
import Sidebar from "./components/SideBar"

function App() {

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen ">
      <Sidebar/>
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-5">
      <Header/>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-7">
        {/*CARD 1*/}
        <div className="bg-primary-100/90 p-8 rounded-2xl text-gray-300 flex flex-col gap-6">
          <RiLineChartLine className="text-5xl  "/>
          <h4 className="text-2xl">Earnings</h4>
          <span className="text-5xl text-white">&euro; 8,350</span>
          <span className="py-1 px-3 bg-primary-300/80 rounded-full">+ 10% since last month</span>
        </div>
        {/*CARD 1*/}
        <div className="p-8 bg-white rounded-2xl">
          <div className="flex gap-4">
            <span className="bg-primary-100/10 text-primary-300">98</span>
            <div>
              <h3>Rank</h3>
              <p>In top 30%</p>
          </div>
          </div></div>
      </section>
      </main>
    </div>
  )
}

export default App
