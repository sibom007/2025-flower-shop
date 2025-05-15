import { Separator } from "./ui/separator";
interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="text-center  mx-auto max-w-60 mb-2">
      <h1 className="font-medium text-3xl">{title}</h1>
      <Separator className=" bg-orangeTheme-200" />
    </div>
  );
}

export default Header;
