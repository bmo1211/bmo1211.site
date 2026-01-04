"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function Guestbook() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>(["멋진 블로그네요! 🚀", "C와 Python 정복 화이팅! 💪"])
  const [cooldown, setCooldown] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (cooldown > 0) {
      alert(`${cooldown}초 후에 다시 작성할 수 있습니다.`)
      return
    }

    if (message.trim()) {
      if (message.length > 100) {
        alert("메시지는 100자 이내로 작성해주세요.")
        return
      }

      if (messages.includes(message.trim())) {
        alert("같은 메시지는 중복으로 작성할 수 없습니다.")
        return
      }

      setMessages([message, ...messages])
      setMessage("")

      setCooldown(30)
      const interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  const handleDelete = (index: number) => {
    const password = prompt("관리자 비밀번호를 입력하세요:")
    
    if (password === "admin1234") {
      setMessages(messages.filter((_, idx) => idx !== index))
    } else if (password !== null) {
      alert("비밀번호가 올바르지 않습니다.")
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-accent/50">
        <CardTitle className="text-2xl">
          <span className="font-mono text-muted-foreground">{">>> "}</span>
          방명록
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
          <Input
            type="text"
            placeholder="input('한 줄 평을 남겨주세요: ')"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 font-mono"
            maxLength={100}
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={cooldown > 0}
          >
            {cooldown > 0 ? `${cooldown}초` : "작성"}
          </Button>
        </form>

        <div className="space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className="rounded-lg bg-muted/50 p-3 text-sm flex items-start justify-between gap-2 group">
              <span className="flex-1">{msg}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(idx)}
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground"
                aria-label="삭제"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
