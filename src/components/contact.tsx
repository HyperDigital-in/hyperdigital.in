"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent, FormEvent } from "react";

export function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const [errors, setErrors] = useState({}); // To store validation errors

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    console.log(formData);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic client-side validation
    // const newErrors = {};
    // if (!formData.name) newErrors.name = 'Name is required';
    // if (!formData.email) newErrors.email = 'Email is required';
    // if (!formData.subject) newErrors.subject = 'Subject is required';
    // if (!formData.message) newErrors.message = 'Message is required';
    // setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) { // No errors, proceed with submission
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_FORM_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // setErrors({}); // Clear errors after successful submission
    } else {
      console.error("Form submission failed!");
      // You can add code here to show an error message to the user
    }
    // }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
        Contact Us
      </h2>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="Your Name"
            className="border-blue-300"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {/* {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}{" "} */}
          {/* Display error message */}
          <Input
            type="email"
            placeholder="Your Email"
            className="border-blue-300"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )} */}
          <Input
            type="text"
            placeholder="Subject"
            className="border-blue-300"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {/* {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )} */}
          <Textarea
            placeholder="Your Message"
            className="border-blue-300"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {/* {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )} */}
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
