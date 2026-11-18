export default function Loading() {
  return (
    <div className="container-page py-16">
      <div className="mb-8 h-8 w-48 animate-pulse rounded-lg bg-sand" />
      <div className="mb-4 h-12 w-2/3 animate-pulse rounded-lg bg-sand" />
      <div className="mb-10 h-5 w-full max-w-xl animate-pulse rounded-lg bg-sand/70" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-card border border-line bg-white/60" />
        ))}
      </div>
    </div>
  );
}
