import Link from "next/link";

interface IProps {
  isExternal: boolean | undefined;
  href: string;
  children?: JSX.Element;
  key?: string;
}

const CustomLink = ({ isExternal, href, children }: IProps) => {
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <a href={href}>{children}</a>
  );
};

export default CustomLink;
