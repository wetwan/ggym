import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const Benifit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-6 py-16 w-full text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 p-4 border-gray-100 bg-primary-100 ">
          {icon}
        </div>
      </div>{" "}
      <h4 className="font-bold">{title}</h4>
      <p className="my-3  mx-auto">{description}</p>
      <AnchorLink
        className="uppercase text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        {" "}
        learn more
      </AnchorLink>
    </motion.div>
  );
};

export default Benifit;
