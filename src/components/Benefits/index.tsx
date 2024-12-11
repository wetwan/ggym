/* eslint-disable @typescript-eslint/no-unused-vars */
import Htext from "@/shared/Htext";
// import
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import Benifit from "./Benifit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageImage from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const index = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefit" className="mx-auto min-h-full p-3 -z-10">
      <motion.div
        className=" container w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefit)}
      >
        {/* benefit header  */}
        <div className="md:my-5 md:w-3/5">
          <Htext>more then just a gym</Htext>
          <p className="my-5 text-sm  ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
        {/* benefit cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="flex w-full flex-col sm:flex-row items-center gap-8 justify-between mt-5"
        >
          {benefits.map((benefit: BenefitType, i) => (
            <Benifit
              key={i}
              icon={benefit.icon}
              description={benefit.description}
              title={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* benefit image and description  */}
        <div className=" mt-16 md:mt-28  items-center justify-between gap-20 flex flex-col md:flex-row">
          {/* image  */}
          <motion.img 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{delay:0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          src={BenefitPageImage} alt="benefit image" className="mx-auto" />

          {/* description  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{delay:0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=""
          >
            {/* title  */}
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-10 before:content-abstractwaves">
                <div className="">
                  <Htext>
                    {" "}
                    millions of happy memeber getting{" "}
                    <span className="text-red-500 "> fit</span>
                  </Htext>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="">
              <p className="my-5">
                {" "}
                Veritatis dicta autem sapiente, voluptate eius consectetur
                itaque, hic dolore corrupti, ad illum facilis consequatur unde
                inventore pariatur consequuntur labore quaerat. Veniam sint
                vitae eveniet voluptate reiciendis illum nam fugit debitis
                voluptatem, perferendis, eaque cum, quia doloribus!
                Perspiciatis, tenetur pariatur dolores eveniet laboriosam
                provident molestiae eos in iure{" "}
              </p>
              <p className="mb-5">
                Repellat odit explicabo officiis quas obcaecati qui officia
                aspernatur optio voluptatem doloremque est! Aliquam ipsam nam
                voluptate ullam iste, voluptatum, accusantium quam aliquid eaque
                atque quas quae distinctio natus omnis error ratione est itaque
                laboriosam, suscipit voluptatibus sit quo enim. Laborum quod
                perferendis maxime.
              </p>
            </div>
            {/* button  */}
            <div className="relative mt-16 pb-10 z-20">
              <div className="before:absolute before:-bottom-20 before:right-40 before:content-sparkles">
                <ActionButton  setSelectedPage={setSelectedPage}>
                  join now
                </ActionButton>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
