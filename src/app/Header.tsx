import { Button } from "@/components/button/Button";
import { MenuItem } from "@/components/menuItem/MenuItem";
import { List } from "phosphor-react";

const Header = () => {
  const headerMenus = [
    {
      label: "Home",
      hasSubMenu: false,
      url: "/",
    },
    {
      label: "Model",
      hasSubMenu: true,
      url: "/model",
    },
    {
      label: "Be a Partner",
      hasSubMenu: true,
      url: "/be-a-partner",
    },
    {
      label: "More",
      hasSubMenu: true,
      url: "/more",
    },
  ];

  return (
    <header className="absolute top-9 left-0 w-full">
      <div className="container px-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex md:hidden">
            <List size={32} weight="fill" color="#ffffff" />
          </div>
          <div className="hidden md:flex flex-1 items-center">
            {headerMenus?.length && (
              <ul className="inline-flex items-center">
                {headerMenus.map((menu, index) => {
                  return (
                    <li
                      className={index + 1 < headerMenus.length ? "mr-8" : ""}
                      key={index}
                    >
                      <MenuItem {...menu} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-8">
            <MenuItem label="Login" url="/login" />
            <Button label="Join Our Discord" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
