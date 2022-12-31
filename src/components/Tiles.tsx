import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Pop from './Icons/Pop'
import Pressure from './Icons/Pressure'
import Visibility from './Icons/Visibility'
import Wind from './Icons/Wind'
import MainCard from './MainCard'

type Props = {
    mode: Boolean
    icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
    title: string
    info: string | JSX.Element
    description?: string | JSX.Element
}

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop,
}

const Tile = ({ mode, icon, title, info, description }: Props): JSX.Element => {
    const Icon = icons[icon]

    return (
        <article className={mode ? "w-[140px] h-[110px] text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between" : "w-[140px] h-[110px] text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between text-slate-300"}>
            <div className="flex items-center text-sm font-bold justify-center">
                <Icon /> <h4 className="ml-1">{title}</h4>
            </div>
            <h3 className="mt-2 text-lg font-light justify-center flex">{info}</h3>

            <div className="text-xs font-bold">{description}</div>
        </article>
    )
}
export default Tile