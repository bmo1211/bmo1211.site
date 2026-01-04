export function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent/30 py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Floating logos */}
        <div className="absolute left-[10%] top-[20%] animate-float opacity-70">
          <img src="/images/ec-84-ad.png" alt="BMO" className="object-contain w-20 h-20" />
        </div>
        <div className="absolute right-[15%] top-[30%] animate-float-delayed opacity-70">
          <img
            src="/images/eb-8c-84-ec-8b-b1-eb-b9-84-eb-aa-a8.png"
            alt="Dancing BMO"
            className="object-contain w-24 h-24"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
            <span className="text-primary">BMO</span>의 난중일기
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
            {"별 기능은 아직 없음.."}
          </p>
        </div>
      </div>
    </section>
  )
}
