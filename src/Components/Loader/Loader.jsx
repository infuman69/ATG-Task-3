import React from 'react'
import style from './Loader.module.css'

const Loader = () => {
    return (
        <div className="spinner-container">
            <div className={style.loading_spinner}>
            </div>
        </div>
    )
}

export default Loader