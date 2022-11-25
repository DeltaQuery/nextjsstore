import React, { useState, useEffect } from 'react'
import { ModelsDiv } from 'styles/Product/Components/ModelsStyles'
import Link from 'next/link'

export const PModels = ({ display, models, model, id, products }) => {
    const [open, setOpen] = useState(true)
    const [pModels, setPmodels] = useState(null)
    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if(display === "detailed" && products){
            let modelsArr = []
            if (models.variants) {
                if(models.variants.length > 0){
                    for(let i = 0; i < models.variants.length; i++){
                        let result = products.filter(x => x._id === models.variants[i]._id)
                        if (result) {
                            modelsArr.push(result[0])
                        }
                    }
                }
            }
            setPmodels(modelsArr)
        }
    }, [models])

    return (
        <>
            {
                (display === "detailed" && pModels && pModels.length) > 0 &&
                <>
                    <ModelsDiv className={display}>
                        <button
                            type="button"
                            className="ModelsButton"
                            onClick={handleOpen}
                        >
                            <span className="">{models.type}: </span><span>{model}</span>
                        </button>

                        <div className={`CollapsibleHidden ${open ? "CollapsibleVisible" : "CollapsibleHidden"
                    }`}>
                        {pModels.map((model) => {
                            return (
                                <Link
                                    href={`/details/${model._id}`}
                                    key={model._id}
                                    className=""
                                >
                                    <article className={`ModelContent ${id === model._id ? 'SelectedModel' : ''}`}>
                                        <span className="ModelModel">
                                            {model.model}
                                        </span>
                                        {model.discountedPrice && <span className="ModelPrice">
                                            ${model.discountedPrice}
                                        </span>}
                                        {!model.discountedPrice && <span className="ModelPrice">
                                            ${model.price}
                                        </span>}
                                    </article>
                                </Link>
                            )
                        })}
                        </div>

                    </ModelsDiv>
                </>
            }
        </>
    )
}
