import React from 'react'
const headerNav = () => {
    return (
        <>
            <div className="flex justify-between p-4">
                <div>
                    <button className="">Country/Region</button>
                </div>
                <div className="flex gap-x-6 justify-end">
                    <div><a href="/support">Support </a></div>
                    <div><a href="/contact">Contact</a></div>
                </div>
            </div>
        </>
    )
}

export default headerNav
