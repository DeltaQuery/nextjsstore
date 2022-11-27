import React from 'react'
import { categoriesArr } from 'database/categoriesArr'
import Link from 'next/link'
import { CategoriesBox } from 'styles/Categories/CategoriesStyles'
import Image from 'next/image'

export const Categories = () => {
    return (
        <CategoriesBox>
            {categoriesArr && categoriesArr.slice(0, 8).map(category => {
                return <div 
                className="categoryBox"
                key={category.category}
                >
                    <Link
                    href={`/search/category=${category.categoryId}`}
                    className="categoryImgContainer"
                    >
                        <Image src={category.image} alt={category.categoryId}
                        style={{height: "auto", width:"100%"}}/>
                    </Link>

                    <Link
                    href={`/search/category=${category.categoryId}`}
                    >
                        <h4 className="categoryNameContainer">{category.category}</h4>
                    </Link>
                </div>
            })
            }
        </CategoriesBox>
    )
}
