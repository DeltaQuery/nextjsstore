import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Layout } from 'layout/Layout/Layout'
import { HeroBanner } from 'components/HeroBanner'
import { SliderList } from 'components/SliderList'
import { Section } from 'components/Section/Section'
import { Main } from 'styles/View/ViewStyles'
import { Instagram } from 'components/Instagram'
import { Categories } from 'components/Categories'
import { SectionTitle } from 'components/Section/SectionTitle'

const API = 'https://api.escuelajs.co/api/v1/products'

export async function getStaticProps(context) {
  //const res = await fetch('https://api.escuelajs.co/api/v1/products')
  //const data = await res.json()
  const data = null
  return {
    props: { data },
  }
}

export default function Home({ data }) {

  return (
    <>
    <HeroBanner/>
    <Main>    
      <Section
        text="¡Ofertas on fire! ⏰"
        category={50}
        >
          <SliderList
          category={50}
          />
        </Section>
        {/*<Promo
          img1={deal4}
          img2={deal5}
          img3={deal6}
        />*/}

<Section
        text="¡Lo mejor en Gaming! 🎮"
        category={10}
        >
        <SliderList
          category={10}
          />
        </Section>

        {/*<Promo
          img1={deal1}
          img2={deal2}
          img3={deal3}
    />*/}

        <Section
        text="¡Últimas novedades! 🔥"
        category={52}
        >
        <SliderList
          category={52}
          />
        </Section>

        {/*<Banner img={delivery} />*/}

        <Section
        text="¡Más vendidos! 🌟"
        category={53}
        >
        <SliderList
          category={53}
          />
        </Section>

        <Section
        Left={SectionTitle}
        text="Categorías">
          <Categories/>
        </Section>

        <Section
        Left={SectionTitle}
        text="¡Síguenos en Instagram!">
          <Instagram/>
    </Section>
    </Main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}