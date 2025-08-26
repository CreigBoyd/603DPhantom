"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // EmailJS Configuration - UPDATE THESE WITH YOUR VALUES!
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message, please wait...", {
      duration: Infinity,
    });

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
        sent_time: new Date().toLocaleString(),
        to_name: '603Design', // Your name/company
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      if (response.status === 200) {
        toast.success(
          "🎉 Thank you for your message! We'll get back to you within 24 hours.",
          {
            id: toastId,
            duration: 6000,
          }
        );
        reset(); // Clear the form after successful submission
        
        // Optional: Track successful submission
        console.log('Contact form submitted successfully:', response);
      } else {
        throw new Error('EmailJS response was not successful');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      
      let errorMessage = "😅 Oops! There was an issue sending your message. Please try again.";
      
      // Handle specific EmailJS errors
      if (error.text) {
        if (error.text.includes('rate limit')) {
          errorMessage = "⏰ Too many requests. Please wait a moment and try again.";
        } else if (error.text.includes('template')) {
          errorMessage = "🔧 Email template issue. Please contact us directly.";
        } else if (error.text.includes('service')) {
          errorMessage = "🔧 Email service temporarily unavailable. Please try again later.";
        }
      }
      
      toast.error(errorMessage, {
        id: toastId,
        duration: 8000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (data) => {
    if (!isSubmitting) {
      sendEmail(data);
    }
  };

  return (
    <>
      <Toaster 
        richColors={true} 
        position="top-center"
        expand={false}
        closeButton={true}
        theme="system"
      />
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
          disabled={isSubmitting}
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
            pattern: {
              value: /^[a-zA-Z\s'-]+$/,
              message: "Name should only contain letters, spaces, hyphens, and apostrophes",
            },
          })}
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        />
        {errors.name && (
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block self-start text-accent text-sm font-medium"
          >
            ⚠️ {errors.name.message}
          </motion.span>
        )}
        
        <motion.input
          variants={item}
          type="email"
          placeholder="Your Email"
          disabled={isSubmitting}
          {...register("email", { 
            required: "Please enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address"
            }
          })}
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        />
        {errors.email && (
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block self-start text-accent text-sm font-medium"
          >
            ⚠️ {errors.email.message}
          </motion.span>
        )}

        <motion.input
          variants={item}
          type="text"
          placeholder="Subject"
          disabled={isSubmitting}
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
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        />
        {errors.subject && (
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block self-start text-accent text-sm font-medium"
          >
            ⚠️ {errors.subject.message}
          </motion.span>
        )}
        
        <motion.textarea
          variants={item}
          placeholder="Tell us about your project... What's your vision? What are your goals? Any specific requirements or timeline?"
          rows={6}
          disabled={isSubmitting}
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
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        />
        {errors.message && (
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block self-start text-accent text-sm font-medium"
          >
            ⚠️ {errors.message.message}
          </motion.span>
        )}

        <motion.button
          variants={item}
          disabled={isSubmitting}
          type="submit"
          className="px-12 py-4 rounded-md shadow-lg text-white font-medium tracking-wide
          bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 
          border border-blue-400/30 backdrop-blur-sm
          hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-300/50
          hover:bg-gradient-to-br hover:from-blue-500 hover:via-blue-600 hover:to-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.4)]
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:hover:border-blue-400/30
          transition-all duration-300 capitalize cursor-pointer
          flex items-center gap-2 min-w-[160px] justify-center
          relative overflow-hidden group"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {/* Subtle animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent 
                         translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          {isSubmitting ? (
            <>
              <motion.div
                className="w-4 h-4 border-2 border-blue-200/30 border-t-blue-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Sending...
            </>
          ) : (
            <>
              📨 Send Message
            </>
          )}
        </motion.button>
        
        {/* Privacy Notice */}
        <motion.p 
          variants={item}
          className="text-xs text-foreground/60 text-center mt-2 max-w-sm"
        >
          🔒 Your information is secure and will only be used to respond to your inquiry.
        </motion.p>
      </motion.form>
    </>
  );
}