import Image from "next/image";
import Link from "next/link";

const IconSocial = ({ ModifyValue, width, height }: IconSocialProps) => {
  return (
    <>
      <li className="social">
        {Icon.map((icon: IconType, index: number) => (
          <Link
            key={index}
            href={icon.url}
            target="_blank"
            onClick={() => {
              ModifyValue?.();
            }}
          >
            <Image
              src={icon.image}
              alt={icon.alt}
              width={width}
              height={height}
              priority
            />
          </Link>
        ))}
      </li>
    </>
  );
};

export default IconSocial;

const Icon = [
  {
    title: "Github",
    image: "/images/icons/icons/github-icon.svg",
    url: "https://github.com/Arsonist-932",
    alt: "Github Icon",
  },
  {
    title: "LinkedIn",
    image: "/images/icons/icons/linkedin-icon.svg",
    url: "http://linkedin.com/in/alexandre-fortuné",
    alt: "Linnkedins Icon",
  },
  {
    title: "Whatsapp",
    image: "/images/icons/icons/whatsapp.svg",
    url: "https://wa.me/message/CAL2MSVT7G3PD1",
    alt: "Whatsapp Icon",
  },
];

type IconType = IconTypeProps;
interface IconTypeProps {
  title: string;
  image: string;
  url: string;
  alt: string;
}

interface IconSocialProps {
  ModifyValue?: () => void;
  width: number;
  height: number;
}
