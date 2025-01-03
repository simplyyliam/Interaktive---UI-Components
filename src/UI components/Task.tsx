import { TaskComp } from "../Components/Task_comp"

interface TaskProps {
    name: string
}


export function Task ({name}:TaskProps): JSX.Element {
    return (
        <div className="bg-[#010101] w-[308px] h-[332px] rounded-[20px] py-7 px-6 flex flex-col gap-[2em]">
            <div className="w-full text-white text-center text-[20px]">Task</div>
            <div className="flex flex-col gap-[8px]">
            <TaskComp task="Work on portfolio"/>
            <TaskComp task="Design Codea"/>
            <TaskComp task="Study"/>
            </div>
        </div>
    )
}