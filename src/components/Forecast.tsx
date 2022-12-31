import React from 'react'
import { getHumidityValue, getPop, getSunTime, getVisibilityValue, getWindDirection } from '../helpers'
import { forecastType } from '../types'
import Feels from './Icons/Feels'
import Wind from './Icons/Wind'
import Sunrise from './Icons/Sunrise'
import Sunset from './Icons/Sunset'
import Tile from './Tiles'
import MainCard from './MainCard'

type Props = {
    mode: Boolean
    data: forecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
    <span>{temp}<sup>o</sup></span>
)

const Forecast = ({ mode, data }: Props): JSX.Element => {
    const today = data.list[0]
    return (
        <MainCard mode={mode}>
            <div className={mode ? 'mx-auto w-[300px]' : 'mx-auto w-[300px] text-slate-300'}>
                <section className='text-center'>
                    <h2 className='text-2xl font-black'>
                        {data.name}
                        <span className='font-thin'>{data.country}</span>
                    </h2>
                    <h1 className='text-4xl font-extrabold'>
                        <Degree temp={Math.round(today.main.temp)} />
                    </h1>
                    <p className='text-sm'>{today.weather[0].main} {today.weather[0].description}</p>
                    <p className='text-sm'>
                        H: <Degree temp={Math.ceil(today.main.temp_max)} /> L: <Degree temp={Math.floor(today.main.temp_min)} />
                    </p>

                </section>

                <section className='flex overflow-x-scroll mt-4 pb-2 mb-5'>
                    {data.list.map((item, i) => (
                        <div className='inline-block text-center w-[50px] flex-shrink-0' key={i}>
                            <p className='text-sm'>{i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}</p>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`weather-icon-${item.weather[0].description}`} />
                            <p className='text-sm font-bold'>
                                <Degree temp={Math.round(item.main.temp)} />
                            </p>
                        </div>
                    ))}
                </section>

                <section className={mode ? 'flex flex-wrap justify-between text-zinc-700' : 'flex flex-wrap justify-between text-zinc-700 text-slate-300'}>
                    <div className='w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5 gap-2'>
                        <Sunrise />
                        <p>{getSunTime(data.sunrise)}</p>
                    </div>
                    <div className='w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5 gap-2'>
                        <Sunset />
                        <p>{getSunTime(data.sunset)}</p>
                    </div>

                    <Tile
                        icon="wind"
                        title="Wind"
                        info={`${Math.round(today.wind.speed)} km/h`}
                        mode={mode}
                    />

                    <Tile
                        icon="feels"
                        title="Feels"
                        info={<Degree temp={today.main.feels_like} />}
                        mode={mode}

                    />

                    <Tile
                        icon="humidity"
                        title="Humidity"
                        info={`${today.main.humidity}%`}
                        mode={mode}


                    />

                    <Tile
                        icon="pop"
                        title="Precipitation"
                        info={`${Math.round(today.pop * 100)}%`}
                        mode={mode}

                    />

                    <Tile
                        icon="pressure"
                        title="Pressure"
                        info={`${today.main.pressure} hPa`}
                        mode={mode}

                    />

                    <Tile
                        icon="visibility"
                        title="Visibility"
                        info={getVisibilityValue(today.visibility)}
                        mode={mode}

                    />
                </section>

            </div>
        </MainCard>
    )
}

export default Forecast