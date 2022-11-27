import React from 'react'
import { PromoDiv } from 'styles/Promo/PromoStyles'
import Image from 'next/image'

export const Promo = ({ img1, img2, img3 }) => {
    return (
        <PromoDiv>
            <div className="PromoImg">
                <Image src={img1} alt="Promo img"
                    style={{ width: "100%", objectFit: "cover", height: "auto" }}
                />
            </div>
            <div className="PromoImg">
                <Image src={img2} alt="Promo img"
                    style={{ width: "100%", objectFit: "cover", height: "auto" }}
                />
            </div>
            <div className="PromoImg">
                <Image src={img3} alt="Promo img"
                    style={{ width: "100%", objectFit: "cover", height: "auto" }}
                />
            </div>
        </PromoDiv>
    )
}
