import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const caseStudies = [
  {
    title: "Case Study Title 1",
    description:
      "Detailed description of the problem, approach, and solution. This case study showcases my ability to solve complex problems.",
    bulletPoints: [
      "Implemented a scalable architecture that improved performance by 40%",
      "Designed and developed a custom authentication system",
      "Optimized database queries resulting in 60% faster load times",
    ],
  },
  {
    title: "Case Study Title 2",
    description:
      "Detailed description of the problem, approach, and solution. This case study showcases my ability to solve complex problems.",
    bulletPoints: [
      "Led a team of 5 developers to deliver the project ahead of schedule",
      "Integrated multiple third-party APIs to create a seamless user experience",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
    ],
  },
]

export default function CaseStudies() {
  return (
    <div className="space-y-8 mt-8">
      {caseStudies.map((caseStudy, index) => (
        <Card
          key={index}
          className="border border-pink-100 bg-pink-50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
        >
          <CardHeader>
            <CardTitle className="text-2xl text-pink-600">{caseStudy.title}</CardTitle>
            <CardDescription className="text-base text-gray-600">{caseStudy.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {caseStudy.bulletPoints.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
