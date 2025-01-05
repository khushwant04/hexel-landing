'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'


interface SlideContent {
  id: number
  category: string
  title: string
  description: string
  date?: string
  ctaText?: string
}

const slides: SlideContent[] = [
  {
    id: 1,
    category: 'Product Launch',
    title: 'Hexel Studio: Empowering AI Innovation',
    description: 'Introducing Hexel Studio, a comprehensive platform for building, experimenting, and deploying state-of-the-art AI models seamlessly.',
    date: 'January 10, 2025',
    ctaText: 'Discover More'
  },
  {
    id: 2,
    category: 'Tutorials',
    title: 'Get Started with Hexel Studio',
    description: 'Learn how to leverage Hexel Studio for end-to-end AI development with our detailed guides and tutorials.',
    date: 'January 18, 2025',
    ctaText: 'Start Learning'
  },
  {
    id: 3,
    category: 'Community',
    title: 'Join the Hexel Studio User Group',
    description: 'Connect with developers and researchers worldwide to share ideas, projects, and best practices in AI development.',
    date: 'January 25, 2025',
    ctaText: 'Join Now'
  },
  {
    id: 4,
    category: 'Innovation',
    title: 'Revolutionizing AI Pipelines',
    description: 'Explore how Hexel Studio simplifies complex AI workflows, from data processing to model deployment.',
    date: 'February 5, 2025',
    ctaText: 'Explore Features'
  },
  {
    id: 5,
    category: 'Events',
    title: 'Hexel Studio Webinar Series',
    description: 'Join our live webinars to dive deep into the functionalities and use cases of Hexel Studio.',
    date: 'February 15, 2025',
    ctaText: 'Register Now'
  }
];


export default function CompanyInfoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])



  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden bg-black min-h-[600px] rounded-3xl">
      <div
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <Card
            key={slide.id}
            className="w-full flex-shrink-0 bg-black text-white border-none rounded-3xl"
          >
            <div className="relative h-[600px] flex flex-col justify-center">
              <div className="space-y-6 max-w-2xl">
                <div className="text-sm uppercase tracking-wider text-gray-400">
                  {slide.category}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h2>
                {slide.date && (
                  <div className="text-sm text-gray-400">
                    {slide.date}
                  </div>
                )}
                <p className="text-lg text-gray-300">
                  {slide.description}
                </p>
                {/* {slide.ctaText && (
                  <Button
                    className="mt-4 bg-white text-black hover:bg-gray-200"
                  >
                    {slide.ctaText}
                  </Button>
                )} */}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${currentSlide === index
                ? 'w-6 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/70'
              }`}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
              // Restart autoplay after 10 seconds of inactivity
              setTimeout(() => setIsAutoPlaying(true), 10000)
            }}
          />
        ))}
      </div>
    </div>
  )
}

