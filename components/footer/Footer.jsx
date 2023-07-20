import Link from "next/link";
import React from "react";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full h-96 bg-gray-300 px-8 md:px-20 py-20">
      <div className="mx-auto flex flex-col md:flex-row gap-10 justify-between ">
        <div className="flex-1">
          <Link href="/">Logo</Link>
          <p className="text-xs leading-6 italic">
            Print Center, 2003 yılından beri açık hava reklamcılığı alanında;
            tabela, totem, kutu harf, araç giydirme, billboard baskı, kurumsal
            kimlik uygulamaları, promosyon ürünler, matbaa ve mimari yönlendirme
            uygulamaları başta olmak üzere birlikte çalıştığı markaların tüm
            kurumsal reklam ihtiyaçlarının dünya standartlarında üretim yapan
            bir firmadır.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-lg">Linkler</h2>
          <div className="w-1/3 h-0.5 bg-primary"></div>
          <ul className="text-xs gap-5 font-semibold flex flex-col mt-6">
            <li className="   ">
              <Link href="/about" className="hover:text-primary cursor-pointer">
                Hakkımızda
              </Link>
            </li>
            <li className=" ">
              <Link
                href="/machines"
                className="hover:text-primary cursor-pointer"
              >
                Makineler
              </Link>
            </li>
            <li className=" hover:text-primary cursor-pointer">
              <Link
                href="/referance"
                className="hover:text-primary cursor-pointer"
              >
                Referanslar
              </Link>
            </li>
            <li className=" hover:text-primary cursor-pointer ">
              <Link
                href="/contact"
                className="hover:text-primary cursor-pointer"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex flex-col flex-1 gap-5 sm:mt-0 mt-7">
            <div>
              <h2 className="text-lg">İletişim</h2>
              <div className="w-1/3 h-0.5 bg-primary"></div>
            </div>

            <p className="text-xs leading-6  italic">
              description
            </p>
            <div className="flex gap-3  place-items-center hover:text-primary">
              <MdLocalPhone />
              <a href={`tel:+902122121212`}>+902122121212</a>
            </div>
            <div className="flex text-md gap-3 place-items-center hover:text-primary">
              <MdEmail /> <a href={`mailto:mail`}>mail</a>
            </div>
            <div className="flex gap-3 place-items-center hover:text-primary">
              <MdLocationOn />
              <a href={`adres`}>
                <span>
                  Karaman Mah. Nergis Cad. No:4/B Merkez AFYONKARAHİSAR
                </span>
              </a>
            </div>
            <div className="flex gap-3 text-gray-400 text-3xl place-items-center">
              <a href="/" target="_blank" rel="noreferrer">
                <i className={`hover:text-primary cursor-pointer`}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
