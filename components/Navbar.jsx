import Image from "next/image";
import { Dropdown, Space, Badge, Menu } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Navlink from "./Navlink";
import { CoffeTypes, linkList } from "@/utils/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = ({ totalQuantity }) => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 100);
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("data")) || [];
      setLocalStorageData(data);
    }
  }, [totalQuantity]);

  const cartMenu = (
    <Menu>
      <div id="mouse">
        {localStorageData.length > 0 ? (
          localStorageData.map((item, index) => (
            <Menu.Item key={index}>
              <div className="flex gap-[230px] justify-between">
                <p>{item.title}</p>
                <div className="flex gap-1 bg-[#b77b2e] rounded-md p-1 w-16">
                  <p className="flex justify-end px-3">{item.price}</p>
                </div>
              </div>
            </Menu.Item>
          ))
        ) : (
          <Menu.Item>No items in cart</Menu.Item>
        )}
      </div>
      <Menu.Item key="more-products">
        <div className="pl-2 flex justify-between items-center">
          <span>
            {localStorageData.length > 0
              ? `${localStorageData.length} Products in the Cart`
              : "0 Products in the Cart"}
          </span>
          <Link href="/cart">
            <button className="bg-addtocartcolor text-black hover:text-tahiti px-4 py-2 rounded-md ml-2">
              View My Shopping Cart
            </button>
          </Link>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[10] ${
        router.pathname === "/cart" ? "bg-dark" : ""
      }`}
    >
      <div
        className={`${
          navbar ? "bg-dark" : "bg-opacity-0"
        } duration-700 backdrop-blur-md bg-opacity-60 font-semibold text-tahiti mt-4-600 pr-12 pl-4 pt-1 pb-1`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/transparentGIF.gif" alt="logo" width={135} height={135} />
            <span className="text-2xl font-bold ml-2">Daily Roast</span>
          </div>
          <div>
            <ul className="flex gap-4 text-lg text-white">
              {linkList.map((link) => {
                if (link.title === "Menu") {
                  return (
                    <Dropdown
                      key={link.id}
                      arrow
                      menu={{
                        items: CoffeTypes.map((data) => ({
                          key: data.id,
                          label: (
                            <Navlink
                              key={data.id}
                              href={data.href}
                              title={data.title}
                            />
                          ),
                        })),
                      }}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="cursor-pointer text-white hover:text-menuitemcolor">
                          Menu
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  );
                }
                return (
                  <Navlink
                    key={link.id}
                    href={link.href}
                    title={link.title}
                  />
                );
              })}
              {router.pathname !== "/cart" && (
                <Dropdown overlay={cartMenu}>
                  <Badge
                    className="duration-300 hover:scale-150"
                    count={totalQuantity}
                    offset={[10, 0]}
                  >
                    <ShoppingCartOutlined style={{ fontSize: 24, color: "white" }} />
                  </Badge>
                </Dropdown>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
