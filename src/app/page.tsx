import { SignInIcon } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@unidash/assets/svgs/Logo";
import { LinkButton } from "@unidash/components/LinkButton";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import Image from "next/image";
import { Tabs, TabsContent } from "@unidash/components/Tabs";
import { CHARTS_CATEGORIES } from "./(private)/dashboard/_components/ChartTabsList/chartsTabsList.constant";
import { Toolbar } from "./(private)/_components/Toolbar";
import { ChartTabsList } from "./(private)/dashboard/_components/ChartTabsList";
import { CourseContent } from "./(private)/dashboard/_contents/CourseContent";
import { CoordinationContent } from "./(private)/dashboard/_contents/CoordinationContent";
import { IngressContent } from "./(private)/dashboard/_contents/IngressContent";
import { ConclusionContent } from "./(private)/dashboard/_contents/ConclusionContent/inidex";
import { ActivitiesContent } from "./(private)/dashboard/_contents/ActivitiesContent";
import { InternshipsContent } from "./(private)/dashboard/_contents/InternshipsContent";
import { ProductionsContent } from "./(private)/dashboard/_contents/ProductionsContent";
import { CourseSelect } from "./(private)/_components/CourseSelect";
export default function LandingPage() {
  return (
    <main className="3xl:max-w-[1920px] p-8 3xl:mx-auto relative">
      <section
        className="bg-sidebar p-12 rounded-3xl flex flex-col items-center gap-6 relative"
        id="home"
      >
        <header className="flex items-center justify-between w-full">
          <Logo />

          <nav className="flex items-center gap-8">
            <LinkButton
              href="#home"
              className="text-sidebar-foreground"
              size="lg"
            >
              Início
            </LinkButton>

            <LinkButton
              href="#dashboard"
              className="text-sidebar-foreground"
              size="lg"
            >
              Dashboard
            </LinkButton>
          </nav>

          <LinkButton href={APP_ROUTES.public.login} variant="filled" size="lg">
            <SignInIcon />
            Entrar
          </LinkButton>
        </header>

        <h1 className="mt-18 text-5xl/16 max-w-5xl text-center text-sidebar-foreground font-title line-he">
          Gestão acadêmica inteligente, transparente e{" "}
          <span className="font-bold">baseada em dados</span>
        </h1>

        <p className="text-lg text-sidebar-foreground max-w-3xl text-center">
          Transforme informações institucionais em decisões estratégicas com
          dashboards interativos, claros e acessíveis.
        </p>

        <div className="flex items-end justify-center gap-8 w-full mt-20">
          <Image
            src="/section-chart.png"
            alt="Dashboard com métricas e indicadores do curso"
            width={433}
            height={249}
            className="rounded-2xl drop-shadow-xl "
          />

          <Image
            src="/dashboard.png"
            alt="Dashboard com métricas e indicadores do curso"
            width={700}
            height={500}
            className="rounded-2xl drop-shadow-xl -mb-42"
          />
        </div>
      </section>

      <section className="w-full pt-32 pb-8 flex flex-col gap-8" id="dashboard">
        <CourseSelect />

        <Tabs defaultValue={CHARTS_CATEGORIES.COURSE}>
          <Toolbar>
            <ChartTabsList />
          </Toolbar>

          <TabsContent
            value={CHARTS_CATEGORIES.COURSE}
            className="flex flex-col gap-4 md:gap-8"
          >
            <CourseContent />
          </TabsContent>

          <TabsContent
            value={CHARTS_CATEGORIES.COORDINATION}
            className="flex flex-col gap-4 md:gap-8"
          >
            <CoordinationContent />
          </TabsContent>

          <TabsContent
            value={CHARTS_CATEGORIES.INGRESS}
            className="flex flex-col gap-4 md:gap-8"
          >
            <IngressContent />
          </TabsContent>

          <TabsContent
            value={CHARTS_CATEGORIES.CONCLUSION}
            className="flex flex-col gap-4 md:gap-8"
          >
            <ConclusionContent />
          </TabsContent>

          <TabsContent
            value={CHARTS_CATEGORIES.ACTIVITIES}
            className="flex flex-col gap-4 md:gap-8"
          >
            <ActivitiesContent />
          </TabsContent>

          <TabsContent
            value={CHARTS_CATEGORIES.INTERNSHIPS}
            className="flex flex-col gap-4 md:gap-8"
          >
            <InternshipsContent />
          </TabsContent>

          <TabsContent
            value={CHARTS_CATEGORIES.PRODUCTIONS}
            className="flex flex-col gap-4 md:gap-8"
          >
            <ProductionsContent />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
