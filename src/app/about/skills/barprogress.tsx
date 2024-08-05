"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface BarProgressProps {
  textPercentage: string
  textLanguage: string
  percentage: number

}

export default function BarProgress({textPercentage, textLanguage, percentage}: BarProgressProps) {
  return (
    <div className="w-full max-w-md">
     
      <div className="grid gap-6 py-6">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">{textLanguage}</span>
            <span className="text-muted-foreground">{textPercentage}</span>
          </div>
          <Progress value={percentage} />
        </div>
       
      </div>
    </div>
  )
}