import { Content } from "@/components/layouts/layout-specifics/content";

export function Home() {
  return (
    <Content
      title="Hello World! 👋🏻"
      subtitle=""
      contents={
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            {
              id: 4,
              title: "Summary",
              width: "md:col-span-3",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 5,
              title: "Picture",
              width: "md:col-span-1",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 6,
              title: "Technical Skills",
              width: "md:col-span-2",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 7,
              title: "Hobbies and Interest",
              width: "md:col-span-2",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
          ].map((box) => (
            <div
              key={box.id}
              className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-xl p-4`}
            >
              <h2 className="text-xl font-medium">{box.title}</h2>
            </div>
          ))}
        </div>
      }
    />
  );
}
