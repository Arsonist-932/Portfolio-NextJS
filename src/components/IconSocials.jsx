import socialsLink from "@/data/socialsLink";
import Image from "next/image";
import Link from "next/link";

const IconSocials = ({ width, height }) => {
  return (
    <>
      <ul className="socials flex flex-row justify-center gap-2">
        {socialsLink.map((item, index) => (
          <li key={index} className="flex">
            <Link href={item.Url} target="_blank">
              <Image
                src={item.image}
                alt={item.title}
                width={width}
                height={height}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IconSocials;
