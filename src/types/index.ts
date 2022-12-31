export type optionType = {
    name: string
    lat: number
    lon: number
}

export type forecastType = {
    name: string
    country: string
    sunrise: number
    sunset: number
    list: [{
        dt: number
        main: {
            feels_like: number
            humidity: number
            pressure: number
            temp: number
            temp_max: number
            temp_min: number
        }
        visibility: number
        weather: [{
            main: string
            description: string
            icon: string

        }]
        wind: {
            deg: number
            gust: number
            speed: number
        }
        clouds: {
            all: number
        }
        pop: number
    }]
}