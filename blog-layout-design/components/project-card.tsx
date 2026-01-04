import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  emoji: string
  tags: string[]
}

export function ProjectCard({ title, description, emoji, tags }: ProjectCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl hover:scale-105">
      <CardHeader className="pb-4">
        <div className="mb-2 text-4xl">{emoji}</div>
        <h3 className="text-xl font-bold text-balance">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
