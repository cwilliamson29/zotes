import React from 'react'

function Sidebar() {
    const menuItems = [
        {name: "Test Directory", id: 1, parent_id: "parent"},
        {name: "Test Directory2", id: 2, parent_id: "parent"},
        {name: "Test Directory3", id: 3, parent_id: "parent"},
        {name: "Test Directory4", id: 4, parent_id: "parent"},
        {name: "Test sub-Directory1", id: 5, parent_id: 2},
        {name: "Test sub-Directory2", id: 6, parent_id: 2},
        {name: "Test sub-Directory3", id: 7, parent_id: 3},
        {name: "Test sub-Directory4", id: 8, parent_id: 4},
    ];

    const SortDirectories = (items) => {
        const parents = items.filter(item => item.parent_id === "parent");
        const children = items.filter(item => item.parent_id !== "parent");

        const sorted = [];

        for (const parent of parents) {
            sorted.push(parent);
            const childItems = children.filter(child => child.parent_id === parent.id);
            sorted.push(...childItems);
        }

        return sorted;
    }
    const sortedDirectories = SortDirectories(menuItems)
    return (
        <div className="w-[350px] bg-amber-100 text-black h-full">
            <h2 className="text-lg font-bold pl-2">Notes</h2>
            {sortedDirectories.map((item, i) => (
                <div key={i}>
                    {item.name} - {item.parent_id}
                </div>
            ))}
        </div>
    )
}

export default Sidebar
