import React from 'react'

export default function Filter({ filterData }) {
    return (
        <div className="">
            {filterData.map((data) => {
                return (
                    <button>{data.title}</button>
                )
            })}
        </div>
    )
}
