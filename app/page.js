import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is ZCRUM?",
    answer:
      "ZCRUM is an advanced project management solution aimed at helping teams efficiently coordinate, monitor, and execute their tasks. It blends a user-friendly interface with powerful tools to streamline operations and increase productivity.",
  },
  {
    question: "How does ZCRUM stand out from other project management platforms?",
    answer:
      "ZCRUM combines ease of use with robust capabilities and adaptability. Unlike many alternatives, it supports both agile and traditional workflows, offering a smooth experience across diverse team setups and project needs.",
  },
  {
    question: "Is ZCRUM a good fit for small teams?",
    answer:
      "Definitely! ZCRUM is built to be both adaptable and scalable. It’s ideal for smaller teams and can evolve with your company as it grows. Its straightforward design ensures teams of all sizes can quickly start using it effectively.",
  },
  {
    question: "What are the main features of ZCRUM?",
    answer:
      "ZCRUM includes a variety of powerful tools such as user-friendly Kanban boards for workflow visualization, efficient sprint planning for agile practices, detailed reporting for informed decisions, customizable workflows, time tracking, and team collaboration features—all working together to enhance your project management.",
  },
  {
    question: "Does ZCRUM support managing several projects at once?",
    answer:
      "Absolutely, ZCRUM is designed to handle multiple projects simultaneously. You can seamlessly switch between projects and gain a comprehensive overview of all current initiatives, making it perfect for teams managing multiple assignments or clients.",
  },
  {
    question: "Is ZCRUM easy for beginners to learn?",
    answer:
      "Though ZCRUM is feature-rich, it's built with simplicity in mind. Its intuitive design, guided onboarding, and thorough documentation help new users get comfortable and productive in no time.",
  },
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Easily manage and visualize task flow with our user-friendly Kanban boards, enhancing team efficiency.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Keep your team aligned and productive by organizing sprints effectively with our robust planning tools.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Track performance and progress with in-depth, customizable analytics to support informed decision-making.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
        Make your workflow more efficient with <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with
            <Image
              src={"/logo2.png"}
              alt="Zscrum Logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Strengthen your team's efficiency with our powerful project management tool.
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using ZCRUM to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}