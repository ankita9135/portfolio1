import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Project Title 1",
    description: "Short project description that highlights the key features and technologies used in this project.",
    tags: ["React", "TypeScript", "Node.js"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Project Title 2",
    description: "Short project description that highlights the key features and technologies used in this project.",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Project Title 3",
    description: "Short project description that highlights the key features and technologies used in this project.",
    tags: ["Python", "TensorFlow", "Flask"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Project Title 4",
    description: "Short project description that highlights the key features and technologies used in this project.",
    tags: ["Vue.js", "Firebase", "Vuetify"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="overflow-hidden border border-pink-100 bg-pink-50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
        >
          <div className="relative h-48 w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle className="text-pink-600">{project.title}</CardTitle>
            <CardDescription className="text-gray-600">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} className="bg-white text-pink-700 border-pink-200 hover:bg-pink-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="border-pink-200 text-pink-600 hover:bg-pink-100 hover:scale-105 transition-transform duration-200"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
