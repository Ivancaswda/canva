'use client'
import {Button} from "@/components/ui/button";
import React from 'react'
import {CheckCircle} from "lucide-react";
import {plans} from "@/services/Options";

const BillingPage = () => {
    return (
        <div
            className="min-h-screen w-full h-full bg-gradient-to-b from-gray-100 to-white p-8 flex flex-col gap-8 justify-center items-center">
            <h1 className="text-3xl font-bold text-center mb-12 ">Выберите свой план</h1>

            <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`bg-white shadow-md rounded-2xl border-t-4 ${plan.color} p-6 flex flex-col justify-between`}
                    >
                        <div>
                            <h2 className="text-xl font-bold">{plan.name}</h2>
                            <p className="text-3xl font-extrabold my-2">{plan.price}/мес</p>
                            <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

                            <ul className="flex flex-col gap-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="text-green-500 w-4 h-4"/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button className="mt-6 bg-primary text-white w-full">
                            Выбрать {plan.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BillingPage
