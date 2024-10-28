import * as React from "react";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
}

interface PricingCardProps {
  name: string;
  description: string;
  features: string[];
}

interface TestimonialCardProps {
  quote: string;
  name: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  features,
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
    <div className="relative z-10 flex h-full flex-col justify-between bg-white p-6 transition-all duration-300 group-hover:bg-opacity-90">
      <div>
        <h3 className="mb-2 text-2xl font-bold text-blue-800 transition-all duration-300 group-hover:text-purple-700">
          {name}
        </h3>
        <p className="mb-4 text-gray-600 transition-all duration-300 group-hover:text-gray-800">
          {description}
        </p>
      </div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Check className="mr-2 h-5 w-5 text-blue-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="#contact" className="w-full">
        <button className="w-full rounded-full bg-blue-600 py-2 px-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
          Contact Us
        </button>
      </Link>
    </div>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
    <div className="relative z-10 flex h-full flex-col bg-white p-6 transition-all duration-300 group-hover:bg-opacity-90">
      <div className="mb-4 flex items-center justify-center rounded-full bg-blue-100 p-3 text-blue-600 transition-all duration-300 group-hover:bg-blue-200 group-hover:text-blue-700">
        <div className="h-8 w-8">
          <Icon />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-bold text-blue-800 transition-all duration-300 group-hover:text-purple-700">
        {title}
      </h3>
      <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
        {description}
      </p>
    </div>
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
    <div className="relative z-10 flex h-full flex-col justify-between bg-white p-6 transition-all duration-300 group-hover:bg-opacity-90">
      <p className="mb-4 text-lg text-blue-600 transition-all duration-300 group-hover:text-blue-700">
        &quot;{quote}&quot;
      </p>
      <p className="text-left text-purple-600 font-semibold transition-all duration-300 group-hover:text-purple-700">
        {name}
      </p>
    </div>
  </div>
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow ",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ServiceCard,
  PricingCard,
  TestimonialCard,
};
