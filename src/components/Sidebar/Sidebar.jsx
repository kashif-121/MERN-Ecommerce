import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {

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
        <div className="sidebar-wrapper">
            {
                categories.map(i => (
                    <ul>
                        <li key={i.id}><Link to={"products/"+i.name}>{i.name}</Link></li>
                    </ul>
                )
                )
            }
        </div>
    )
}

export default Sidebar