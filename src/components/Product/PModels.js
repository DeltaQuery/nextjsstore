import React, { useState, useEffect } from 'react'
import { ModelsDiv } from 'styles/Product/Components/ModelsStyles'
import Link from 'next/link'

export const PModels = ({ display, product, products }) => {
    const { id, model, models } = product
    const [open, setOpen] = useState(true)
    const [pModels, setPmodels] = useState(null)
    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if(display.includes("detailed") && products){
            let modelsArr = []
            if (models.variants) {
                if(models.variants.length > 0){
                    for(let i = 0; i < models.variants.length; i++){
                        let result = products.filter(x => x._id === models.variants[i]._id)
                        if (result) {
                            modelsArr.push(result[0])
                        }
                    }
                    modelsArr.unshift(product)
                    modelsArr = modelsArr.filter(model => model?.models?.type === product.models?.type)
                }
            }
            setPmodels(modelsArr)
        }
    }, [models])

    return (
        <>
            {
                (display.includes("detailed") && pModels && pModels.length > 1) &&
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
                                    <article className={`ModelContent ${product._id === model._id ? 'SelectedModel' : ''}`}>
                                        <div className="ModelModel">
                                            {model.model}
                                        </div>
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
