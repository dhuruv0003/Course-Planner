import React from 'react'

export default function Filter({ filterData }) {
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center gap-y-4">
            {filterData.map((data) => {
                return (
                    <button key={data.id}>{data.title}</button>
                )
            })}
        </div>
    )
}
