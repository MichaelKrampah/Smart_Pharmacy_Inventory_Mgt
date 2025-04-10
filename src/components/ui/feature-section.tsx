"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  description?: string
  autoPlayInterval?: number
  imageHeight?: string
  theme?: {
    background?: string
    text?: string
    accent?: string
    stepColor?: string
    cardBackground?: string
  }
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  description,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
  theme = {
    background: "",
    text: "",
    accent: "",
    stepColor: "",
    cardBackground: "",
  },
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  // Handle manual selection
  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0)
  }

  return (
    <div className={cn("p-8 md:p-12", className, theme.background)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center",
            theme.text,
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "text-center text-lg mb-10 max-w-3xl mx-auto",
              theme.text ? `${theme.text} opacity-80` : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8 cursor-pointer"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleFeatureClick(index)}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? cn(
                          "scale-110",
                          theme.stepColor
                            ? `bg-${theme.stepColor} border-${theme.stepColor}`
                            : "bg-primary border-primary text-primary-foreground",
                        )
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3
                    className={cn("text-xl md:text-2xl font-semibold", theme.accent)}
                  >
                    {feature.title || feature.step}
                  </h3>
                  <p
                    className={cn(
                      "text-sm md:text-lg",
                      theme.text ? `${theme.text} opacity-80` : "text-muted-foreground",
                    )}
                  >
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative overflow-hidden rounded-lg",
              imageHeight,
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                      />
                      <div
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t",
                          theme.background
                            ? `from-${theme.background} via-${theme.background}/50 to-transparent`
                            : "from-background via-background/50 to-transparent",
                        )}
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
