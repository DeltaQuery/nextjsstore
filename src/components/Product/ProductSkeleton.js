import React from 'react'

export const ProductSkeleton = ({display}) => {
    return (
        <div className={`ProductSkeleton ${display}`}>
            <div className={`ImgSkeleton ${display}`}></div>
            <div className={`SkeletonInfo ${display}`}>
                <div className={`TitleSkeleton ${display}`}></div>
                <div className={`PriceSkeleton ${display}`}>
                </div>
                <div className={`ButtonSkeleton ${display}`}></div>
            </div>
            
        </div>
    )
}
 