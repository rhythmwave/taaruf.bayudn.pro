import { NavigationBar } from "@/components/navigation-bar";
import { TaarufHeroSection } from "@/components/taaruf-hero";
import { TaarufAboutSection } from "@/components/taaruf-about";
import { TaarufFamilySection } from "@/components/taaruf-family";
import { TaarufValuesSection } from "@/components/taaruf-values";
import { TaarufLookingForSection } from "@/components/taaruf-looking-for";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: "https://taaruf.bayudn.pro",
    sameAs: [profile.social.github, profile.social.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "Various clients and employers",
    },
    knowsAbout: [
      "Backend engineering",
      "Go",
      "Python",
      "Microservices",
      "DevOps",
      "Kubernetes",
      "AI/ML",
      "RAG",
    ],
  };

  return (
    <>
      <NavigationBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section id="home" aria-label="Hero" className="min-h-[85vh]">
          <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <TaarufHeroSection />
          </div>
        </section>

        <section id="about" aria-label="About" className="relative pb-12 pt-4 sm:pb-14 sm:pt-6 lg:pb-16 lg:pt-8">
          <div className="section-inner">
            <TaarufAboutSection />
          </div>
        </section>

        <section id="family" aria-label="Family" className="pb-12 pt-4 sm:pb-14 sm:pt-6 lg:pb-16 lg:pt-8">
          <div className="section-inner">
            <TaarufFamilySection />
          </div>
        </section>

        <section id="values" aria-label="Values" className="pb-12 pt-4 sm:pb-14 sm:pt-6 lg:pb-16 lg:pt-8">
          <div className="section-inner">
            <TaarufValuesSection />
          </div>
        </section>

        <section id="lookingFor" aria-label="Looking for" className="pb-12 pt-4 sm:pb-14 sm:pt-6 lg:pb-16 lg:pt-8">
          <div className="section-inner">
            <TaarufLookingForSection />
          </div>
        </section>

        <section id="contact" aria-label="Contact" className="pb-12 pt-4 sm:pb-14 sm:pt-6 lg:pb-16 lg:pt-8">
          <div className="section-inner">
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
