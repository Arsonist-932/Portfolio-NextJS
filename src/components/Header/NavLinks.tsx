import Link from "next/link";
import { LinkMenuType } from "./Navbar";
import IconSocial from "../IconSocials";

const NavLinks = ({ Links, ModifyState }: NavLinksProps) => {
  return (
    <>
      <ul>
        {Links.map((link: LinkMenuType, index: number) => (
          <li key={link.title}>
            <Link
              href={link.path}
              onClick={() => {
                ModifyState?.();
              }}
            >
              {link.title}
            </Link>
          </li>
        ))}

        <IconSocial
          width={30}
          height={30}
          ModifyValue={() => {
            ModifyState?.();
          }}
        />
      </ul>
    </>
  );
};

export default NavLinks;

interface NavLinksProps {
  Links: LinkMenuType[];
  ModifyState?: () => void;
}
