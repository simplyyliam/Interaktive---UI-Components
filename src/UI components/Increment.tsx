import { useState } from "react"


interface IncrementProps {
    name: string
}

export function Increment ({name}:IncrementProps):JSX.Element {


    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
        if (count < 1) {
            setCount(0)
        }
    }
    const clearCount = () => {
        setCount(0)
    }

    return (
        <div className="w-[395px] h-[247] flex justify-center rounded-[40px] bg-Noise bg-center bg-cover p-[23px] shadow-lg ">
            <div className="flex justify-start flex-grow gap-3.5">
                <div className="flex flex-col justify-center items-center w-[240px] h-[200px] bg-secondary rounded-[20px] shadow-lg">
                    <h1 className="text-white text-[71px] "> {count} </h1>
                    <h1 className="relative left-[20%]  bottom-[29.5em] text-center"> {name} </h1>
                    
                </div>

                <div className="flex flex-col justify-center gap-[6px]">
                    <button onClick={Increment} className="bg-[#BABABA] rounded-xl flex justify-center py-2 shadow-lg hover:bg-neutral-500" >
                        <svg width="45" height="45" viewBox="0 0 24 24" stroke="#f2f2f2" fill="none" stroke-linejoin="round" stroke-width="1.0666666666666667" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M7 12H17M12 7L12 17"></path></svg>
                    </button>
                    <button onClick={Decrement} className="bg-[#565454] rounded-xl flex justify-center py-2 shadow-lg hover:bg-neutral-700 ">
                        <svg width="45" height="45" viewBox="0 0 24 24" stroke="#f2f2f2" fill="none" stroke-linejoin="round" stroke-width="1.0666666666666667" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M7 12H17"></path></svg>
                    </button>
                    <button onClick={clearCount} className="bg-[#565454] flex  rounded-xl px-6 py-[20.94px] h-[60px] items-center shadow-lg hover:bg-neutral-700" >
                        <h1 className="text-[20px] text-[#f2f2f2]">Clear</h1>
                    </button>
                    
                </div>
            </div>

        </div>
    )
}