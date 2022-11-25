import React from 'react'
import { Main } from 'styles/View/ViewStyles'
import { Section } from 'components/Section/Section'
import { CartTitle } from 'components/Section/CartTitle'
import { CartSection } from 'styles/Cart/CartStyles'
import { AddToCart } from 'components/Product/AddToCart'
import { useSelector } from 'react-redux'
import roundNumber from 'utils/roundNumber'
import { ContactForm } from 'styles/Contact/Contact'
import { Layout } from 'layout/Layout/Layout'

const Contact = () => {
  const cart = useSelector(state => state.data.cart)
  const total = useSelector(state => state.data.total)
  const right = () => {
    <></>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("entrando")
    let cartInfo = cart.map((product) => {
      return `%0AProducto%3A%20${product.name}%20%0ACantidad%3A%20${product.quantity}%20%0APrecio%3A%20$${product.price}%20%0A---`
    })
    let cartInfoString = cartInfo.join().replace(/\s/g, "%20")
    let radioButtons = Object.values(e.target).filter((input) => input.checked)
    window.open(
      `https://api.whatsapp.com/send?phone=584246114465&text=
      %0A*@marateca.ve*
      %20%0A--------------------------------
      %0A*Carrito*
      ${cartInfoString}
      %20%0ASubtotal%3A%20$${roundNumber(total[1])}
      %20%0ADescuentos%3A%20$${roundNumber(total[2])}
      %20%0ATotal%3A%20$${roundNumber(total[0])}
      %20%0A--------------------------------
      %0A*Pedido*
      %0ANombre%3A%20${e.target[0].value}
      %20%0ATelefono%3A%20${e.target[1].value}
      %20%0ACorreo%3A%20${e.target[2].value}
      %20%0AForma%20de%20pago%3A%20${radioButtons[0].value}
      %20%0AOpciones%20de%20Entrega%3A%20${radioButtons[1].value}
      %20%0ADireccion%3A%20${e.target[11].value}
      %20%0ANotas%3A%20${e.target[12].value}
      `
      , '_blank')
  }

  return (
    <Main>
      <Section
        Left={CartTitle}
        Right={right}
        text={"Datos de Contacto"}
      >
        <CartSection>
          <ContactForm onSubmit={(e) => handleSubmit(e)}>
            <section className="ContactForm__Section">
              <h4>Datos personales</h4>
              <label>
                Nombre y apellido:
                <input required type="text" name="name" placeholder="Nombre y apellido" />
              </label>
              <label>
                Teléfono móvil:
                <input required type="text" name="phone" placeholder="Teléfono móvil" />
              </label>
              <label>
                Correo:
                <input required type="email" name="email" placeholder="Correo electrónico" />
              </label>
            </section>

            <section className="ContactForm__Section">
              <h4>Forma de pago</h4>
              <label>
                <input required type="radio" name="payment" value="efectivo" />
                Efectivo
              </label>
              <label>
                <input type="radio" name="payment" value="pagoMovil" />
                Pago móvil
              </label>
              <label>
                <input type="radio" name="payment" value="zelle" />
                Zelle
              </label>
              <label>
                <input type="radio" name="payment" value="binance" />
                Binance
              </label>
              <label>
                <input type="radio" name="payment" value="otro" />
                Otro / Mixto
              </label>
            </section>

            <section className="ContactForm__Section">
              <h4>Opciones de Entrega</h4>
              <label>
                <input required type="radio" name="pickup" value="tienda" />
                Retiro en tienda
              </label>
              <p className="pickupP">- Sector Santa Rosalía, Av. 17, a 1 calle del Mercado Santa Rosalía, frente a Repuestos El Pinguino. Edif. Bracho Hnos., Local “Masilca”. Referencia: detrás del C.C. Gran Bazar. <a href="https://goo.gl/maps/gez1csbHXam3rL1HA" target="_blank">Dirección GPS</a></p>
              <label>
                <input type="radio" name="pickup" value="losOlivos" />
                Retiro en Urb. Los Olivos
              </label>
              <p className="pickupP">- Urb. Los Olivos. Referencia: Urb. frente al C.C. Galerías. </p>
              <label>
                <input type="radio" name="pickup" value="delivery" />
                Delivery
              </label>
              <p className="pickupP">- Delivery seguro con <a href="https://www.instagram.com/pideundomi/?hl=es" target="_blank">@pideundomi</a> Vía Whatsapp le indicaremos el costo del delivery, de acuerdo a la zona donde se encuentre.</p>
            </section>

            <section className="ContactForm__Section">
              <h4>Dirección</h4>
              <label>
                Dirección escrita:
                <input required type="text" name="address" placeholder="El costo del delivery se fija según tu ubicación" />
              </label>
              <label>
                Notas:
                <input type="text" name="notas" placeholder="Alguna indicación adicional" />
              </label>
              <label className="direccionMasTarde">
                <input type="checkbox" value="direccionMasTarde" />
                La indicaré al vendedor más tarde
              </label>
            </section>

            <section className="ContactForm__Section">
              <AddToCart
                type="submit"
                className="nextToContactButton"
                text="Realizar pedido"
              />
              <p>Al hacer clic en Realizar pedido, usted será redirigido a Whatsapp, con un mensaje que contiene los datos de su orden.</p>
              <p>Debe enviar el mensaje dentro del chat y nosotros a la brevedad responderemos, para coordinar la entrega y el pago del producto.</p>
            </section>
          </ContactForm>
        </CartSection>
      </Section>
    </Main>
  )
}

export default Contact

Contact.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }