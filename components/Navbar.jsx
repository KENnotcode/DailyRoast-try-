import Image from "next/image"
import Navlink from "./Navlink"

import {Dropdown, Space} from "antd"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import {CoffeTypes, linkList} from "@/utils/link"
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed z-[10] text-black mt-4-600 w-2/4 bg-opacity-90 pr-7 pl-4">
        <div className="flex justify-between items-center">
            <div>
                <Image src="/BASTAlogo.png" alt="logo" width={70} height={70}/>
            </div>
            <div>
            <ul className="flex gap-4 text-lg">
                {linkList.map((link) => {
                    if(link.title==="Menu"){
                       return(
                        <Dropdown
                        arrow
                        menu={{items:CoffeTypes.map(data=>({key:data.id, label:
                            <Navlink key={data.id} href={data.href} title={data.title}/>}))}}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Space className=' text-white'>
                            Menu
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                       ) 
                    }
                    return (
                        <Navlink key={link.id} href={link.href} title={link.title}/>
                    )
                })}
                <div className="cursor-pointer" onClick={() => router.push("/checkout") }>
                  <Image src="/CARTicon.png"  alt="logo" width={30} height={30}/>
                </div>
            </ul>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar