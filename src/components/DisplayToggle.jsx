import React, { useState } from 'react'

export default function () {
    const [show, setShow] = useState('true');
    const handelToggole = () => {
        setShow((pre) => (!pre))
    }
    return (
        <div>
            <button onClick={handelToggole}>{show ? 'hide' : 'show'}</button>
            {
                show && (
                    <div>
                        <h1>my story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam officia asperiores quia? In, nostrum maiores qui repellat illum suscipit?</p>
                    </div>
                )
            }
        </div>
    )
}
