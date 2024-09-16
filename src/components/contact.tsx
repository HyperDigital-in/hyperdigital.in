"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent, FormEvent } from "react";

// Define the type for formData
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define the type for errors
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactComponent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({}); // Now we explicitly type errors

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic client-side validation
    const newErrors: FormErrors = {}; // Use FormErrors type here
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with submission
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_FORM_URL as string,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({}); // Clear errors after successful submission
      } else {
        console.error("Form submission failed!");
      }
    }
  };

  return (
    <section id="contact" className="py-20 mb-20 bg-blue-50 rounded-lg">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
        Contact Us
      </h2>
      <div className="max-w-2xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Alex Doe"
              className="border-blue-300 mt-1"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="alexdoe@gmail.com"
              className="border-blue-300 mt-1"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="What is the topic of your concern?"
              className="border-blue-300 mt-1"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Describe your concern"
              className="border-blue-300 mt-1"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Send Message
          </Button>
        </form>
      </div>
      <div className="pt-6 text-center text-blue-800">
          <p>
            Alternatively, you can reach us in the below mentioned ways
          </p>
          <p>Email: admin@hyperdigital.in | Phone: +91-9733203984</p>
        </div>
    </section>
  );
}
