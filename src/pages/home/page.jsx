import { useTranslation } from "react-i18next";
import Header from "../../components/header";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="text-black body-font lg:pt-20 flex justify-center items-center h-max">
        <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full mb-2 text-left md:text-center ">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
              <span>{t("We are making")} </span>
              <br className="hidden lg:block"></br>
              {t("Stunning websites")}
            </h1>
            <br></br>
          </div>
        </div>
      </section>
    </>
  )
}