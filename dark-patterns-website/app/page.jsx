import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle, Shield } from "lucide-react"
import HeroSection from "@/components/hero-section"
import StatCard from "@/components/stat-card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<AlertTriangle className="h-10 w-10 text-red-500" />}
            title="88%"
            description="of users have encountered dark patterns online"
          />
          <StatCard
            icon={<Shield className="h-10 w-10 text-blue-500" />}
            title="$12B+"
            description="estimated annual consumer losses due to dark patterns"
          />
          <StatCard
            icon={<AlertTriangle className="h-10 w-10 text-yellow-500" />}
            title="70%"
            description="of e-commerce sites use at least one dark pattern"
          />
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6">What Are Dark Patterns?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-4">
              Dark patterns are deceptive UX/UI design choices that manipulate users into taking actions they might not
              otherwise take if fully informed. These tactics prioritize business interests over user needs and ethical
              considerations.
            </p>
            <p className="text-lg mb-6">
              First coined by UX specialist Harry Brignull in 2010, dark patterns exploit cognitive biases and
              psychological vulnerabilities to influence user behavior in ways that benefit the business at the user's
              expense.
            </p>
            <Link href="/types">
              <Button className="mt-4">
                Explore Dark Pattern Types
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why This Matters</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-red-500">•</span>
                <span>Dark patterns erode user trust and damage brand reputation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-red-500">•</span>
                <span>They can lead to financial harm through unwanted purchases</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-red-500">•</span>
                <span>They exploit vulnerable populations who may be less tech-savvy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-red-500">•</span>
                <span>Regulatory bodies are increasingly taking action against these practices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6">Featured Dark Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-semibold mb-3">Forced Continuity</h3>
            <p className="mb-4">
              When a free trial automatically converts to a paid subscription without clear warning.
            </p>
            <Link href="/examples#forced-continuity">
              <Button variant="outline" size="sm">
                See Examples
              </Button>
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-semibold mb-3">Confirmshaming</h3>
            <p className="mb-4">Using guilt or shame to manipulate users into opting into something.</p>
            <Link href="/examples#confirmshaming">
              <Button variant="outline" size="sm">
                See Examples
              </Button>
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-semibold mb-3">Hidden Costs</h3>
            <p className="mb-4">When fees are only revealed at the final step of the checkout process.</p>
            <Link href="/examples#hidden-costs">
              <Button variant="outline" size="sm">
                See Examples
              </Button>
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/types">
            <Button>
              View All Dark Pattern Types
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="my-16 bg-card p-8 rounded-lg border border-border">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Help Build a More Ethical Web</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Encountered a dark pattern? Report it to our database to help others and contribute to research on deceptive
            design practices.
          </p>
          <Link href="/report">
            <Button size="lg">
              Report a Dark Pattern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
