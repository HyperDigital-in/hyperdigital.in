"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

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
  const [errors, setErrors] = useState<FormErrors>({});

  const validateFields = (): FormErrors => {
    const { name, email, subject, message } = formData;
    const newErrors: FormErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!subject) newErrors.subject = "Subject is required";
    if (!message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateFields();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
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
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          console.error("Form submission failed!");
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-20 mb-20 bg-gradient-to-b from-blue-50 to-purple-50 rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
        Contact Us
      </h2>
      <div className="max-w-2xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            {
              label: "Your Name",
              name: "name",
              type: "text",
              placeholder: "Alex Doe",
            },
            {
              label: "Your Email",
              name: "email",
              type: "email",
              placeholder: "alexdoe@gmail.com",
            },
            {
              label: "Subject",
              name: "subject",
              type: "text",
              placeholder: "What is the topic of your concern?",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700"
              >
                {label}
              </label>
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                className="border-blue-300 mt-1"
                name={name}
                value={formData[name as keyof FormData]}
                onChange={handleChange}
                required
              />
              {errors[name as keyof FormErrors] && (
                <p className="text-red-500 text-sm">
                  {errors[name as keyof FormErrors]}
                </p>
              )}
            </div>
          ))}
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
        <p>Alternatively, you can reach us in the below mentioned ways</p>
        <p>Email: admin@hyperdigital.in | Phone: +91-9733203984</p>
      </div>
    </section>
  );
}
