import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { TranslationLoader } from "@/components/ui/translation-loader";

export default function Hero() {
  const { t, isLoading } = useTranslations("home");
  // Fonction de défilement fluide personnalisée
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    // Position de l'élément cible
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    // Position actuelle
    const startPosition = window.scrollY;
    // Distance à parcourir
    const distance = targetPosition - startPosition;
    // Durée de l'animation en ms
    const duration = 800;
    // Heure de début
    let startTime: number | null = null;
    
    // Fonction d'animation
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Fonction d'accélération/décélération
      const easeInOutQuart = (t: number) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      };
      
      window.scrollTo(0, startPosition + distance * easeInOutQuart(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    requestAnimationFrame(animation);
  };
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <TranslationLoader isLoading={isLoading} fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="h-12 bg-muted w-3/4 rounded"></div>
              <div className="h-6 bg-muted w-2/3 rounded"></div>
              <div className="h-6 bg-muted w-1/2 rounded"></div>
              <div className="flex gap-4 mt-4">
                <div className="h-10 bg-muted w-32 rounded"></div>
                <div className="h-10 bg-muted w-32 rounded"></div>
              </div>
            </div>
          </div>
        }>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none mb-6">
                {t("hero.title")}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="animate-scale-in" style={{ animationDelay: "0.2s" }} asChild>
                  <Link href="/contact">{t("hero.ctaGetStarted")}</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="animate-scale-in" 
                  style={{ animationDelay: "0.3s" }} 
                  onClick={() => scrollToSection("about")}
                >
                  {t("hero.ctaLearnMore")}
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:flex justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur rounded-lg"></div>
                <Image
                  src="/images/home/hero1.png"
                  alt={t("hero.title")}
                  className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  width={500}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </TranslationLoader>
      </div>
    </section>
  );
}
