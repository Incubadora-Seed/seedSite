import TypingTextAnimation from "@/components/TypingTextAnimation"
import WhoWeAre from "@/components/WhoWeAre"
import Networking from "@/components/Networking"
import TextBackgroundAnimation from "@/components/TextBackgroundAnimation"
import Header from "@/components/Header"
import Support from "@/components/Support"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <TextBackgroundAnimation />
      <TypingTextAnimation />
      
      <WhoWeAre />
      <Networking />
      <Support />
      <Footer />
    </>
  )
}
