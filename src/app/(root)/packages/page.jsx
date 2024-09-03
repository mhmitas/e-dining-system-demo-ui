import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {

    return (
        <section className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold  sm:text-4xl">Choose the right plan for you</h2>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Experience the perfect blend of flavor and ambiance at our restaurant, where every meal is crafted with passion and served with a smile!
                    </p>
                </div>
                <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    {tiers.map((tier) => (
                        <Card key={tier.name} className="flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                                <CardDescription className="">{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center space-x-2">
                                    <span className="text-4xl font-extrabold">{tier.price} BDT</span>
                                </div>
                                <ul className="mt-8 space-y-4">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="h-5 w-5 text-green-500 mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant="default">
                                    Purchase
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}


const tiers = [
    {
        name: "7 Days",
        price: "999",
        description: "Lorem ipsum dolor sit amet consectetur",
        features: [
            "Farm-to-table ingredients for fresh and healthy meals",
            "Live music performances every weekend",
            "A variety of vegan and gluten-free options",
            "Outdoor seating with a scenic view",
            "Interactive cooking classes with the chef"
        ],
    },
    {
        name: "15 Days",
        price: "1500",
        description: "Lorem ipsum dolor sit amet consectetur",
        features: [
            "Farm-to-table ingredients for fresh and healthy meals",
            "Live music performances every weekend",
            "A variety of vegan and gluten-free options",
            "Outdoor seating with a scenic view",
            "Interactive cooking classes with the chef"
        ],
    },
    {
        name: "30 Days",
        price: "2500",
        description: "Lorem ipsum dolor sit amet consectetur",
        features: [
            "Farm-to-table ingredients for fresh and healthy meals",
            "Live music performances every weekend",
            "A variety of vegan and gluten-free options",
            "Outdoor seating with a scenic view",
            "Interactive cooking classes with the chef"
        ],
    },
]