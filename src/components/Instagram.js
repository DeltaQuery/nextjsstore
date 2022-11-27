import React from 'react'
import { feedArr } from 'database/feedArr'
import { InstagramBox } from 'styles/Instagram/IGStyles'
import Image from 'next/image'

export const Instagram = () => {

    return ( 
        <InstagramBox> 
            {feedArr && feedArr.slice(0,8).map((post, index) => {
                return <div className="categoryBox igBox" key={index}>
                    <a href={post.link} target="_blank" className="IgImage__Link">
                        <Image src={post.image} alt="Ig Post Image" className="IgImage__Img"
                        style={{ width: "100%", objectFit: "cover", height: "auto" }}
                        />
                    </a>
                </div>
            })
            }
        </InstagramBox>
    )
}
