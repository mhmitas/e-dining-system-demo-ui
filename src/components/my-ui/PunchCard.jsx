'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Check, UtensilsCrossed } from "lucide-react"
import PresentACreditBox from './PresentACreditBox'
import { Dialog, DialogTrigger } from '../ui/dialog'


export default function MealPackages() {
    const [usedMeals, setUsedMeals] = useState(3)

    const activePackage = {
        type: '30days', duration: 30, meals: 60, expireDate: new Date()
    }

    const handlePunch = () => {

    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold my-6 text-center">Your Meal Package</h1>
            <div className="bg-card border text-card-foreground rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Punch Card</h2>
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-2 mb-6">
                    {[...Array(activePackage.meals).keys()].map((item, index) => <div
                        key={index}
                        className={`aspect-square rounded-md flex items-center justify-center ${index < usedMeals ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                            }`}
                    >
                        {index < usedMeals ? (
                            <Check className="w-6 h-6" />
                        ) : (
                            <UtensilsCrossed className="w-6 h-6 text-primary" />
                        )}
                    </div>)}
                </div>

                <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{usedMeals} / {activePackage.meals} credits</span>
                    </div>
                    <Progress value={(usedMeals / activePackage.meals) * 100} />
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                    <p>30 days package</p>
                    <p>Total credits: 60</p>
                    <p>Package expires on: 12 August, 2024</p>
                </div>

                <div className='text-center'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                onClick={handlePunch}
                                disabled={usedMeals >= activePackage.meals}
                                className="py-4"
                            >
                                Take Credit
                            </Button>
                        </DialogTrigger>
                        <PresentACreditBox />
                    </Dialog>
                </div>
            </div>
        </div>
    )
}