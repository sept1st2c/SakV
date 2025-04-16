import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, BookOpen, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AvoidPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">How to Avoid Dark Patterns</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Practical tips, legal insights, and tools to protect yourself from deceptive design
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
              Practical Tips
            </h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Take Your Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Don't rush through purchases or sign-ups. Dark patterns often rely on users making quick, impulsive
                    decisions. When you see countdown timers or "limited stock" warnings, take a moment to consider if
                    the urgency is real.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calculate Total Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Before completing a purchase, manually calculate the total cost including all fees, shipping, and
                    taxes. Compare this with the initially advertised price to spot hidden costs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Read Cancellation Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Before signing up for subscriptions or free trials, check how to cancel. If the cancellation process
                    isn't clearly explained or seems overly complicated, consider it a red flag.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use Virtual Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    For free trials that require payment information, consider using virtual credit card numbers that
                    you can easily disable if needed. Many banks now offer this feature.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Set Calendar Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    When signing up for free trials, immediately set a calendar reminder for a few days before the trial
                    ends to give yourself time to cancel if needed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6 text-yellow-500" />
              Warning Signs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Countdown Timers</h3>
                  <p>Especially ones that reset when you revisit the page</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Pre-checked Boxes</h3>
                  <p>For additional services, subscriptions, or data sharing</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Confusing Language</h3>
                  <p>Double negatives or complex wording in important options</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Misleading Visuals</h3>
                  <p>Buttons that don't look clickable or options that blend into backgrounds</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-blue-500" />
              Legal Insights
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Consumer Protection Laws</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Many jurisdictions have laws that protect consumers from deceptive business practices, which can
                    include dark patterns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      In the US, the FTC Act prohibits "unfair or deceptive acts or practices in or affecting commerce."
                    </li>
                    <li>
                      The EU's Consumer Rights Directive requires clear information before consumers make purchases.
                    </li>
                    <li>California's CPRA specifically addresses dark patterns in privacy controls.</li>
                    <li>The GDPR in Europe requires clear and affirmative consent for data collection.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Recent Enforcement Actions</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Regulatory bodies are increasingly taking action against companies using dark patterns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      The FTC fined a major dating app $2.5M for using dark patterns to trick users into unwanted
                      subscriptions.
                    </li>
                    <li>European regulators fined a tech giant €390M for using deceptive consent interfaces.</li>
                    <li>
                      A class action lawsuit resulted in a $100M settlement from a streaming service for misleading
                      subscription practices.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Your Legal Rights</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">As a consumer, you have several rights when encountering dark patterns:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to clear information before making a purchase</li>
                    <li>Right to cancel certain types of contracts within a cooling-off period</li>
                    <li>Right to dispute unauthorized charges with your payment provider</li>
                    <li>Right to file complaints with consumer protection agencies</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Note: Legal rights vary by jurisdiction. This information is general and not legal advice.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <div className="lg:col-span-1">
          <section className="mb-10 sticky top-24">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Shield className="mr-2 h-6 w-6 text-purple-500" />
              Helpful Tools
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>ESPADA Browser Extension</CardTitle>
                <CardDescription>Automatically detects and highlights dark patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  ESPADA is a free browser extension that scans websites for common dark patterns and alerts you when
                  they're detected.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Real-time dark pattern detection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Visual highlighting of problematic elements</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Educational explanations of detected patterns</span>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  Download ESPADA
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Other Useful Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="https://example.com/privacy-tools"
                      className="flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Privacy Badger by EFF
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://example.com/consumer-rights"
                      className="flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Consumer Rights Database
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://example.com/dark-pattern-library"
                      className="flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Dark Pattern Library
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://example.com/subscription-tracker"
                      className="flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Subscription Tracker App
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Report Dark Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Found a dark pattern? Help others by reporting it to our database and relevant authorities.
                </p>
                <Link href="/report">
                  <Button className="w-full">Report a Dark Pattern</Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
