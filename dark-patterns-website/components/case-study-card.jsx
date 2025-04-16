import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"

export default function CaseStudyCard({ company, pattern, description, outcome }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{company}</CardTitle>
            <CardDescription>{pattern}</CardDescription>
          </div>
          <Badge variant="outline">{pattern}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="bg-muted p-3 rounded-md">
          <span className="font-semibold">Outcome:</span> {outcome}
        </div>
      </CardContent>
    </Card>
  )
}
