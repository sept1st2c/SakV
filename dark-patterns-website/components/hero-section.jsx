import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-card rounded-lg border border-border">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Exposing <span className="text-primary">Dark Patterns</span> in Web Design
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Learn to identify, avoid, and report deceptive design practices that manipulate users into making
                unintended choices.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/types">
                <Button className="px-8">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/report">
                <Button variant="outline" className="px-8">
                  Report a Dark Pattern
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-full max-w-sm space-y-4">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold text-lg">Limited Time Offer!</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Subscribe to our newsletter for exclusive content
                    </p>
                    <div className="flex flex-col space-y-2">
                      <input type="email" placeholder="Enter your email" className="px-3 py-2 border rounded-md" />
                      <button className="bg-primary text-primary-foreground px-3 py-2 rounded-md font-medium">
                        Subscribe Now
                      </button>
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-red-500 rounded-full mr-1"></div>
                        <span>Only 2 spots remaining!</span>
                      </div>
                      <div className="mt-1">
                        <span className="countdown">04:59</span> minutes left
                      </div>
                    </div>
                  </div>
                  <div className="text-sm bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-primary">
                    <span className="font-bold">This is a dark pattern example</span>: Creating false scarcity and
                    urgency to pressure users into quick decisions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
