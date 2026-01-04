"use client"

import { Card, CardContent } from "@/components/ui/card"

interface CodeSnippetProps {
  title?: string
  code?: string
  language?: string
}

export function CodeSnippet({ code = "" }: CodeSnippetProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{"보러와주셔서 감사합니다. 있었으면 하는 기능 피드백 받아요 "}</p>
      </CardContent>
    </Card>
  )
}
