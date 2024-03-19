import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className=" bg-primary flex items-center justify-center h-screen">
      <div className=" absolute   top-[2%] lg:top-[11%]  z-10 ">
        <Image
          src="/Monsters.svg"
          alt="phone"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
      <div className="z-20 bg-background border-solid border-primary-foreground border-4 p-4 rounded-lg lg:flex lg:flex-row  lg:items-center lg:justify-between lg:gap-28  ">
        <div className="flex flex-col items-center">
          <div className="">
            <Image
              src="/profile.jpeg"
              alt="phone"
              objectFit="cover"
              width={300}
              height={400}
              className="rounded-full size-28"
            />
          </div>

          <h2 className="mt-5 text-l font-bold md:text-xl">
            Muhammad Zulkarnaen Indranto
          </h2>
          <h2 className="mt-1 text-slate-400"> Full stack Developer</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-5 gap-8 flex flex-col items-center">
            <div className="">
              <Link
                href="/cv.pdf"
                download="cv"
                passHref={true}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  className=" w-[200px] md:w-[300px] "
                  variant={"default"}
                >
                  cv
                </Button>
              </Link>
            </div>
            <div>
              <Link
                href="mailto:mzulnewbie@gmail.com"
                passHref={true}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  className="w-[200px] md:w-[300px] "
                  size={"lg"}
                  variant={"default"}
                >
                  Email
                </Button>
              </Link>
            </div>

            <Link
              href="https://wa.me/6281937186854?text=Hey%20Zoel%20Salam%20Kenal"
              passHref={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="w-[200px] md:w-[300px]" variant={"default"}>
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
            <Link
              href="https://www.youtube.com/channel/UCwLr4n2CPBi-oJsy9Gnv05w"
              passHref={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CiYoutube className="size-8" />
            </Link>
            <Link
              href="https://github.com/zul1996"
              passHref={true}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="size-8" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
