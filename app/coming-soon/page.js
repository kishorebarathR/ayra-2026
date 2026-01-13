"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002561] to-[#003070] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#0072C5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#8772F7]/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/ayra-logo.svg"
            alt="AYRA Logo"
            width={200}
            height={80}
            className="h-auto w-auto"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Coming Soon
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0072C5] to-[#8772F7] mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">
            We're working hard to bring you something amazing.
            <br />
            This page will be available soon.
          </p>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2 mb-12">
            <div
              className="w-3 h-3 bg-[#0072C5] rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-[#8772F7] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-[#0072C5] rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#0072C5] hover:bg-[#005a9e] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ComingSoon
