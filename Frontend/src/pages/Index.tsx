import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Cpu,
  Server,
  Share2,
  Clock,
  Lock,
  FileText,
  Database,
  Github,
  Download,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index: React.FC = () => {
  // GitHub username to be prominently displayed
  const githubUsername = "pavandhadge/goLocalShare";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with professional color scheme */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              {/* Go Gopher Mascot */}
              <img
                src="/go-gopher-svgrepo-com.svg"
                alt="Go Gopher Mascot"
                className="h-32 w-32 animate-bounce"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              goLocalShare
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Share files securely across your local network in seconds
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() =>
                  window.open(
                    `https://github.com/pavandhadge/goFileShare/releases/tag/goFileSharev2`,
                    "_blank",
                  )
                }
                size="lg"
                className="gap-2 bg-white text-blue-600 hover:bg-blue-50"
              >
                <Download size={20} />
                Download
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white text-black hover:bg-white/10"
                onClick={() =>
                  window.open(`https://github.com/${githubUsername}`, "_blank")
                }
              >
                <Github size={20} />
                GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="relative h-16 md:h-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="rgb(249 250 251)"
              d="M0,0 C240,80 480,100 720,80 C960,60 1200,40 1440,80 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Subtle Features Section with Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What It Does
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Our tool makes sharing files simple and secure.
          </p>

          {/* Features in a more subtle presentation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="pb-2 relative">
                  <div className="absolute -right-8 -top-8 bg-blue-100 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="mb-4 text-blue-500 relative z-10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl relative z-10">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80 text-base relative z-10">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Focus Section - NEW */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Github className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl font-bold mb-6">Open Source on GitHub</h2>
            <p className="text-lg mb-8">
              This project is completely open source. Check out the code,
              contribute, or report issues on GitHub.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 flex items-center justify-center">
              <div className="flex items-center bg-gray-100 px-5 py-3 rounded-md font-mono text-lg">
                <span className="text-gray-500 mr-2">github.com/</span>
                <span className="font-bold text-blue-600">
                  {githubUsername}
                </span>
              </div>
            </div>
            <Button
              size="lg"
              className="gap-2 bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                window.open(`https://github.com/${githubUsername}`, "_blank")
              }
            >
              <Github size={20} />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple to Use
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Start sharing files in seconds with our lightweight and powerful
                CLI tool.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm">
                  <p className="text-gray-400"># Share a single file</p>
                  <p>./goLocalShare /path/to/your/file.ext</p>
                </div>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm">
                  <p className="text-gray-400"># Share a directory</p>
                  <p>./goLocalShare --dir /path/to/your/directory</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Lightning Fast Setup</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium">
                      Download the binary or build from source
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Run the server command</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium">
                      Share the link with anyone on your network
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section with Gopher */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Security
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Every aspect of goLocalShare is designed with security in mind
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <SecurityFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        {/* Go Gopher in the background */}
        <div className="absolute -right-20 -bottom-20 opacity-10">
          <img
            src="https://go.dev/images/gophers/ladder.svg"
            alt="Go Gopher"
            className="w-64 h-64"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start sharing?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Get goLocalShare today and share files with confidence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() =>
                window.open(
                  `https://github.com/pavandhadge/goFileShare/releases/tag/goFileSharev2`,
                  "_blank",
                )
              }
              size="lg"
              className="gap-2 bg-white text-blue-600 hover:bg-blue-50"
            >
              <Download size={20} />
              Download
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white text-black hover:bg-white/10"
              onClick={() =>
                window.open(`https://github.com/${githubUsername}`, "_blank")
              }
            >
              <Github size={20} />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Server className="h-8 w-8 mr-3 text-blue-500" />
              <span className="text-xl font-bold text-white">goLocalShare</span>
            </div>
            <div className="text-sm">
              <p>A simple, secure file sharing solution.</p>
              {/* <p className="mt-2">© {new Date().getFullYear()} goLocalShare</p> */}
            </div>
            <div className="flex items-center mt-6 md:mt-0">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-black"
                onClick={() =>
                  window.open(`https://github.com/${githubUsername}`, "_blank")
                }
              >
                <Github size={48} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature data
const features = [
  {
    icon: <Share2 className="h-12 w-12" />,
    title: "Easy File Sharing",
    description:
      "Share files or directories over your local network with just one command",
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Secure Authentication",
    description: "Time-limited access tokens protect your shared content",
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Rate Limiting",
    description: "Built-in protection against brute force attacks",
  },
];

// Security features data
const securityFeatures = [
  {
    icon: <Lock />,
    title: "Authentication",
    description: "Time-limited tokens",
  },
  { icon: <Shield />, title: "Rate Limiting", description: "100 req/min" },
  { icon: <Database />, title: "No Size Limit", description: "Share freely" },
  { icon: <Cpu />, title: "Lightweight", description: "Small footprint" },
];

// Helper component
const SecurityFeature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow text-center">
    <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default Index;
