import BackgroundAnimation from "@/components/BackgroundAnimation"
import TargetHit from "@/components/TargetHit"
import TypingTextAnimation from "@/components/TypingTextAnimation"
import LatestEvents from "@/components/LatestEvents"
import WhoWeAre from "@/components/WhoWeAre"
import Networking from "@/components/Networking"

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <TargetHit />
      <TypingTextAnimation />
      <LatestEvents />
      <WhoWeAre />
      <Networking />
    </>
  )
}
