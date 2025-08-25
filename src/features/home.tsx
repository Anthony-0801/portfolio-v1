import { Content } from "@/components/layouts/layout-specifics/content";
import { FocusCards } from "@/components/ui/focus-cards";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const webDevelopment = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "LESS" },
  { label: "SASS" },
  { label: "Bootstrap" },
  { label: "Tailwind CSS" },
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "React" },
  { label: "React Native" },
  { label: "Node/Express" },
  { label: "NestJS" },
  { label: "JQuery" },
  { label: "PHP" },
  { label: "Codeigniter" },
  { label: "Next.js" },
];

const dataAnalytics = [
  { label: "Python" },
  { label: "Pandas" },
  { label: "Matplotlib" },
  { label: "Tensorflow" },
  { label: "Microsoft Excel" },
  { label: "PowerBI" },
  { label: "Tableau" },
  { label: "Looker Studio" },
  { label: "Google Colab" },
];

const databaseToolsAndMore = [
  { label: "SQL" },
  { label: "MySQL" },
  { label: "PostgreSQL" },
  { label: "Git/Github" },
  { label: "Postman" },
  { label: "REST APIs" },
  { label: "Heroku" },
  { label: "Vercel" },
  { label: "Render" },
  { label: "AWS EC2" },
  { label: "Google Appscript" },
  { label: "Google Sheet" },
  { label: "Selenium" },
  { label: "Puppeteer" },
  { label: "Figma" },
];

export function Home() {
  return (
    <Content
      title="Hello World! 👋🏻"
      subtitle=""
      contents={
        <div className="grid grid-cols-1 xxxs:max-xxs:gap-15 gap-4 md:grid-cols-4">
          {[
            {
              id: 4,
              content: (
                <>
                  <FocusCards
                    cards={[
                      {
                        title: "Anthony",
                        src: "src/assets/Anthony.jpg",
                      },
                    ]}
                    customClass="md:hidden w-full xs:px-8"
                  />

                  <p className="hidden md:inline text-md lg:text-lg font-light lg:my-4">
                    {" "}
                    Hello, I'm Anthony! Early on, coding transformed my world.
                    It wasn’t just about how it worked, it was about how it grew
                    more complex over time. That complexity brought headaches,
                    procrastination, and even a few existential crises. But
                    through it all, I developed strong problem-solving skills
                    and learned how to communicate effectively on a technical
                    level. Despite the challenges, I persevered. Along the way,
                    I discovered that building self-esteem and staying motivated
                    are essential to thriving in this field. Join me on this
                    rewarding journey — where you'll learn, grow, get support,
                    and yes, even have fun!
                  </p>
                </>
              ),
              width: "md:col-span-3",
            },
            {
              id: 5,
              title: "",
              content: (
                <>
                  <FocusCards
                    cards={[
                      {
                        title: "Anthony",
                        src: "src/assets/Anthony.jpg",
                      },
                    ]}
                    customClass="hidden md:block w-full lg:px-1 xl:px-5"
                  />

                  <p className="hidden md:max-lg:inline text-md lg:text-lg font-light lg:my-4">
                    You've got a keen eye. Keep exploring! 😎
                  </p>

                  <p className="inline text-center md:hidden text-md lg:text-lg font-light lg:my-4">
                    {" "}
                    Hello, I'm Anthony! Early on, coding transformed my world.
                    It wasn’t just about how it worked, it was about how it grew
                    more complex over time. That complexity brought headaches,
                    procrastination, and even a few existential crises. But
                    through it all, I developed strong problem-solving skills
                    and learned how to communicate effectively on a technical
                    level. Despite the challenges, I persevered. Along the way,
                    I discovered that building self-esteem and staying motivated
                    are essential to thriving in this field. Join me on this
                    rewarding journey — where you'll learn, grow, get support,
                    and yes, even have fun!
                  </p>
                </>
              ),

              width: "md:col-span-1",
            },
            {
              id: 6,
              title: "Technical Skills",
              width: "md:col-span-2",
              content: (
                <>
                  <div className="flex flex-wrap justify-center mt-4 gap-2 lg:hidden">
                    {[
                      { label: "HTML" },
                      { label: "CSS" },
                      { label: "LESS" },
                      { label: "SASS" },
                      { label: "Bootstrap" },
                      { label: "Tailwind CSS" },
                      { label: "JavaScript" },
                      { label: "TypeScript" },
                      { label: "React" },
                      { label: "React Native" },
                      { label: "Node/Express" },
                      { label: "NestJS" },
                      { label: "JQuery" },
                      { label: "PHP" },
                      { label: "Codeigniter" },
                      { label: "Python" },
                      { label: "Pandas" },
                      { label: "Matplotlib" },
                      { label: "Tensorflow" },
                      { label: "SQL" },
                      { label: "MySQL" },
                      { label: "PostgreSQL" },
                      { label: "Git/Github" },
                      { label: "Postman" },
                      { label: "REST APIs" },
                      { label: "Heroku" },
                      { label: "Vercel" },
                      { label: "Render" },
                      { label: "AWS EC2" },
                      { label: "Google Appscript" },
                      { label: "Google Sheet" },
                      { label: "Google Colab" },
                      { label: "Looker Studio" },
                      { label: "Microsoft Excel" },
                      { label: "PowerBI" },
                      { label: "Tableau" },
                      { label: "Selenium" },
                      { label: "Puppeteer" },
                      { label: "Figma" },
                    ].map((item, idx) => (
                      <p
                        key={idx}
                        className="w-fit leading-5 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-lg border-2 text-xs p-1 font-medium bg-gray-50"
                      >
                        {item.label}
                      </p>
                    ))}
                  </div>

                  <div className="hidden lg:flex flex-col justify-center gap-2 mt-4">
                    {[
                      { label: "Web Development" },
                      { label: "Data Analytics" },
                      { label: "Database, Tools, and More!" },
                    ].map((item, idx) => (
                      <Popover key={idx}>
                        <PopoverTrigger>
                          <span className="flex flex-wrap cursor-pointer shadow-[inset_0_0_0_2px_#616467] w-full text-center text-sm text-black px-12 py-6.5 xl:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                            {item.label}
                          </span>
                        </PopoverTrigger>
                        <PopoverContent>
                          {item.label === "Web Development" && (
                            <div className="mt-2">
                              {webDevelopment.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                                >
                                  {skill.label}
                                </span>
                              ))}
                            </div>
                          )}
                          {item.label === "Data Analytics" && (
                            <div className="mt-2">
                              {dataAnalytics.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                                >
                                  {skill.label}
                                </span>
                              ))}
                            </div>
                          )}
                          {item.label === "Database, Tools, and More!" && (
                            <div className="mt-2">
                              {databaseToolsAndMore.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
                                >
                                  {skill.label}
                                </span>
                              ))}
                            </div>
                          )}
                        </PopoverContent>
                      </Popover>
                    ))}
                  </div>
                </>
              ),
            },
            {
              id: 7,
              title: "Hobbies and Interest",
              width: "md:col-span-2",
              content: (
                <>
                  <div className="flex flex-col justify-center mt-4 gap-2 lg:hidden">
                    {[
                      { label: "Biking 🚲" },
                      { label: "Reading Manga/Manhua/Manhwa 📚" },
                      { label: "Playing Video Games 🎮" },
                      { label: "Billiards 🎱" },
                      { label: "Listening to any Music 🎶" },
                      { label: "Watching Movies/Anime 🎬" },
                      { label: "Writing ✍️" },
                    ].map((item, idx) => (
                      <p
                        key={idx}
                        className="leading-5 md:max-lg:p-3 md:max-lg:text-sm text-center dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-lg border-2 text-xs p-1 font-medium bg-gray-50"
                      >
                        {item.label}
                      </p>
                    ))}
                  </div>

                  <div className="hidden lg:max-xl:flex flex-wrap justify-center gap-2 mt-4">
                    {[
                      { label: "Biking 🚲" },
                      { label: "Watching Movies/Anime 🎬" },
                      { label: "Reading Manga / Manhua / Manhwa 📚" },
                      { label: "Playing Video Games 🎮" },
                      { label: "Billiards 🎱" },
                      { label: "Writing ✍️" },
                      { label: "Listening to any Music 🎶" },
                    ].map((item, idx) => (
                      <p
                        key={idx}
                        className="shadow-[inset_0_0_0_2px_#616467] w-fit text-center text-sm text-black p-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
                      >
                        {item.label}
                      </p>
                    ))}
                  </div>

                  <div className="hidden xl:flex flex-wrap justify-center gap-2 mt-4">
                    {[
                      { label: "Biking 🚲" },
                      { label: "Reading Manga / Manhua / Manhwa 📚" },
                      { label: "Playing Video Games 🎮" },
                      { label: "Billiards 🎱" },
                      { label: "Writing ✍️" },
                      { label: "Listening to any Music 🎶" },
                      { label: "Watching Movies/Anime 🎬" },
                    ].map((item, idx) => (
                      <p
                        key={idx}
                        className="shadow-[inset_0_0_0_2px_#616467] w-fit text-center text-sm text-black p-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
                      >
                        {item.label}
                      </p>
                    ))}
                  </div>
                </>
              ),
            },
          ].map((box) => (
            <div
              key={box.id}
              className={`${box.width} xxs:p-4 md:bg-neutral-100 md:dark:bg-neutral-800 rounded-xl`}
            >
              <h2 className="text-xl font-medium">{box.title}</h2>
              {box.content}
            </div>
          ))}
        </div>
      }
    />
  );
}
