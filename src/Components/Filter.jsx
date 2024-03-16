import React from 'react'

export default function Filter({ filterData }) {
    return (
        <div className="">
            {filterData.map((data) => {
                return (
                    <button key={data.id}>{data.title}</button>
                )
            })}
        </div>
    )
}
