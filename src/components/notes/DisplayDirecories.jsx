import {useState} from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {Transition} from "@headlessui/react";
import {useData} from "../../hooks/useData.jsx";
import {MdKeyboardArrowUp, MdOutlineKeyboardArrowDown} from "react-icons/md";
import {FaFolder, FaFolderOpen} from "react-icons/fa";

function DisplayDirectories({directory, level, padding = 6}) {
    const {children} = useData()

    const [expanded, setExpanded] = useState(false);
    const sortedDirectories = sortDirectoriesByName(children)

    const dirBG = level % 2 === 0 ? "bg-stone-800" : "bg-stone-500"

    const max = 300 - 27
    console.log(max)

    return (
        <div className={" overflow-hidden text-white max-w-[300px] min-w-[300px] " + dirBG}>
            <div className="flex flex-row content-center justify-between w-[100%] border-orange-900 border-b-1 py-1" onClick={() => setExpanded(!expanded)}>
                <div className={`flex`} style={{paddingLeft: `${padding}px`, maxWidth: `${max}px`}}>
                    {expanded ?
                        <FaFolderOpen size="24px" className="mr-2 text-orange-700"/>
                        :
                        <FaFolder size="22px" className="mr-2 text-orange-700"/>
                    }
                    <p className={'overflow-hidden w-full whitespace-nowrap text-ellipsis ' + `w-[100px]`}>
                        {directory.name} - {directory.parent_id}
                    </p>
                </div>

                <div className="flex my-auto  pr-1">
                    {expanded ?
                        <MdKeyboardArrowUp size="18px" className="mr-1 text-orange-700"/>
                        :
                        <MdOutlineKeyboardArrowDown size="18px" className="mr-1 text-orange-700"/>
                    }
                </div>
            </div>

            <Transition show={expanded} enter="transition ease-in-out duration-150" enterFrom="opacity-0 h-0" enterTo="opacity-100 h-auto"
                        leave="transition ease-in-out duration-150" leaveFrom="opacity-100 h-auto" leaveTo="opacity-0 h-0">
                <div className="min-w-full">
                    {sortedDirectories.map((child) => {
                            if (child.parent_id === directory.id) {
                                return (<DisplayDirectories key={child.id} directory={child} level={level + 1} padding={padding + 17}/>)
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
