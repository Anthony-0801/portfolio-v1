import { Content } from "@/components/layouts/layout-specifics/content";
import { FocusCards } from "@/components/ui/focus-cards";

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
            },
            {
              id: 7,
              title: "Hobbies and Interest",
              width: "md:col-span-2",
            },
          ].map((box) => (
            <div
              key={box.id}
              className={`${box.width} xxs:p-4 md:bg-neutral-100 md:dark:bg-neutral-800 flex flex-wrap items-center justify-center rounded-xl`}
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
