export function Content({
  title,
  subtitle,
  contents,
}: {
  title: string;
  subtitle: string;
  contents: React.ReactNode;
}) {
  return (
    <div className="container px-8 pt-24 dark:pb-24">
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <p className="mb-10 text-center text-sm text-zinc-500">{subtitle}</p>
      {contents}
    </div>
  );
}
