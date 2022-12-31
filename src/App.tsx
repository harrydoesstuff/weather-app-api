import Forecast from "./components/Forecast"
import Search from "./components/Search"
import useForecast from "./hooks/useForecast"
import { useState } from "react"
import MainCard from "./components/MainCard"

const App = (): JSX.Element => {

  const {
    term, options, forecast, onInputChange, onOptionSelect, onSubmit
  } = useForecast()

  const [mode, setMode] = useState<Boolean>(true)

  const handleDarkLightMode = () => {
    if (mode) {
      setMode(false)
      return
    }
    setMode(true)
  }


  return (
    <MainCard mode={mode}>
      <section className="flex flex-col h-[100vh] w-[100vw] p-4 items-center gap-4">
        {mode ? (
          <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full text-xl h-fit w-fit" onClick={handleDarkLightMode}>☾</button>
        ) : (
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-4 rounded-full text-xl h-fit w-fit" onClick={handleDarkLightMode}>☀</button>
        )}

        {
          forecast ? (
            <Forecast mode={mode} data={forecast} />
          ) : (
            <Search mode={mode} term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} />
          )
        }
      </section>
    </MainCard >
  )
}

export default App
