import {useState} from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {Transition} from "@headlessui/react";
import {useData} from "../../hooks/useData.jsx";
import {FaFolderMinus, FaFolderPlus} from "react-icons/fa";

function DisplayDirectories({directory}) {
    const {children} = useData()

    const [expanded, setExpanded] = useState(false);
    const sortedDirectories = sortDirectoriesByName(children)

    return (
        <div className="ml-2">
            <div className="flex flex-row content-center" onClick={() => setExpanded(!expanded)}>
                <div className="h-[100%] flex my-auto  pr-1">
                    {expanded ? <FaFolderMinus className="text-blue-700"/> : <FaFolderPlus className="text-blue-900"/>}
                </div>

                {directory.name} - {directory.parent_id}
            </div>

            <Transition show={expanded} enter="transition ease-in-out duration-150" enterFrom="opacity-0 h-0" enterTo="opacity-100 h-auto"
                        leave="transition ease-in-out duration-150" leaveFrom="opacity-100 h-auto" leaveTo="opacity-0 h-0">
                <div className="min-w-full">
                    {sortedDirectories.map((child) => {
                            if (child.parent_id === directory.id) {
                                return (<DisplayDirectories key={child.id} directory={child}/>)
                            }
                        }
                    )
                    }
                </div>
            </Transition>
            <div id={"parentContent" + directory.id}></div>
        </div>
    )
}

export default DisplayDirectories
