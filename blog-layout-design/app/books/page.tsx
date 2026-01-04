import { Header } from "@/components/header"

export default function BooksPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-balance">📚 책</h1>
          <p className="text-lg text-muted-foreground">게으름 치료실(귀찮으니까 내일부터 올릴게요,,ㅎㅎ)</p>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>@eahcnoeyh_</p>
          <p className="mt-2">&nbsp;</p>
        </div>
      </footer>
    </div>
  )
}
