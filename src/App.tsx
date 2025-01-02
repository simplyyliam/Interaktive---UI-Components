import { useState } from "react";
import { SideBar } from "./Components/SideBar";
import { Increment } from "./UI components/Increment";


export default function App () {

  const [Component, setComponent] = useState<string | null>(null)


  const openComponent = (componentID: string) => {
    setComponent(componentID)
    if (Component) {
        setComponent(null)
    }
  }

  return (
    <div className="flex p-7 items-center justify-center w-screen h-screen ">
      <div className="flex gap-11 w-container h-container items-center justify-center">
        <SideBar onComponent={openComponent}/>
        <div className="flex justify-center items-center w-md.previewScreen h-md.previewScreen bg-primary rounded-2xl ">
            {Component == 'Increment' && (
              <div className="flex flex-col items-center">
                <Increment name="Increment"/>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}