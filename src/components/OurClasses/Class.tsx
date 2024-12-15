/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, image, description }: Props) => {
  const overLayStyles = `p-5 absolute z-30 whitespace-normal flex h-[380px] w-[450px] flex-col items-center justify-center  bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 `
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
     <div className={`${overLayStyles}`}>
      <p className="text-2xl">{name}</p>
      <p className="mt-5 w-4/5 mx-auto">{description}</p>
     </div>
     <img src={image} alt='class image' className=""  />
    </li>
  );
};

export default Class;
