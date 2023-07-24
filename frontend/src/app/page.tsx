import TargetHit from "@/components/TargetHit"
import TypingTextAnimation from "@/components/TypingTextAnimation"
import LatestEvents from "@/components/LatestEvents"
import WhoWeAre from "@/components/WhoWeAre"
import Networking from "@/components/Networking"
import TextBackgroundAnimation from "@/components/TextBackgroundAnimation"
import Header from "@/components/Header"

export default function Home() {
  return (
    <>
      <TextBackgroundAnimation />
      <TargetHit />
      <TypingTextAnimation />
      <LatestEvents />
      <WhoWeAre />
      <Networking />
    </>
  )
}
