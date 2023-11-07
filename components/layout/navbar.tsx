"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? " bg-black/50 backdrop-blur-xl"
            : "bg-black/0"
        } z-30 transition-all`}
      >
        <div className="page-margins flex h-16 items-center justify-between w-full">
          <div className="flex gap-2 md:gap-10 items-center">
            <Link href="/" className="flex items-center font-display text-2xl text-white">
              <Image
                src="/logo.png"
                alt="Fagfilm logo"
                width="24"
                height="24"
                className="mr-2 rounded-sm"
              ></Image>
              <p className="subpixel-antialiased  ml-2 font-sans font-thin md:tracking-widest">Fagfilm</p>
            </Link>
            <div className="mt-2 subpixel-antialiased text-sm md:text-base text-white font-thin flex gap-2 md:gap-6">
              <Link href="/filmkatalog" className="hover:text-gray-200">Filmkatalogen</Link>
              <Link href="/filmkatalog/yrkesforberedende">Filmkategori</Link>
            </div>
          </div>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Logg
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
