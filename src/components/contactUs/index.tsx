/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactImage from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="" id="contactus">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto w-5/6 pt-24 pb-32 p-3"
      >
        {/* header contact  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <Htext>
            <span className="text-primary-500">join now</span> to get in shape{" "}
          </Htext>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et
            quia ratione pariatur cum dicta commodi ea, sapiente vitae nisi!
          </p>
        </motion.div>
        {/* conat form aND IMAGE  */}
        <div className="mt-10 flex flex-col items-start  gap-8 justify-between sm:flex-row">
          <motion.div
            className="mb-10 basis-3/5  md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              action="https://formsubmit.co/35576b6b245944277134ba170ef52b2b"
              method="POST"
              target="blank"
              onSubmit={onSubmitForm}
            >
              <input
                type="text"
                className="placeholder-shown:uppercase my-5 w-full rounded border outline-none bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This feild is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 charx."}
                </p>
              )}
              <input
                type="email"
                className="w-full rounded border outline-none bg-primary-300 px-5 py-3 placeholder-white placeholder-shown:uppercase mb-5"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className="w-full rounded border outline-none bg-primary-300 px-5 py-3 placeholder-white placeholder-shown:uppercase mb-5"
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 sm:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactImage}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
