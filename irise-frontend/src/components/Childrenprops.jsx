import React from 'react'

const MyButtom = ({ children }) => {
    // console.log(children, "children")
    return (
        <button>{children}</button>
    )
}

const ChildrenProps = ({ myValue }) => {
    return (
        <div>
            <h1>ChildrenProps</h1>
            <MyButtom>{myValue}</MyButtom>
        </div>
    )
}

export default ChildrenProps
