import { ChangeEvent } from "react"
import { optionType } from "../types"
import MainCard from "./MainCard"

type Props = {
    mode: Boolean
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}

const Search = ({ mode, term, options, onInputChange, onOptionSelect, onSubmit }: Props): JSX.Element => {

    return (
        <MainCard mode={mode}>
            <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-0 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
                <h1 className={mode ? "text-4xl font-thin" : "text-4xl text-slate-300 font-thin"} > <span className="font-black">Weather</span>Forecast</h1>
                <p className={mode ? "text-sm mt-2" : "text-sm mt-2 text-slate-300"}>Enter location below</p>
                <div className="relative flex mt-10 md:mt-4">
                    <input type="text" value={term} onChange={onInputChange} className="px-2 py-1 rounded-l-md border-2 border-white" />

                    <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
                        {options.map((option: optionType, index: number) =>
                            <li key={option.name + '-' + index}>
                                <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>{option.name}</button>
                            </li>
                        )}
                    </ul>


                    <button className={mode ? "rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 px-2 py-1 cursor-pointer" : "rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 px-2 py-1 cursor-pointer text-slate-300"} onClick={onSubmit}>Search</button>
                </div>
            </section>
        </MainCard >
    )
}

export default Search


    // < MainCard mode = { mode } >
    //     <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
    //         <h1 className="text-4xl font-thin"><span className="font-black">Weather</span>Forecast</h1>
    //         <p className="text-sm mt-2">Enter location below</p>
    //         <div className="relative flex mt-10 md:mt-4">
    //             <input type="text" value={term} onChange={onInputChange} className="px-2 py-1 rounded-l-md border-2 border-white" />

    //             <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
    //                 {options.map((option: optionType, index: number) =>
    //                     <li key={option.name + '-' + index}>
    //                         <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>{option.name}</button>
    //                     </li>
    //                 )}
    //             </ul>


    //             <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 px-2 py-1 cursor-pointer" onClick={onSubmit}>Search</button>
    //         </div>
    //     </section>
    //     </MainCard >