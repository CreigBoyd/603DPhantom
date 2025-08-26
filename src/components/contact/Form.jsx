"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data) => {
    const toastId = toast.loading("Sending your message, please wait...");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "Thank you for your message! We'll get back to you within 24 hours.",
          {
            id: toastId,
          }
        );
        reset(); // Clear the form after successful submission
      } else {
        toast.error(
          result.error || "There was an error sending your message. Please try again.",
          {
            id: toastId,
          }
        );
      }
    } catch (error) {
      toast.error(
        "Network error. Please check your connection and try again.",
        {
          id: toastId,
        }
      );
    }
  };

  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: "Please enter your name",
            minLength: {
              value: 2,
              message: "Name should be at least 2 characters long",
            },
            maxLength: {
              value: 50,
              message: "Name should be less than 50 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        
        <motion.input
          variants={item}
          type="email"
          placeholder="Your Email"
          {...register("email", { 
            required: "Please enter your email address",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address"
            }
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.input
          variants={item}
          type="text"
          placeholder="Subject"
          {...register("subject", {
            required: "Please enter a subject",
            minLength: {
              value: 5,
              message: "Subject should be at least 5 characters long",
            },
            maxLength: {
              value: 100,
              message: "Subject should be less than 100 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.subject && (
          <span className="inline-block self-start text-accent">
            {errors.subject.message}
          </span>
        )}
        
        <motion.textarea
          variants={item}
          placeholder="Tell us about your project..."
          rows={5}
          {...register("message", {
            required: "Please enter your message",
            minLength: {
              value: 20,
              message: "Message should be at least 20 characters long",
            },
            maxLength: {
              value: 1000,
              message: "Message should be less than 1000 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg resize-none"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Send Message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      hover:bg-accent/10 transition-colors duration-300"
          type="submit"
        />
      </motion.form>
    </>
  );
}