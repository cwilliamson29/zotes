import {useEffect, useState} from 'react'
import {directories} from "../dummyData/directories.js";

export function useData() {
    const [parents, setParents] = useState([]);
    const [children, setChildren] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const parTemp = []
        const childTemp = []

        directories.map((dir) => {
            if (dir.parent_id === null) {
                parTemp.push(dir)
            } else {
                childTemp.push(dir)
            }
        })

        setChildren(childTemp)
        setParents(parTemp)

        setLoading(false);
    }, [])

    //console.log(directories)

    return {parents, children, loading};
}


