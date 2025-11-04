import React from 'react'

function MiniSeparator() {
    return (
        <div className="flex w-full h-4">
            <div className="flex-1"></div>

            <div className="flex-1 grid grid-cols-[20px_4fr_20px_20px]">
                <div className="border-x"></div>
                <div className=""></div>
                <div className="border-x"></div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default MiniSeparator