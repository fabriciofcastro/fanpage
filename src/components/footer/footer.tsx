"use client"

import Avatar from "@/components/footer/Avatar";
import Link from 'next/link';
import Links from '../../pages/header/links';
import Logo from '../logo';

export default function Footer() {

  return (
    <div className="py-8 px-28 max-w max-lg:px-10 bg-sky-500 dark:bg-sky-950">
      <div className="space-y-6 max-w-screen-2xl m-auto">

        <div className=" font-semibold relative flex pb-20 pt-6 flex-col items-center ">
          <p className="text-bg-blueDark-A1 text-5xl dark:text-bg-blueDark-A5 ">
            LET{`'`}S BUILD
          </p> <br />
          <div className="flex gap-4">
            <span className="text-bg-blueDark-A1 text-5xl dark:text-bg-blueDark-A5 ">
              TO
            </span>
            <div className="w-12 rounded-full">
              <Avatar username="fabriciofcastro" />
            </div>
            <span className="text-bg-blueDark-A1 text-5xl dark:text-bg-blueDark-A5">
              GETHER
            </span>
          </div>

        </div>
     
        <div className="flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex gap-4 max-lg:flex-col">
            <Links />
          </div>
        </div>
      </div>
    </div>
  )

}