import React from "react"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Users, Zap, Globe, Award } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">About ElevateU</h1>
      <div className="space-y-8">
        <section className="text-center">
          <p className="text-xl text-muted-foreground">
            At ElevateU, we believe education is the cornerstone of progress and personal growth. Our mission is to
            bridge the gap between ambition and achievement by delivering world-class learning experiences that inspire,
            empower, and transform lives.
          </p>
        </section>

        <Separator />

        <section>
          <p className="mb-4">
            ElevateU is more than just an eLearning platform—it&apos;s a community of learners, educators, and
            innovators. We provide a dynamic space where knowledge is shared, skills are developed, and potential is
            unlocked. From foundational courses to advanced professional training, our platform is designed to meet the
            diverse needs of learners worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">What sets ElevateU apart:</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Personalized Learning Journeys"
              description="We offer tailored learning paths to suit individual goals, skill levels, and schedules."
            />
            <FeatureCard
              icon={<GraduationCap className="h-6 w-6" />}
              title="Expert-Led Content"
              description="Our courses are developed and taught by industry experts who bring real-world insights to every lesson."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Interactive and Engaging Tools"
              description="With multimedia content, gamification, and hands-on projects, we ensure a rich learning experience."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Flexible Accessibility"
              description="Access our platform 24/7 from anywhere in the world on any device."
            />
          </div>
        </section>

        <Separator />

        <section className="text-center">
          <p className="mb-4">
            Whether you&apos;re preparing for a new career, upgrading your skills, or exploring your passions, ElevateU
            is here to support your journey every step of the way. Together, let&apos;s unlock potential, drive
            innovation, and create a brighter future for everyone.
          </p>
          <p className="text-2xl font-semibold text-primary">
            Elevate your learning. Elevate your future. ElevateU.
          </p>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-primary">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}