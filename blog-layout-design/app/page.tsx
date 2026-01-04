import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Guestbook } from "@/components/guestbook"
import { CodeSnippet } from "@/components/code-snippet"

export default function HomePage() {
  const books = [
    {
      title: "클린 코드 읽기",
      description: "로버트 C. 마틴의 클린 코드를 읽고 정리한 내용입니다. 좋은 코드 작성의 원칙을 배웠습니다.",
      emoji: "📚",
      tags: ["#Book", "#CleanCode", "#Review"],
    },
    {
      title: "C 프로그래밍 언어",
      description: "K&R C 교재를 완독하며 C언어의 기초부터 심화까지 학습한 기록입니다.",
      emoji: "📖",
      tags: ["#Book", "#C", "#Study"],
    },
    {
      title: "파이썬 알고리즘 인터뷰",
      description: "코딩 테스트 준비를 위한 알고리즘 문제 풀이 노트입니다.",
      emoji: "📕",
      tags: ["#Book", "#Python", "#Algorithm"],
    },
  ]

  const blogPosts = [
    {
      title: "Python 메모리 최적화 팁",
      description: "대용량 데이터 처리 시 메모리 사용을 최적화하는 방법을 정리했습니다.",
      emoji: "✍️",
      tags: ["#Blog", "#Python", "#Optimization"],
    },
    {
      title: "C 포인터 완벽 가이드",
      description: "포인터의 개념부터 실전 활용까지 자세히 다룬 포스트입니다.",
      emoji: "📝",
      tags: ["#Blog", "#C", "#Tutorial"],
    },
    {
      title: "나만의 개발 환경 설정",
      description: "효율적인 개발을 위한 VSCode 플러그인과 설정을 공유합니다.",
      emoji: "⚙️",
      tags: ["#Blog", "#DevTools", "#Tips"],
    },
  ]

  const sampleCode = `def hello_world():
    """간단한 인사 함수"""
    print("안녕하세요, bmo의 Dev Log입니다!")
    return "Welcome! 🌟"

# 실행
hello_world()`

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Posts Section */}
      <section id="posts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-bold text-balance text-5xl">✨ 포스팅</h2>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Books Category Card */}
            <a href="/books" className="group block">
              <div className="rounded-2xl bg-card p-8 shadow-soft transition-all hover:shadow-hover hover:-translate-y-2 border-2 border-primary/20 hover:border-primary">
                <div className="mb-4 text-6xl text-center">📚</div>
                <h3 className="mb-4 text-center text-3xl font-bold text-primary">책</h3>
                <p className="text-center text-muted-foreground">게으름 치료</p>
                <div className="mt-6 text-center text-sm font-semibold text-primary group-hover:underline">
                  더 보기 →
                </div>
              </div>
            </a>

            {/* Blog Category Card */}
            <a href="/blog" className="group block">
              <div className="rounded-2xl bg-card p-8 shadow-soft transition-all hover:shadow-hover hover:-translate-y-2 border-2 border-primary/20 hover:border-primary">
                <div className="mb-4 text-6xl text-center">📝</div>
                <h3 className="mb-4 text-center text-3xl font-bold text-primary">블로그</h3>
                <p className="text-center text-muted-foreground">게으름 기록</p>
                <div className="mt-6 text-center text-sm font-semibold text-primary group-hover:underline">
                  더 보기 →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section id="trash" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-balance">😄</h2>
          <div className="mx-auto max-w-3xl">
            <CodeSnippet title="hello_world.py" code={sampleCode} language="python" />
          </div>
        </div>
      </section>

      {/* Guestbook Section */}
      <section id="comment" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-balance">📝 방명록</h2>
          <div className="mx-auto max-w-2xl">
            <Guestbook />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>@eahcnoeyh_</p>
        </div>
      </footer>
    </div>
  )
}
