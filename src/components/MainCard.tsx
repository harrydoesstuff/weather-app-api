import React from 'react'

const MainCard = ({ mode, children }: { mode: Boolean, children: JSX.Element | JSX.Element[] }): JSX.Element => {
    return (
        <main className={mode ? "flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-[100vw] p-4" : "flex justify-center items-center bg-gradient-to-br from-gray-700 via-gray-900 to-black h-[100vh] w-[100vw] p-4"}>

            {children}
        </main >
    )
}


export default MainCard