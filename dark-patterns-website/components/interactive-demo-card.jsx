"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function InteractiveDemoCard({ id, title, description }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [demoState, setDemoState] = useState({
    forcedContinuity: {
      step: 1,
      showAlert: false,
    },
    confirmshaming: {
      step: 1,
      showAlert: false,
    },
    hiddenCosts: {
      step: 1,
      showAlert: false,
    },
    fakeUrgency: {
      step: 1,
      showAlert: false,
      timer: 300, // 5 minutes in seconds
    },
  })

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const renderDemo = () => {
    switch (id) {
      case "forced-continuity":
        return renderForcedContinuityDemo()
      case "confirmshaming":
        return renderConfirmshamingDemo()
      case "hidden-costs":
        return renderHiddenCostsDemo()
      case "fake-urgency":
        return renderFakeUrgencyDemo()
      default:
        return <p>Demo not available</p>
    }
  }

  const renderForcedContinuityDemo = () => {
    const { step, showAlert } = demoState.forcedContinuity

    const nextStep = () => {
      if (step === 3) {
        setDemoState({
          ...demoState,
          forcedContinuity: {
            ...demoState.forcedContinuity,
            showAlert: true,
          },
        })
      } else {
        setDemoState({
          ...demoState,
          forcedContinuity: {
            ...demoState.forcedContinuity,
            step: step + 1,
            showAlert: false,
          },
        })
      }
    }

    const resetDemo = () => {
      setDemoState({
        ...demoState,
        forcedContinuity: {
          step: 1,
          showAlert: false,
        },
      })
    }

    return (
      <div className="space-y-4">
        {step === 1 && (
          <div className="bg-background p-4 rounded-md border border-border">
            <h3 className="font-bold mb-2">Premium Fitness App - Free Trial</h3>
            <p className="mb-4">Get access to all premium features for 7 days!</p>
            <div className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md" />
              <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md" />
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  I agree to the Terms & Conditions
                </label>
              </div>
              <Button onClick={nextStep} className="w-full">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-background p-4 rounded-md border border-border">
            <h3 className="font-bold mb-2">One More Step!</h3>
            <p className="mb-4">To activate your free trial, please enter your payment details.</p>
            <p className="text-sm text-muted-foreground mb-4">Your card will not be charged during the trial period.</p>
            <div className="space-y-3">
              <input type="text" placeholder="Card Number" className="w-full px-3 py-2 border rounded-md" />
              <div className="grid grid-cols-2 gap-2">
                <input type="text" placeholder="MM/YY" className="px-3 py-2 border rounded-md" />
                <input type="text" placeholder="CVC" className="px-3 py-2 border rounded-md" />
              </div>
              <Button onClick={nextStep} className="w-full">
                Activate Free Trial
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-background p-4 rounded-md border border-border">
            <h3 className="font-bold mb-2">Success!</h3>
            <p className="mb-4">Your 7-day free trial has been activated.</p>
            <p className="text-sm text-muted-foreground mb-4">
              After your trial ends, your subscription will automatically continue at $19.99/month unless canceled.
            </p>
            <Button onClick={nextStep} className="w-full">
              Start Using Premium Features
            </Button>
          </div>
        )}

        {showAlert && (
          <Alert className="bg-red-500/10 border-red-500">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertDescription>
              <p className="font-medium">Dark Pattern Detected: Forced Continuity</p>
              <p className="text-sm mt-1">
                This pattern automatically converts a free trial into a paid subscription without requiring explicit
                consent for the conversion. The payment requirement is upfront, but the auto-renewal is mentioned only
                in small print.
              </p>
              <Button variant="outline" size="sm" className="mt-2" onClick={resetDemo}>
                Reset Demo
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </div>
    )
  }

  const renderConfirmshamingDemo = () => {
    const { step, showAlert } = demoState.confirmshaming

    const nextStep = () => {
      setDemoState({
        ...demoState,
        confirmshaming: {
          ...demoState.confirmshaming,
          showAlert: true,
        },
      })
    }

    const resetDemo = () => {
      setDemoState({
        ...demoState,
        confirmshaming: {
          step: 1,
          showAlert: false,
        },
      })
    }

    return (
      <div className="space-y-4">
        <div className="bg-background p-4 rounded-md border border-border">
          <h3 className="font-bold mb-2">Join Our Newsletter</h3>
          <p className="mb-4">Stay updated with our latest offers and news!</p>
          <div className="space-y-3">
            <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md" />
            <Button onClick={nextStep} className="w-full">
              Subscribe
            </Button>
            <button className="w-full text-sm text-muted-foreground hover:text-foreground py-2" onClick={nextStep}>
              No thanks, I don't want to save money
            </button>
          </div>
        </div>

        {showAlert && (
          <Alert className="bg-red-500/10 border-red-500">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertDescription>
              <p className="font-medium">Dark Pattern Detected: Confirmshaming</p>
              <p className="text-sm mt-1">
                This pattern uses guilt or shame to manipulate users into making a choice. The decline option is worded
                to make users feel like they're making a bad or irrational choice, exploiting emotional responses.
              </p>
              <Button variant="outline" size="sm" className="mt-2" onClick={resetDemo}>
                Reset Demo
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </div>
    )
  }

  const renderHiddenCostsDemo = () => {
    const { step, showAlert } = demoState.hiddenCosts

    const nextStep = () => {
      if (step < 3) {
        setDemoState({
          ...demoState,
          hiddenCosts: {
            ...demoState.hiddenCosts,
            step: step + 1,
            showAlert: false,
          },
        })
      } else {
        setDemoState({
          ...demoState,
          hiddenCosts: {
            ...demoState.hiddenCosts,
            showAlert: true,
          },
        })
      }
    }

    const resetDemo = () => {
      setDemoState({
        ...demoState,
        hiddenCosts: {
          step: 1,
          showAlert: false,
        },
      })
    }

    return (
      <div className="space-y-4">
        {step === 1 && (
          <div className="bg-background p-4 rounded-md border border-border">
            <h3 className="font-bold mb-2">Premium Headphones</h3>
            <p className="text-xl font-bold text-primary mb-1">$79.99</p>
            <p className="mb-4">High-quality wireless headphones with noise cancellation</p>
            <Button onClick={nextStep} className="w-full">
              Add to Cart
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-background p-4 rounded-md border border-border">
            <h3 className="font-bold mb-2">Your Cart</h3>
            <div className="py-2 border-b">
              <div className="flex justify-between">
                <span>Premium Headphones</span>
                <span>$79.99</span>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between font-bold">
                <span>Subtotal</span>
                <span>$79.99</span>
              </div>
            </div>
            <Button onClick={nextStep} className="w-full mt-4">
              Proceed to Checkout
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-background p-4 rounded-md border border-border">
            <h3 className="font-bold mb-2">Checkout</h3>
            <div className="py-2 border-b">
              <div className="flex justify-between">
                <span>Premium Headphones</span>
                <span>$79.99</span>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between">
                <span>Shipping & Handling</span>
                <span>$12.99</span>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>$4.99</span>
              </div>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$97.97</span>
              </div>
            </div>
            <Button onClick={nextStep} className="w-full mt-4">
              Complete Purchase
            </Button>
          </div>
        )}

        {showAlert && (
          <Alert className="bg-red-500/10 border-red-500">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertDescription>
              <p className="font-medium">Dark Pattern Detected: Hidden Costs</p>
              <p className="text-sm mt-1">
                This pattern hides the true cost of a purchase by revealing additional fees only at the final checkout
                stage. The initial price was advertised as $79.99, but the final cost is $97.97 - an increase of nearly
                23%.
              </p>
              <Button variant="outline" size="sm" className="mt-2" onClick={resetDemo}>
                Reset Demo
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </div>
    )
  }

  const renderFakeUrgencyDemo = () => {
    const { step, showAlert, timer } = demoState.fakeUrgency

    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const nextStep = () => {
      setDemoState({
        ...demoState,
        fakeUrgency: {
          ...demoState.fakeUrgency,
          showAlert: true,
        },
      })
    }

    const resetDemo = () => {
      setDemoState({
        ...demoState,
        fakeUrgency: {
          step: 1,
          showAlert: false,
          timer: 300,
        },
      })
    }

    return (
      <div className="space-y-4">
        <div className="bg-background p-4 rounded-md border border-border">
          <div className="bg-red-500/10 text-red-500 p-2 rounded-md mb-3 flex items-center justify-between">
            <span className="font-bold">Flash Sale Ending Soon!</span>
            <span className="font-mono">{formatTime(timer)}</span>
          </div>

          <h3 className="font-bold mb-2">Premium Course Bundle</h3>
          <div className="flex items-center mb-2">
            <span className="text-xl font-bold text-primary">$49.99</span>
            <span className="text-sm line-through text-muted-foreground ml-2">$199.99</span>
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded ml-2">75% OFF</span>
          </div>

          <p className="mb-4">Complete web development course bundle - 50+ hours of content</p>

          <div className="text-sm text-muted-foreground mb-4 flex items-center">
            <span className="font-bold text-red-500 mr-1">Limited availability:</span>
            <span>Only 3 spots remaining at this price!</span>
          </div>

          <Button onClick={nextStep} className="w-full">
            Claim This Offer Now
          </Button>
        </div>

        {showAlert && (
          <Alert className="bg-red-500/10 border-red-500">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertDescription>
              <p className="font-medium">Dark Pattern Detected: Fake Urgency/Scarcity</p>
              <p className="text-sm mt-1">
                This pattern creates a false sense of urgency or scarcity to pressure users into making quick decisions.
                The countdown timer, limited spots, and huge discount are often artificial and reset for each visitor.
              </p>
              <Button variant="outline" size="sm" className="mt-2" onClick={resetDemo}>
                Reset Demo
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </div>
    )
  }

  return (
    <Card id={id}>
      <CardHeader className="cursor-pointer" onClick={toggleExpand}>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </CardHeader>
      {isExpanded && <CardContent>{renderDemo()}</CardContent>}
    </Card>
  )
}
