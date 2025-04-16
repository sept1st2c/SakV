"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ReportPage() {
  const [formState, setFormState] = useState({
    website: "",
    patternType: "",
    description: "",
    screenshot: null,
    impact: "",
    consent: false,
    email: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e) => {
    setFormState({
      ...formState,
      consent: e.target.checked,
    })
  }

  const handleSelectChange = (value, name) => {
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormState({
        ...formState,
        screenshot: e.target.files[0],
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formState.website || !formState.patternType || !formState.description || !formState.consent) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all required fields and accept the terms.",
      })
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for your report! We will review it shortly.",
      })

      // Reset form
      setFormState({
        website: "",
        patternType: "",
        description: "",
        screenshot: null,
        impact: "",
        consent: false,
        email: "",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Report a Dark Pattern</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Help us document and fight deceptive design practices by reporting dark patterns you encounter
      </p>

      {formStatus.submitted ? (
        <Alert className="mb-8 bg-green-500/10 border-green-500">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      ) : formStatus.error ? (
        <Alert className="mb-8 bg-red-500/10 border-red-500">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Dark Pattern Report Form</CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us understand and document the dark pattern.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="website">Website or App Name *</Label>
                <Input
                  id="website"
                  name="website"
                  placeholder="e.g., example.com"
                  value={formState.website}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="patternType">Type of Dark Pattern *</Label>
                <Select
                  value={formState.patternType}
                  onValueChange={(value) => handleSelectChange(value, "patternType")}
                  required
                >
                  <SelectTrigger id="patternType">
                    <SelectValue placeholder="Select a pattern type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="confirmshaming">Confirmshaming</SelectItem>
                    <SelectItem value="hidden-costs">Hidden Costs</SelectItem>
                    <SelectItem value="forced-continuity">Forced Continuity</SelectItem>
                    <SelectItem value="roach-motel">Roach Motel</SelectItem>
                    <SelectItem value="trick-questions">Trick Questions</SelectItem>
                    <SelectItem value="misdirection">Misdirection</SelectItem>
                    <SelectItem value="fake-urgency">Fake Urgency/Scarcity</SelectItem>
                    <SelectItem value="privacy-zuckering">Privacy Zuckering</SelectItem>
                    <SelectItem value="bait-switch">Bait and Switch</SelectItem>
                    <SelectItem value="other">Other (please specify)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description of the Dark Pattern *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Please describe what happened, where you found it, and how it affected you..."
                  rows={5}
                  value={formState.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="screenshot">Screenshot or Recording (optional)</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="screenshot"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG, GIF or MP4 (MAX. 10MB)</p>
                    </div>
                    <input
                      id="screenshot"
                      type="file"
                      className="hidden"
                      accept="image/png, image/jpeg, image/gif, video/mp4"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                {formState.screenshot && (
                  <p className="text-sm text-muted-foreground">File selected: {formState.screenshot.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="impact">Impact (optional)</Label>
                <Textarea
                  id="impact"
                  name="impact"
                  placeholder="How did this dark pattern affect you or others? Did it lead to unwanted purchases, privacy violations, etc.?"
                  rows={3}
                  value={formState.impact}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email (optional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="For follow-up questions (we won't share it)"
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="consent" checked={formState.consent} onCheckedChange={handleCheckboxChange} required />
                <Label htmlFor="consent" className="text-sm">
                  I consent to having this report stored in the dark patterns database. I understand that all personal
                  information will be anonymized. *
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Submit Report
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Why Report Dark Patterns?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Help others avoid deceptive practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Contribute to research and awareness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Encourage companies to adopt ethical design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Support potential regulatory action</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside">
                <li>Our team reviews your submission</li>
                <li>We verify and categorize the dark pattern</li>
                <li>The example is added to our database</li>
                <li>Serious violations may be reported to relevant authorities</li>
                <li>Your contribution helps make the web more ethical!</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
