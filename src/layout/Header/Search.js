import React from 'react'
import { BiSearch } from "react-icons/bi"
import { useRouter } from 'next/router'
import styles from "styles/Header.module.css"

export const Search = () => {
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search/value=${e.target[0].value}`)
    }

    const handleSearchIcon = () => {
    }

    return (
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
            <input type="text" className={styles.SearchInput} />
            <BiSearch
                className={styles.SearchIcon}
                size="22"
                fill="#003A4E"
                onClick={handleSearchIcon}
            />
        </form>
    )
}
