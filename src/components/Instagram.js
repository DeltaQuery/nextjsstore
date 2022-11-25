import React from 'react'
import { feedArr } from 'database/feedArr'
import { InstagramBox } from 'styles/Instagram/IGStyles'

export const Instagram = () => {

    return ( 
        <InstagramBox> 
            {feedArr && feedArr.slice(0,8).map((post, index) => {
                return <div className="categoryBox igBox" key={index}>
                    <a href={post.link} target="_blank">
                        <img src={post.image} loading="lazy"></img>
                    </a>
                </div>
            })
            }
        </InstagramBox>
    )
}
