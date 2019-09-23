import React from "react"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../../utils/hooks"
import FullLayout from "../../components/Layouts/Full"
import { Flex, Box, Text } from "rebass"
import { Title } from "../../components/Typography"
import Wordmark from "../../components/Navigation/Wordmark"
import PayItem from "../../components/Pay/PayItem"
import { graphql, useStaticQuery } from "gatsby"

var quotes = [
  <Text>
    Minum kopi bikin tenang, bayar utang{" "}
    <span css="text-decoration: underline">lebih</span> tenang.
  </Text>,
  <Text>
    Dilan, yang berat itu bukan rindu,{" "}
    <span css="text-decoration: underline">tapi nagih hutang!</span>
  </Text>,
  <Text>
    Hutang ibarat{" "}
    <span css="text-decoration: underline">laut yang tak terbatas.</span>
  </Text>,
]

function getMessage() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const PayPage = props => {
  const { title } = useSiteMetadata()

  const data = useStaticQuery(graphql`
    query {
      gopay: file(relativePath: { eq: "pay/gopay.png" }) {
        childImageSharp {
          fixed(height: 29) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dana: file(relativePath: { eq: "pay/dana.png" }) {
        childImageSharp {
          fixed(height: 29) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bca: file(relativePath: { eq: "pay/bca.png" }) {
        childImageSharp {
          fixed(height: 29) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ovo: file(relativePath: { eq: "pay/ovo.png" }) {
        childImageSharp {
          fixed(height: 29) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      jenius: file(relativePath: { eq: "pay/jenius.png" }) {
        childImageSharp {
          fixed(height: 29) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      qrgopay: file(relativePath: { eq: "pay/qr/gopay.jpg" }) {
        childImageSharp {
          fixed(height: 234, width: 234) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      qrbca: file(relativePath: { eq: "pay/qr/bca.jpg" }) {
        childImageSharp {
          fixed(height: 234, width: 234) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      qrdana: file(relativePath: { eq: "pay/qr/dana.jpg" }) {
        childImageSharp {
          fixed(height: 234, width: 234) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      qrovo: file(relativePath: { eq: "pay/qr/ovo.jpg" }) {
        childImageSharp {
          fixed(height: 117, width: 117) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>Pay Anything to Afnizar</title>
      </Helmet>

      <FullLayout>
        <Box
          py={4}
          pr={12}
          width={[1, "50%"]}
          height={[0, 1, 1]}
          css="z-index: 99; border-right: 1px solid #F0F0F0; position: fixed"
        >
          <Box px={[5]}>
            <Flex alignItems="center">
              <Wordmark />
            </Flex>

            <Title
              css="
                @media only screen and (max-width: 48em) {
                  display: none;
                }
              "
              fontSize={[4, 5, 6]}
              mt={["25%"]}
            >
              {getMessage()}
            </Title>
          </Box>
        </Box>
        <Box paddingLeft={[0, "50%"]}>
          <Box paddingTop={[7, 5]} px={[5]}>
            <PayItem
              imgsrc={data.gopay.childImageSharp.fixed}
              imgalt="GoPay"
              qrimgsrc={data.qrgopay.childImageSharp.fixed.src}
              qrimgalt="GoPay"
              username="Afnizar Nur Ghifari"
              description="Gw saranin sih pake GoPay, biar bisa buat ngojek gitu. Jadi bayar
              kesini aja ya."
            />
            <PayItem
              imgsrc={data.bca.childImageSharp.fixed}
              imgalt="BCA"
              qrimgsrc={data.qrbca.childImageSharp.fixed.src}
              qrimgalt="BCA"
              username="Afnizar Nur Ghifari"
              description="Selain GoPay, gw juga seneng kalo lu ngirimin duit ke BCA. Biar enak aja sih."
            />
            <PayItem
              imgsrc={data.dana.childImageSharp.fixed}
              imgalt="DANA"
              qrimgsrc={data.qrdana.childImageSharp.fixed.src}
              qrimgalt="DANA"
              username="Afnizar Nur Ghifari"
              description="DANA juga boleh tapi gw ga nyaranin. Soalnya gw jarang banget jajan pake DANA hehe."
            />
            <PayItem
              imgsrc={data.ovo.childImageSharp.fixed}
              imgalt="OVO"
              qrimgsrc={data.qrovo.childImageSharp.fixed.src}
              qrimgalt="OVO"
              username="Afnizar Nur Ghifari"
              description="Suka jajan di kafe sebelah atau kemang village pake OVO. Kirim kesini juga oke deh."
            />
            <PayItem
              imgsrc={data.jenius.childImageSharp.fixed}
              imgalt="Jenius"
              username="$afnizarnur"
              description="Kalo jenius gw boleh banget. Karena gw suka make nih jenius. Lumayan buat beli software apa buat langganan spotify."
            />
          </Box>
        </Box>
      </FullLayout>
    </>
  )
}

export default PayPage
