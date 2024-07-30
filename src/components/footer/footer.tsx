"use client"

import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '../logo'
import Links from '../pages/home/header/links'

interface APIProps {
  name: string,
  avatar_url: string,
  login: string
  bio: string,
  location: string
}

const api = axios.create({
  baseURL: "https://api.github.com",
})


export default function Footer() {

  const [avatar, setAvatar] = useState<APIProps>()

  async function getUser() {
    try {
      const response = await api.get("/users/fabriciofcastro");

      setAvatar(() => response.data)
      console.log(response.data);

    } catch (error) {
      console.error(`${error} Servidor não responde`);
    }
  }

  useEffect(() => {
    4
    getUser()

  }, [])


  return (
    <div className="py-8 px-28 max-w bg-sky-500 dark:bg-sky-950">
      <div className="space-y-6 max-w-screen-2xl m-auto">

        <div className=" font-semibold relative flex pb-20 pt-6 flex-col items-center ">
          <p className="text-bg-blueDark-A1 text-5xl dark:text-bg-blueDark-A5 ">
            LET'S BUILD
          </p> <br />
          <div className="flex gap-4">
            <span className="text-bg-blueDark-A1 text-5xl dark:text-bg-blueDark-A5 ">
              TO
            </span>
            <div className="w-12 rounded-full">
              <img src={ avatar?.avatar_url } alt="Imagem Fabrício" className="rounded-full" />
            </div>
            <span className="text-bg-blueDark-A1 text-5xl dark:text-bg-blueDark-A5">
              GETHER
            </span>
          </div>

        </div>
     
        <div className="flex justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex gap-4">
            {
              Links.map(links => {
                return (
                  <ul key={ links.name } className="flex items-center gap-4">
                    <li>
                      <Link href={ links.href } >
                        { links.name }
                      </Link>
                    </li>
                  </ul>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )

}