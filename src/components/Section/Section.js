import React from "react"
import { SectionDiv } from "styles/Section/SectionStyles"
import { Separator } from "styles/Separator"
import { SectionTitle } from "./SectionTitle"
import { SectionMore } from "./SectionMore"

export const Section = ({ children, Left = SectionTitle, Right = SectionMore, text, category }) => {
    return (
        <SectionDiv>
            <div className="TitleContainer">
                <Left text={text}/>
                <Right category={category}/>
            </div>
            <Separator />
            <div className="SectionContent">{children}</div>
        </SectionDiv>
    );
};
