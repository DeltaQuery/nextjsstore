import React from 'react'
import { useSwiper } from 'hooks/useSwiper'
import { SidebarDiv } from 'styles/Sidebar/SidebarStyles'
import Link from 'next/link'
import { BiPurchaseTagAlt } from "react-icons/bi"
import { BiCategory } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"
import { categoriesArr } from 'database/categoriesArr'
import { AiOutlineBuild } from "react-icons/ai"

export const Sidebar = () => {
    const { sidebar, setStart, setEnd, checkSwipeToClose } = useSwiper() 

    const handlePosition = () => {
        const position = sidebar ? "0px" : "-2000px"
        return position
    }

    /*onTouchStart={(e) => setStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY])}
        onTouchMove={(e) => setEnd([e.changedTouches[0].clientX, e.targetTouches[0].clientY])}
        onTouchEnd={checkSwipeToClose}*/

    return (
        <SidebarDiv
        position={handlePosition}
        >
                <div className="SidebarContent">
                    <Link href={`/search/category=50`} className="CategoryTitle RedirectLink">
                        <BiPurchaseTagAlt
                            className=""
                            size="20"
                            fill="#003A4E"
                        />
                        Ofertas
                    </Link>

                    {/*<div
                        className="removeProductIcon closeSidebarIcon"
                        onClick={() => closeSidebar()}
                    >X</div>*/}
                </div>

                <div className="SidebarContent">
                <Link href={`/pc_builder`} className="CategoryTitle RedirectLink">
                        <AiOutlineBuild
                            className=""
                            size="20"
                            fill="#003A4E"
                        />
                        PC Builder
                    </Link>
                    </div>

                <div className="SidebarContent">
                    <div className="CategoryTitle">
                        <BiCategory
                            className=""
                            size="20"
                            fill="#003A4E"
                        />
                        Categorías
                    </div>

                    {categoriesArr && categoriesArr.map(category => {
                        return <Link
                        key={category.categoryId}
                        href={`/search/category=${category.categoryId}`}
                        className="CategoryItem RedirectLink"
                        >
                            {category.category}
                            <BiChevronRight
                            className="CategoryIcon"
                            size="24"
                            />
                               </Link>
                    })}
                </div>
        </SidebarDiv>
    )
}




