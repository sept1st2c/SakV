import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TypesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Types of Dark Patterns</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Learn about the different categories of deceptive design practices
      </p>

      <Tabs defaultValue="manipulation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="manipulation">Manipulation</TabsTrigger>
          <TabsTrigger value="obstruction">Obstruction</TabsTrigger>
          <TabsTrigger value="sneaking">Sneaking</TabsTrigger>
          <TabsTrigger value="interface">Interface Interference</TabsTrigger>
        </TabsList>

        <TabsContent value="manipulation" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Manipulation Patterns</h2>
          <p className="mb-6">
            These patterns manipulate users into making certain choices through psychological tricks and emotional
            exploitation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Confirmshaming</CardTitle>
                <CardDescription>Using guilt or shame to manipulate users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">"No thanks, I don't want to save money"</p>
                  <p className="italic">"I prefer to pay full price"</p>
                </div>
                <p>
                  This pattern uses language that makes the user feel guilty for not selecting the option the site wants
                  them to choose.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scarcity</CardTitle>
                <CardDescription>Creating a false sense of urgency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">"Only 2 rooms left at this price!"</p>
                  <p className="italic">"5 other people are looking at this right now"</p>
                </div>
                <p>
                  This pattern creates artificial scarcity to pressure users into making quick decisions without proper
                  consideration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Urgency</CardTitle>
                <CardDescription>Pressuring users with time constraints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">"Offer expires in 10:00 minutes!"</p>
                  <p className="italic">"Flash sale ends today!"</p>
                </div>
                <p>
                  This pattern creates a false sense of urgency to rush users into making decisions without proper
                  consideration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Proof</CardTitle>
                <CardDescription>Misusing social influence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">"Join 10,000+ satisfied customers"</p>
                  <p className="italic">"Sarah from New York just purchased this item"</p>
                </div>
                <p>
                  This pattern manipulates users by showing potentially fake or misleading social proof to influence
                  decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="obstruction" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Obstruction Patterns</h2>
          <p className="mb-6">
            These patterns make it difficult for users to complete actions that are not in the business's interest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Roach Motel</CardTitle>
                <CardDescription>Easy to get in, hard to get out</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Sign up in one click, but cancellation requires calling customer service</p>
                  <p className="italic">Subscription that can only be canceled by mail or phone</p>
                </div>
                <p>
                  This pattern makes it easy to get into a situation (like a subscription) but difficult to get out of
                  it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Difficult Cancellation</CardTitle>
                <CardDescription>Making it hard to cancel a service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Hidden cancellation links</p>
                  <p className="italic">Multiple confirmation screens with persuasive messaging</p>
                </div>
                <p>
                  This pattern deliberately makes the cancellation process complex, time-consuming, or emotionally
                  draining.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sneaking" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Sneaking Patterns</h2>
          <p className="mb-6">These patterns hide, disguise, or delay disclosing information relevant to the user.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Hidden Costs</CardTitle>
                <CardDescription>Revealing fees at the last step</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Unexpected "service fees" added at checkout</p>
                  <p className="italic">Shipping costs only revealed at the final step</p>
                </div>
                <p>This pattern hides costs until the user has already invested time in the purchase process.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forced Continuity</CardTitle>
                <CardDescription>Automatic subscription renewal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Free trial that converts to paid without clear warning</p>
                  <p className="italic">Credit card required for "free" services</p>
                </div>
                <p>This pattern charges users automatically after a free trial without adequate notice or consent.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bait and Switch</CardTitle>
                <CardDescription>Advertising one thing, delivering another</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Advertising a low price that's actually for a stripped-down version</p>
                  <p className="italic">Showing a feature that requires a premium upgrade</p>
                </div>
                <p>This pattern advertises one thing but delivers something different or with unexpected conditions.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interface" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Interface Interference Patterns</h2>
          <p className="mb-6">These patterns manipulate the user interface to favor certain actions over others.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Trick Questions</CardTitle>
                <CardDescription>Confusing wording to mislead users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">"Uncheck this box if you don't want to not receive our newsletter"</p>
                </div>
                <p>
                  This pattern uses confusing double negatives or misleading wording to trick users into selecting
                  unwanted options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Misdirection</CardTitle>
                <CardDescription>Drawing attention away from important information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Flashy "Continue" button while the "Skip" option is barely visible</p>
                </div>
                <p>
                  This pattern intentionally focuses user attention on one thing to distract from another, often
                  unwanted, option.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visual Interference</CardTitle>
                <CardDescription>Using design elements to influence choices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Making the "Decline" button blend into the background</p>
                  <p className="italic">Using similar colors for ads and content</p>
                </div>
                <p>This pattern uses visual design to make certain options stand out while others are de-emphasized.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preselection</CardTitle>
                <CardDescription>Default options that benefit the business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-muted p-4 rounded-md">
                  <p className="italic">Pre-checked boxes for additional services</p>
                  <p className="italic">Opt-out rather than opt-in for data sharing</p>
                </div>
                <p>
                  This pattern preselects options that benefit the business but may not be in the user's best interest.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
