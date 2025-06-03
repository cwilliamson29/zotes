import {useState} from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {Transition} from "@headlessui/react";
import {useData} from "../../hooks/useData.jsx";
import {FaFolder, FaFolderOpen} from "react-icons/fa";
import {CiSquareMinus, CiSquarePlus} from "react-icons/ci";

function DisplayDirectories({directory}) {
    const {children} = useData()

    const [expanded, setExpanded] = useState(false);
    const sortedDirectories = sortDirectoriesByName(children)

    return (
        <div className={"pl-3 py-1 overflow-hidden text-white"}>
            <div className="flex flex-row content-center border-b-1 border-gray-300 w-[100%]" onClick={() => setExpanded(!expanded)}>
                <div className="flex my-auto  pr-1">
                    {expanded ?
                        <>
                            <CiSquareMinus size="18px" className="mr-1"/>
                            <FaFolderOpen className="text-blue-700"/>
                        </>
                        :
                        <>
                            <CiSquarePlus size="18px" className="mr-1"/>
                            <FaFolder className="text-blue-900"/>
                        </>

                    }
                </div>

                <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {directory.name} - {directory.parent_id}
                </p>

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
