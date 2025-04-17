import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Download, Github, ExternalLink, Code, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function ExtensionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">SakV Dark Pattern Detector</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        A browser extension to identify and highlight dark patterns while browsing
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="mb-10">
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-primary/10 p-6 rounded-full">
                  <Shield className="h-16 w-16 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">SakV Extension</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Protect yourself from manipulative design practices while browsing the web
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Link href="https://github.com/sept1st2c/SakV" target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </Button>
                    </Link>
                    <Link href="https://github.com/sept1st2c/SakV/releases" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download Latest Release
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="usage">Usage Guide</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Real-time Detection</h4>
                          <p className="text-sm text-muted-foreground">
                            Automatically scans webpages for common dark patterns as you browse
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Visual Highlighting</h4>
                          <p className="text-sm text-muted-foreground">
                            Highlights detected dark patterns directly on the webpage
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Pattern Classification</h4>
                          <p className="text-sm text-muted-foreground">
                            Identifies specific types of dark patterns (confirmshaming, fake urgency, etc.)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Code className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">Open Source</h4>
                          <p className="text-sm text-muted-foreground">
                            Fully transparent codebase that anyone can inspect, modify, or contribute to
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Detected Dark Patterns</h3>
                <p className="mb-4">The SakV extension can detect various types of dark patterns, including:</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Confirmshaming</Badge>
                  <Badge variant="outline">Fake Urgency</Badge>
                  <Badge variant="outline">Hidden Costs</Badge>
                  <Badge variant="outline">Forced Continuity</Badge>
                  <Badge variant="outline">Trick Questions</Badge>
                  <Badge variant="outline">Misdirection</Badge>
                  <Badge variant="outline">Visual Interference</Badge>
                  <Badge variant="outline">Roach Motel</Badge>
                  <Badge variant="outline">Privacy Zuckering</Badge>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> The extension is continuously improving its detection capabilities. If you
                    encounter a dark pattern that wasn't detected, please report it to help improve the extension.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="installation" className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Installation Guide</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-2">Method 1: Install from GitHub</h4>
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                      <li>
                        <span className="font-medium">Download the extension:</span>
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>
                            Go to{" "}
                            <Link
                              href="https://github.com/sept1st2c/SakV/releases"
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://github.com/sept1st2c/SakV/releases
                            </Link>
                          </li>
                          <li>Download the latest release ZIP file</li>
                          <li>Extract the ZIP file to a folder on your computer</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">Install in Chrome:</span>
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>Open Chrome and navigate to chrome://extensions/</li>
                          <li>Enable "Developer mode" using the toggle in the top-right corner</li>
                          <li>Click "Load unpacked" and select the extracted folder</li>
                          <li>The SakV extension should now appear in your extensions list</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">Install in Firefox:</span>
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>Open Firefox and navigate to about:debugging#/runtime/this-firefox</li>
                          <li>Click "Load Temporary Add-on"</li>
                          <li>Navigate to the extracted folder and select the manifest.json file</li>
                          <li>The SakV extension should now be installed temporarily</li>
                        </ul>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-2">Method 2: Clone and Build from Source</h4>
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                      <li>
                        <span className="font-medium">Clone the repository:</span>
                        <div className="bg-muted p-3 rounded-md mt-1 overflow-x-auto">
                          <code>git clone https://github.com/sept1st2c/SakV.git</code>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">Navigate to the project directory:</span>
                        <div className="bg-muted p-3 rounded-md mt-1 overflow-x-auto">
                          <code>cd SakV</code>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">Install dependencies:</span>
                        <div className="bg-muted p-3 rounded-md mt-1 overflow-x-auto">
                          <code>npm install</code>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">Build the extension:</span>
                        <div className="bg-muted p-3 rounded-md mt-1 overflow-x-auto">
                          <code>npm run build</code>
                        </div>
                      </li>
                      <li>
                        <span className="font-medium">
                          Follow the browser-specific installation steps from Method 1 using the built files
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="usage" className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">How to Use SakV</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-2">Basic Usage</h4>
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                      <li>
                        <span className="font-medium">
                          After installation, the extension runs automatically in the background
                        </span>
                      </li>
                      <li>
                        <span className="font-medium">Browse websites as you normally would</span>
                      </li>
                      <li>
                        <span className="font-medium">When a dark pattern is detected:</span>
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>The extension icon will change to indicate detection</li>
                          <li>The dark pattern will be highlighted on the page</li>
                          <li>A tooltip will explain what type of dark pattern was detected</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">
                          Click on the extension icon to see a summary of detected patterns
                        </span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-2">Extension Settings</h4>
                    <p className="mb-3">Access settings by clicking the extension icon and selecting "Settings":</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <span className="font-medium">Toggle specific pattern detection on/off</span>
                      </li>
                      <li>
                        <span className="font-medium">Adjust highlight colors and styles</span>
                      </li>
                      <li>
                        <span className="font-medium">Enable/disable notifications</span>
                      </li>
                      <li>
                        <span className="font-medium">Set sensitivity level for detection</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-2">Reporting New Dark Patterns</h4>
                    <p className="mb-3">
                      If you encounter a dark pattern that wasn't detected, you can help improve the extension:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <span className="font-medium">Click the extension icon and select "Report a Dark Pattern"</span>
                      </li>
                      <li>
                        <span className="font-medium">
                          Fill out the form with details about the dark pattern and where you found it
                        </span>
                      </li>
                      <li>
                        <span className="font-medium">
                          Alternatively, submit a report through our{" "}
                          <Link href="/report" className="text-primary hover:underline">
                            website reporting form
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="font-medium">
                          For developers, you can also{" "}
                          <Link
                            href="https://github.com/sept1st2c/SakV/issues"
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            open an issue on GitHub
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Extension popup interface</p>
                  </div>
                  <p className="mt-2 text-sm text-center">Main extension interface</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Dark pattern highlighting</p>
                  </div>
                  <p className="mt-2 text-sm text-center">Example of highlighted dark pattern</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">Contributing to SakV</h3>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  SakV is an open-source project and welcomes contributions from the community. Here's how you can help:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="font-medium">Report bugs or suggest features through GitHub issues</span>
                  </li>
                  <li>
                    <span className="font-medium">Submit pull requests with code improvements or new features</span>
                  </li>
                  <li>
                    <span className="font-medium">Help improve documentation</span>
                  </li>
                  <li>
                    <span className="font-medium">Share the extension with others to increase awareness</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="https://github.com/sept1st2c/SakV/blob/main/CONTRIBUTING.md"
                    className="text-primary hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View contribution guidelines
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Repository</h4>
                    <Link
                      href="https://github.com/sept1st2c/SakV"
                      className="flex items-center text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      github.com/sept1st2c/SakV
                    </Link>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Latest Version</h4>
                    <p>v0.1.0 (Beta)</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Supported Browsers</h4>
                    <ul className="list-disc list-inside text-sm ml-2">
                      <li>Google Chrome</li>
                      <li>Mozilla Firefox</li>
                      <li>Microsoft Edge</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">License</h4>
                    <p>MIT License</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Have questions, feedback, or want to report issues with the extension? Get in touch:
                </p>
                <Link href="mailto:3shubh17@gmail.com" className="flex items-center text-primary hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  3shubh17@gmail.com
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/types" className="flex items-center text-primary hover:underline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Types of Dark Patterns
                    </Link>
                  </li>
                  <li>
                    <Link href="/examples" className="flex items-center text-primary hover:underline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Real-Life Examples
                    </Link>
                  </li>
                  <li>
                    <Link href="/avoid" className="flex items-center text-primary hover:underline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      How to Avoid Dark Patterns
                    </Link>
                  </li>
                  <li>
                    <Link href="/report" className="flex items-center text-primary hover:underline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Report a Dark Pattern
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
