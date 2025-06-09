import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { TranslationLoader } from "@/components/ui/translation-loader";
import { ClientLogoSlider } from "@/components/ui/client-logo-slider";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

export default function Hero() {
  const { t, isLoading } = useTranslations("home");
  const isMobile = useMediaQuery("(max-width: 768px)");
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
    <section className="bg-background text-foreground py-12 md:py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
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
            <motion.div 
              className="lg:col-span-7"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none mb-6 text-foreground">
                {t("hero.title")}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact">{t("hero.ctaGetStarted")}</Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary/20 hover:border-primary/40 text-foreground hover:bg-primary/5 transition-all duration-300"
                    onClick={() => scrollToSection("about")}
                  >
                    {t("hero.ctaLearnMore")}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5 hidden lg:flex justify-end"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur rounded-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/home/hero1.png"
                    alt={t("hero.title")}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                    width={500}
                    height={600}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Client Logo Slider */}
          <motion.div 
            className="mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ClientLogoSlider />
          </motion.div>
        </TranslationLoader>
      </div>
    </section>
  );
}
