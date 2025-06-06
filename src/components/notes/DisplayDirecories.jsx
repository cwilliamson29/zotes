import {useState} from 'react'
import {sortDirectoriesByName} from "../../helpers/sidebarHelper.js";
import {Transition} from "@headlessui/react";
import {useData} from "../../hooks/useData.jsx";
import {MdKeyboardArrowUp, MdOutlineKeyboardArrowDown} from "react-icons/md";

function DisplayDirectories({directory, level, padding = 6}) {
    const {children} = useData()

    const [expanded, setExpanded] = useState(false);
    const sortedDirectories = sortDirectoriesByName(children)
    const base = " py-1 prr-1 overflow-hidden border-orange-900 border-b-1 shadow-inner text-white "
    const dirBG = level % 2 === 0 ? "bg-stone-800" : "bg-stone-500"
    const pad = padding === 0 ? padding + 6 : 0
    //const nameSpacing = `padding: ${lvlp}px`
    console.log(pad)
    //console.log(level !== 1 ? "plb-1 bg-red-300" + base + dirBG : "plb-1 bg-red-300" + base + dirBG)
    return (
        <div className={base + dirBG}>
            <div className="flex flex-row content-center justify-between w-[100%]" onClick={() => setExpanded(!expanded)}>
                <p className={'pll-[14px] overflow-hidden whitespace-nowrap text-ellipsis'} style={{paddingLeft: `${padding}px`}}>
                    {directory.name} - {directory.parent_id}
                </p>

                <div className="flex my-auto  pr-1">
                    {expanded ?
                        <>
                            <MdKeyboardArrowUp size="18px" className="mr-1 text-orange-700"/>
                            {/*<FaFolderOpen className="text-blue-700"/>*/}
                        </>
                        :
                        <>
                            <MdOutlineKeyboardArrowDown size="18px" className="mr-1 text-orange-700"/>
                            {/*<FaFolder className="text-blue-900"/>*/}
                        </>

                    }
                </div>
            </div>

            <Transition show={expanded} enter="transition ease-in-out duration-150" enterFrom="opacity-0 h-0" enterTo="opacity-100 h-auto"
                        leave="transition ease-in-out duration-150" leaveFrom="opacity-100 h-auto" leaveTo="opacity-0 h-0">
                <div className="min-w-full">
                    {sortedDirectories.map((child) => {
                            if (child.parent_id === directory.id) {
                                return (<DisplayDirectories key={child.id} directory={child} level={level + 1} padding={padding + 12}/>)
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
