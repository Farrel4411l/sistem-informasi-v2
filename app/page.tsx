import { ScrollProgress } from "@/components/scroll-progress"
import { CustomCursor } from "@/components/custom-cursor"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProfileSection } from "@/components/sections/profile-section"
import { CurriculumSection } from "@/components/sections/curriculum-section"
import { AccreditationSection } from "@/components/sections/accreditation-section"
import { NewsSkillsSection } from "@/components/sections/news-skills-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { JoinSection } from "@/components/sections/join-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="pt-0">
        <HeroSection />
        <ProfileSection />
        <CurriculumSection />
        <AccreditationSection />
        <NewsSkillsSection />
        <PartnersSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  )
}
