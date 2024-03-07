import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className=" bg-primary   flex items-center justify-center h-screen">
      <div className=" absolute  top-[2%] lg:top-[11%]  z-10 ">
        <Image
          src="/Monsters.svg"
          alt="phone"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
      <div className="z-20 bg-background border-solid border-primary-foreground border-4 p-10 rounded-lg lg:flex lg:flex-row  lg:items-center lg:justify-between lg:gap-28  ">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpeg"
            alt="phone"
            width={200}
            height={300}
            className="rounded-full"
          />

          <h2 className="mt-5 text-2xl font-bold ">
            Muhammad Zulkarnaen Indranto
          </h2>
          <h2 className="mt-1 text-slate-400"> Full stack Developer</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-5 gap-8 flex flex-col">
            <div className="">
              <Link
                href="/cv.pdf"
                download="cv"
                passHref={true}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button className=" w-[400px]" variant={"default"}>
                  cv
                </Button>
              </Link>
            </div>
            <div>
              <Link
                href="https://stackoverflow.com/"
                passHref={true}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button className="w-[400px] " size={"lg"} variant={"default"}>
                  Email
                </Button>
              </Link>
            </div>

            <Link
              href="https://stackoverflow.com/"
              passHref={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="w-[400px]" variant={"default"}>
                Whatsapp
              </Button>
            </Link>
          </div>
          <div className="flex mt-8 gap-3">
            <Link
              href="https://www.instagram.com/zul_indr/"
              passHref={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram className="size-8 " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-zulkarnaen-indranto-583151174/"
              passHref={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CiLinkedin className="size-8" />
            </Link>
            <Link
              href="https://twitter.com/Flaatena_"
              passHref={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CiTwitter className="size-8" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
