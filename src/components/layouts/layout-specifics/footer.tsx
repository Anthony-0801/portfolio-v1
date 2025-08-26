import { Sparkles } from "@/components/ui/sparkles";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export function Footer() {
  return (
    <>
      <div className="hidden dark:block h-full w-full overflow-hidden">
        <div className="mx-auto mt-6 w-full max-w-2xl">
          <div className="text-center text-xl lg:text-3xl text-zinc-900 dark:text-white">
            <span className="text-indigo-600 dark:text-indigo-200">
              Created with 💙
            </span>
            <br />
          </div>

          <div className="mt-14 flex justify-center items-center gap-5 text-zinc-700 dark:text-white">
            <span>Find me on: </span>

            <IconBrandLinkedin />
            <IconBrandInstagram />
          </div>
        </div>

        <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#c7bfff,transparent_70%)] dark:before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-zinc-200 dark:after:border-[#7876c566] after:bg-white dark:after:bg-zinc-900">
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </div>

      <div className="container mx-auto mt-6 p-8 xl:px-8 xl:mt-24 dark:hidden">
        <div className="flex justify-around flex-wrap gap-3 border-t-2 p-3 border-neutral-400 text-neutral-600">
          <a href="/">Home</a>
          <a href="journey">Journey</a>
          <a href="surprise">Surprise</a>
          <a href="contact">Contact Me</a>
        </div>

        <span className="block text-center text-sm mt-10 text-neutral-500">
          Created with 💙. All rights reserved.
        </span>
      </div>
    </>
  );
}
