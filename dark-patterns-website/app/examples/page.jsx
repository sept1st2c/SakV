import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import InteractiveDemoCard from "@/components/interactive-demo-card"
import CaseStudyCard from "@/components/case-study-card"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Real-Life Examples</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        See dark patterns in action with interactive demos and real case studies
      </p>

      <Tabs defaultValue="interactive" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="interactive">Interactive Demos</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="community">Community Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="interactive" className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Interactive Demos</h2>
          <p className="mb-8">
            Experience dark patterns firsthand with these interactive demonstrations. These simulations show how dark
            patterns work in practice.
          </p>

          <div className="space-y-8">
            <InteractiveDemoCard
              id="forced-continuity"
              title="Forced Continuity"
              description="Experience how free trials convert to paid subscriptions without clear warnings"
            />

            <InteractiveDemoCard
              id="confirmshaming"
              title="Confirmshaming"
              description="See how websites use guilt to manipulate your choices"
            />

            <InteractiveDemoCard
              id="hidden-costs"
              title="Hidden Costs"
              description="Watch as unexpected fees appear during the checkout process"
            />

            <InteractiveDemoCard
              id="fake-urgency"
              title="Fake Urgency"
              description="Experience how countdown timers create false pressure"
            />
          </div>
        </TabsContent>

        <TabsContent value="case-studies" className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
          <p className="mb-8">
            Documented examples of dark patterns used by well-known companies and the consequences they faced.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CaseStudyCard
              company="Major Airline"
              pattern="Hidden Fees"
              description="How a major airline was fined $1.5M for hiding fees until the final checkout step"
              outcome="Regulatory fine and required UX changes"
            />

            <CaseStudyCard
              company="Streaming Service"
              pattern="Difficult Cancellation"
              description="A streaming service that made cancellation nearly impossible to find"
              outcome="Class action lawsuit and settlement"
            />

            <CaseStudyCard
              company="E-commerce Giant"
              pattern="Fake Urgency"
              description="False 'limited time' offers that reset for each visitor"
              outcome="Consumer trust erosion and media exposure"
            />

            <CaseStudyCard
              company="Social Media Platform"
              pattern="Privacy Zuckering"
              description="Confusing privacy settings that led to unintended data sharing"
              outcome="Regulatory investigation and fines"
            />
          </div>
        </TabsContent>

        <TabsContent value="community" className="mt-6">
          <h2 className="text-2xl font-semibold mb-6">Community Stories</h2>
          <p className="mb-8">Real experiences shared by users who have encountered dark patterns in the wild.</p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Subscription Trap</CardTitle>
                    <CardDescription>Shared by Alex, 34</CardDescription>
                  </div>
                  <Badge variant="outline">Roach Motel</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  "I signed up for a 'free trial' of a fitness app that required my credit card. When I tried to cancel
                  before the trial ended, I discovered I had to call during specific hours, wait on hold for 45 minutes,
                  and then go through a 'retention specialist' who tried every trick to keep me subscribed. What should
                  have been a simple cancellation took over an hour."
                </p>
                <div className="text-sm text-muted-foreground">Reported on June 12, 2023</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Hidden Resort Fees</CardTitle>
                    <CardDescription>Shared by Maria, 29</CardDescription>
                  </div>
                  <Badge variant="outline">Hidden Costs</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  "I booked a hotel room advertised at $150 per night. After going through the entire booking process
                  and entering my payment information, suddenly the price jumped to $210 per night due to 'resort fees'
                  that weren't mentioned anywhere in the initial pricing. By that point, I had already invested so much
                  time in the booking that I reluctantly went ahead with it."
                </p>
                <div className="text-sm text-muted-foreground">Reported on March 3, 2023</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Misleading Unsubscribe</CardTitle>
                    <CardDescription>Shared by Jordan, 42</CardDescription>
                  </div>
                  <Badge variant="outline">Trick Questions</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  "I tried to unsubscribe from a newsletter and was presented with a confusing form that asked 'Do you
                  want to continue not receiving emails about special offers?' with Yes/No options. I wasn't sure which
                  to select to actually unsubscribe. It was deliberately written to confuse users into making the wrong
                  choice."
                </p>
                <div className="text-sm text-muted-foreground">Reported on May 17, 2023</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
