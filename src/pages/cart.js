import React from 'react'
import { Main } from 'styles/View/ViewStyles'
import { Section } from 'components/Section/Section'
import { CartTotal } from 'components/Section/CartTotal'
import { CartTitle } from 'components/Section/CartTitle'
import { CartSection } from 'styles/Cart/CartStyles'
import { CartProducts } from 'components/CartProducts'
import { AddToCart } from 'components/Product/AddToCart'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import roundNumber from 'utils/roundNumber'
import { Separator } from 'styles/Separator'
import { Layout } from 'layout/Layout/Layout'

const Cart = () => {
  const total = useSelector(state => state.data.total)
  const cart = useSelector(state => state.data.cart)
  const router = useRouter()
  const handleGoTo = () => {
    if(cart.length > 0){
     router.push("/contact") 
    } else {
      alert("Agrega un producto a tu carrito para continuar.")
    }
  }

  return (
    <Main>
      <Section
        Left={CartTitle}
        Right={CartTotal}
        text={"Tu Carrito"}
      >
        <CartSection>
        
        {
         cart.length > 0
         ?
         <CartProducts />
         :
         <CartProducts>
          <div style={{fontWeight: "700"}}>Tu carrito está vacío.</div>
         </CartProducts>
        }
          
          <div className="CartInfo">

            <div className="cartResumeContent">
              <h4>Resumen de tu Pedido</h4>
              <div className="cartResumeLine"><p>Subtotal</p> {<span>${roundNumber(total[1])}</span>}</div>
              { }
              <div className="cartResumeLine"><p>Descuentos</p> <span className="detailDiscount">${roundNumber(total[2])}</span></div>
              <Separator/>
              <div className="cartResumeLine"><h4>Total</h4><h4> ${roundNumber(total[0])}</h4></div>
            </div>


            <div className="GoToContactInfo">
              <AddToCart
                className="detailed"
                redirectFunction={handleGoTo}
                text="Continuar a Datos de Contacto"
              />
              <p>El total no incluye impuestos o costos de envío.</p>
            </div>
          </div>

        </CartSection>
      </Section>
    </Main>
  )
}

export default Cart

Cart.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
