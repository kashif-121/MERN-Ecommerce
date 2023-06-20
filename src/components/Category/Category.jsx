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
                <table border="1px">
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Action</td>
                    </tr>
                    <tbody>
                        {
                            categories.map(i => {
                                return <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td className="btn-group">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Category