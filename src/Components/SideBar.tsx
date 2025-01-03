import { AppHeader } from "./AppHeader"
import { Button } from "./Button"

interface SideBarProps {
    onComponent: (componentID: string) => void
}


export function SideBar ({onComponent}: SideBarProps): JSX.Element {
    return (    
        <div className="flex flex-col gap-[60px] py-4 px-3 w-md.sidebar h-md.sidebar bg-primary rounded-2xl">
            <AppHeader/>
        
            <div className="p-2">
                <Button Name="Increment" onClick={() => onComponent('Increment')}/>
                <Button Name="Task Widget" onClick={() => onComponent('Task')}/>

            </div>
        </div>
    )
}   