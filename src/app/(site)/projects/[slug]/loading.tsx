export default function Loading() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-6xl animate-pulse">
        {/* Back button */}
        <div className="bg-muted mb-8 h-8 w-20 rounded-md" />

        {/* Title block */}
        <div className="mb-10 space-y-4">
          <div className="flex gap-3">
            <div className="bg-muted h-6 w-20 rounded-full" />
            <div className="bg-muted h-6 w-28 rounded-full" />
          </div>
          <div className="bg-muted h-12 w-3/4 rounded-md" />
        </div>

        {/* 2-col layout */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Main content (left) */}
          <div className="space-y-10 md:col-span-2">
            <div className="space-y-3">
              <div className="bg-muted h-4 w-full rounded" />
              <div className="bg-muted h-4 w-full rounded" />
              <div className="bg-muted h-4 w-11/12 rounded" />
              <div className="bg-muted h-4 w-4/5 rounded" />
              <div className="bg-muted h-4 w-3/4 rounded" />
            </div>

            <div className="border-border/50 bg-card/50 rounded-xl border p-6 sm:p-8">
              <div className="bg-muted mb-6 h-6 w-40 rounded" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="bg-muted h-5 w-5 shrink-0 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="bg-muted h-4 w-full rounded" />
                      <div className="bg-muted h-4 w-5/6 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (right on desktop, top on mobile) */}
          <aside className="order-first space-y-6 md:order-none">
            <div className="bg-muted aspect-video w-full rounded-xl" />
            <div className="space-y-2">
              <div className="bg-muted h-10 w-full rounded-md" />
              <div className="bg-muted h-10 w-full rounded-md" />
            </div>
            <div>
              <div className="bg-muted mb-3 h-3 w-24 rounded" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-muted h-6 rounded-full"
                    style={{ width: `${50 + ((i * 13) % 40)}px` }}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
