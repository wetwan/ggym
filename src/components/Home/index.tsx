/* eslint-disable react-hooks/rules-of-hooks */

import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:880px)");

  return (
    <section className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" id="home">
      {/* hero text and pic  */}
      <motion.div
        className="flex flex-col md:flex-row mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* hero header  */}

        <div className=" z-10 mt-32 md:basis-3/5">
          {/* heading  */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className=" relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:-z-20">
                <img src={HomePageText} alt="hero text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* buttons */}
          <motion.div
            className=" mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              join now
            </ActionButton>
            <AnchorLink
              className="uppercase text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              {" "}
              learn more
            </AnchorLink>
          </motion.div>
        </div>
        {/* hero image  */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="heroo image" className="" />
        </motion.div>
      </motion.div>
      {/* Sponsor */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className=" flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull" className="" />
              <img src={SponsorFortune} alt="fortune" className="" />
              <img src={SponsorForbes} alt="forbes" className="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default index;
