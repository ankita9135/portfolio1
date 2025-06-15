import HeroSection from "@/components/hero-section"
import FeaturedProjects from "@/components/featured-projects"
import CaseStudies from "@/components/case-studies"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import SectionHeading from "@/components/section-heading"
import EducationSection from "@/components/education-section"
import WorkCertificationsSection from "@/components/work-certifications-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <div className="container mx-auto px-4 py-16 space-y-24">
        <section id="projects">
          <SectionHeading emoji="🚀">Featured Projects</SectionHeading>
          <FeaturedProjects />
        </section>

        <section id="case-studies">
          <SectionHeading emoji="📊">Case Studies</SectionHeading>
          <CaseStudies />
        </section>

        <section id="skills">
          <SectionHeading emoji="🛠️">Skills</SectionHeading>
          <SkillsSection />
        </section>

        <section id="education">
          <SectionHeading emoji="🎓">Education</SectionHeading>
          <EducationSection />
        </section>

        <section id="work-certifications">
          <SectionHeading emoji="💼">Work Experience & Certifications</SectionHeading>
          <WorkCertificationsSection />
        </section>

        <section id="contact">
          <SectionHeading emoji="📬">Contact</SectionHeading>
          <ContactSection />
        </section>
      </div>
    </main>
  )
}
