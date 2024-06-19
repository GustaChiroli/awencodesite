import Image from "next/image";
import { PhoneCall } from 'lucide-react'
const NavBar = () => {
    return (
        <div className="w-screen flex justify-center items-center h-[124.6px] px-[70px] py-7">
            <div className="flex justify-between w-screen h-[68.59px]">
                <div className="flex justify-start grid-cols-8">
                    <div className="flex justify-start items-center mr-[1.5em] w-[180px]">
                        <Image src={'/images/logo.png'} alt="logo" width={128} height={35}/> 
                    </div>
                    <div className="flex justify-start items-center w-[276px]">
                        <a href="" className=" text-lg m-[0.8em] border-b-2 border-black"><span className="">Inicio</span></a>
                        <a href="" className=" text-lg m-[0.8em] navbarhover-animation"><span>Sobre</span></a>
                        <a href="" className=" text-lg m-[0.8em] navbarhover-animation"><span>Contato</span></a>
                    </div>
                    <div></div>
                </div>
                <div className="flex justify-end items-center grid-cols-4">
                    <div className="flex justify-center items-center text-center">
                        <div className="bg-[#1F1F1F] rounded-full w-[39px] h-[39px] flex justify-center text-center items-center mx-auto">
                            <PhoneCall className="text-center" height={39} width={19.98} color="white"/>
                        </div>
                        <div className="ml-[0.7em]">
                            <span className=" text-2xl">1 800 458 56 97</span>
                        </div>
                    </div>
                    <div className="flex justify-end items-center ml-[1.5em] w-[157px] cursor-pointer">
                        <div className="flex justify-center items-center h-[47px] w-[133.75px] bg-[#1955E0] rounded-full">
                            <a href="">
                                <span className="text-white font-semibold text-sm">
                                    Let's Talk
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;