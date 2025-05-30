import {useState} from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {Transition} from "@headlessui/react";
import {useData} from "../../hooks/useData.jsx";

function DisplayDirectories({directory}) {
    const {children} = useData()

    const [expanded, setExpanded] = useState(false);
    const sortedDirectories = sortDirectoriesByName(children)

    return (
        <div className="pl-1" onClick={() => setExpanded(!expanded)}>
            {directory.name} - {directory.parent_id}

            <Transition show={expanded} enter="transition ease-in-out duration-150" enterFrom="opacity-0 h-0" enterTo="opacity-100 h-auto"
                        leave="transition ease-in-out duration-150" leaveFrom="opacity-100 h-auto" leaveTo="opacity-0 h-0">
                <div className="min-w-full">
                    {sortedDirectories.map((child) => {
                            if (child.parent_id === directory.id) {
                                return (<div key={child.id} className="pl-3">{child.name}</div>)
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
