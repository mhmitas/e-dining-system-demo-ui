import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

export default function EDiningHero() {
    return (
        <div className="bg-gradient-to-b from-primary/20 to-background flex justify-center items-center min-h-[calc(100vh-64px)]">
            <div className="my-container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                            Dine Smarter, Not Harder
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Experience the future of dining with our e-dining system. Order, customize, and enjoy your meals with just a few taps.
                        </p>
                        <Button asChild>
                            <Link href="/packages" size="lg" className="text-lg">
                                Start Exploring
                            </Link>
                        </Button>
                    </div>
                    <Card className="overflow-hidden relative">
                        <CardContent className="p-0">
                            <Image
                                src="https://i.ibb.co/qJR0pSM/2149141352.jpg"
                                alt="E-Dining Experience"
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-cover"
                            />
                        </CardContent>
                        <div className="absolute p-2 inset-0 z-10 flex justify-between items-center">
                            <Button size="icon" className="rounded-full"><ChevronLeft /></Button>
                            <Button size="icon" className="rounded-full"><ChevronRight /></Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}