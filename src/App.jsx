import Sidebar from "./components/SideBar"

function App() {

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-5 min-h-screen ">
      <Sidebar/>
      <main className="lg:col-span-3 xl:col-span-4 ">
      content
      </main>
    </div>
  )
}

export default App
