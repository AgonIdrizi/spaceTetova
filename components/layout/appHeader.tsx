import Link from "next/link";

const NavItems = (
  <>
    <div>events</div>
    <div>about</div>
    <div>kontakt</div>
  </>
);

const AppHeader = () => {
  return (
    <div className="flex justify-between items-center mx-auto px-5 h-[80px]">
      <img src="/logo-space-tetova.svg" className="w-[52px] h-[52px]" />
      <nav className="flex gap-10">
        <div className="cursor-pointer hover:text-gray-400">events</div>
        <div className="hover:text-gray-400 cursor-pointer">about</div>
        <div className="hover:text-gray-400 cursor-pointer">kontakt</div>
      </nav>
    </div>
  );
};

export default AppHeader;
