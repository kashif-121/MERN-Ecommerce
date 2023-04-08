import React, { useState, useEffect } from 'react'
import './Category.css'


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([
            {
                id: 1,
                name: 'Decorations'
            },
            {
                id: 2,
                name: 'Interior'
            },
            {
                id: 3,
                name: 'Electronics'
            }
        ])
    }, [])

    return (
        <>
        <div className="category-wrapper">
            {
                categories.map(i => {
                    return <li key={i.id}>{i.name}</li>
                })
            }
        </div>
        </>
    )
}

export default Category