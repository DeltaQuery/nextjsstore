import { useState } from 'react'
import { Layout } from 'layout/Layout/Layout'
import { HeroBanner } from 'components/HeroBanner'
import { SliderList } from 'components/SliderList'
import { Section } from 'components/Section/Section'
import { Main } from 'styles/View/ViewStyles'
import { Instagram } from 'components/Instagram'
import { Categories } from 'components/Categories'
import { SectionTitle } from 'components/Section/SectionTitle'
import { Promo } from 'components/Promo'
import { Banner } from 'components/Banner'
import { API } from 'services/API'
import delivery from "assets/banners/delivery.jpg"
import deal1 from "assets/banners/deal1.jpg"
import deal2 from "assets/banners/deal2.png"
import deal3 from "assets/banners/deal3.png"
import deal4 from "assets/banners/deal4.jpg"
import deal5 from "assets/banners/deal5.jpg"
import deal6 from "assets/banners/deal6.jpg"
import ps5 from "assets/banners/ps5-Ragnarog-post.jpg"
import airpods from "assets/banners/Airpods-post.jpg"
import AdminAlert from 'components/AdminAlert'
import PCBuilderAlert from 'components/PCBuilderAlert'
import "swiper/css/bundle"
import { Whatsapp } from 'components/Whatsapp'

const MoreIG = () => {
  return <a href="https://www.instagram.com/marateca.ve/?hl=es" target="blank" className="MoreLink">
    Ver más
  </a>
}

export async function getStaticProps() {
  const res = await fetch(`${API}/products`)
  const data = await res.json()
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  const [openA, setOpenA] = useState(true)
  const [openP, setOpenP] = useState(true)
  
  return (
    <>
      <HeroBanner />
      <Main>
        { openA && <AdminAlert open={openA} setOpen={setOpenA}/> }
        { openP && <PCBuilderAlert open={openP} setOpen={setOpenP}/> }
        <Section
          text="¡Ofertas on fire! ⏰"
          category={50}
        >
          <SliderList
            category={50}
            data={data}
          />
        </Section>

        <Promo
          img1={deal4}
          img2={deal5}
          img3={deal6}
        />

        <Section
          text="¡Lo mejor en Gaming! 🎮"
          category={10}
        >
          <SliderList
            category={10}
            data={data}
          />
        </Section>

        <Promo
          img1={ps5}
          img2={deal2}
          img3={airpods}
        />

        <Section
          text="¡Últimas novedades! 🔥"
          category={52}
        >
          <SliderList
            category={52}
            data={data}
          />
        </Section>

        <Banner img={delivery} />

        <Section
          text="¡Más vendidos! 🌟"
          category={53}
        >
          <SliderList
            category={53}
            data={data}
          />
        </Section>

        <Section
          Left={SectionTitle}
          text="Categorías">
          <Categories />
        </Section>

        <Section
          Left={SectionTitle}
          Right={MoreIG}
          text="¡Síguenos en Instagram!">
          <Instagram />
        </Section>
      </Main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <Whatsapp/>
    </Layout>
  )
}