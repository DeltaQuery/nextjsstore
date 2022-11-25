import React, { useState } from 'react'
import { FeaturesDiv } from 'styles/Product/Components/Features'

export const Features = ({ display, features: featureList }) => {
    const [features, setFeatures] = useState(true)
    const handleFeatures = () => {
        setFeatures(!features)
    }

    return (
        <FeaturesDiv className={display} collapsible={features}>
            <button
                type="button"
                className="FeaturesButton"
                onClick={handleFeatures}
            >
                <span>Funciones y detalles</span> <span></span>
            </button>
            <div className="CollapsibleContainer">
              <div
                className={`CollapsibleHidden ${features ? "CollapsibleVisible" : "CollapsibleHidden"
                    }`}
            >
                <ul>
                    { featureList && featureList.map((feature, index) => {
                                        return <li key={index}>•{feature}</li>
                                    })}
                </ul>
            </div>  
            </div>
            
        </FeaturesDiv>
    )
}
