

interface TKProps {
    task: string
    onclick: () => void
}

export function TaskComp ({task, onclick}:TKProps): JSX.Element {
    return (
        <div className=" flex py-4 px-2.5 gap-2 w-full h-[46px] items-center text-white">
            <input type="checkbox" onClick={onclick}  />
            <h1> {task} </h1>
        </div>
    )
}