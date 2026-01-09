import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  BarChart,
  BookOpen,
  GraduationCap,
  Target,
  Zap,
  Award,
  TrendingUp,
  Bell
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-sm bg-gray-900/90 z-50">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <GraduationCap size={28} />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold">CoachPro</span>
          </div>

          <div className="hidden md:flex gap-7 text-gray-300 font-medium">
            {["Home", "Features", "Demo", "Pricing"].map((item) => (
              <button
                key={item}
                className="bg-none border-none cursor-pointer transition-colors hover:text-yellow-400"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="px-4 sm:px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold shadow-sm transition-transform duration-200 hover:scale-105"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-32 pb-20 px-4 sm:px-6 md:px-6">
        <div className="max-w-[1280px] mx-auto">

          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-100/20 rounded-full mb-6 text-sm text-blue-400 mx-auto">
            <Zap size={16} />
            <span>Powered by AI & Machine Learning</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transform Your Coaching Institute
          </h1>

          <p className="text-gray-300 max-w-[700px] mx-auto mb-10 leading-relaxed text-sm sm:text-base md:text-lg">
            Complete classroom management with AI-powered analytics, attendance
            tracking, performance monitoring, and seamless communication
            between teachers and students.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-12">
            <button
              className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-500 text-black rounded-lg font-semibold shadow-sm flex items-center gap-2 transition-transform duration-200 hover:scale-105"
              onClick={() => navigate("/login")}
            >
              <Zap size={20} /> Get Started
            </button>

            <button className="px-6 sm:px-8 py-2 sm:py-3 border border-blue-500 text-white rounded-lg font-semibold transition-colors duration-200 hover:bg-blue-600/20">
              Learn More
            </button>
          </div>

          <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
            {[
              { value: "50K+", label: "Students" },
              { value: "5K+", label: "Teachers" },
              { value: "1K+", label: "Institutes" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-1 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* System Overview */}
      <section className="px-4 sm:px-6 md:px-6 py-20">
        <div className="max-w-[1280px] mx-auto">

          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3">System Overview</h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-base">
              Real-time statistics showcasing comprehensive management capabilities
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, value: "16", label: "Student Modules", desc: "Complete management", color: "blue" },
              { icon: BookOpen, value: "12", label: "Teaching Tools", desc: "Advanced features", color: "yellow" },
              { icon: BarChart, value: "8", label: "Assessment Types", desc: "Diverse evaluation", color: "blue" },
              { icon: Award, value: "10", label: "Analytics Views", desc: "AI-powered insights", color: "yellow" }
            ].map((item, idx) => {
              const textColor = item.color === "blue" ? "text-blue-500" : "text-yellow-400";
              const iconBg = item.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-yellow-100 text-yellow-500";
              return (
                <div key={idx} className="bg-gray-800 rounded-xl p-6 sm:p-8 text-center cursor-pointer shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5 ${iconBg}`}>
                    <item.icon size={28} />
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${textColor}`}>{item.value}</div>
                  <div className="text-lg font-semibold mb-2">{item.label}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 md:px-6 py-20">
        <div className="max-w-[1280px] mx-auto">

          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3">Powerful Features</h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-base">
              Advanced AI and intelligent analytics for seamless educational management
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {[
              { icon: Target, title: "Student Management", desc: "Track performance, attendance, and rankings with ease", color: "blue" },
              { icon: BarChart, title: "Analytics Dashboard", desc: "Real-time insights and AI-powered predictions", color: "yellow" },
              { icon: Bell, title: "Smart Notifications", desc: "Instant updates for students, teachers, and parents", color: "blue" },
              { icon: Award, title: "Performance Tracking", desc: "Monitor student progress and identify improvement areas", color: "yellow" },
              { icon: TrendingUp, title: "AI Insights", desc: "Predictive analytics for better academic outcomes", color: "blue" },
              { icon: BookOpen, title: "Assignment Management", desc: "Streamline homework and project submissions", color: "yellow" }
            ].map((feature, idx) => {
              const iconBg = feature.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-yellow-100 text-yellow-500";
              return (
                <div key={idx} className="bg-gray-800 rounded-xl p-6 sm:p-8 text-center cursor-pointer shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5 ${iconBg}`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 md:px-6 py-24">
        <div className="max-w-[1100px] mx-auto bg-gray-800 rounded-2xl p-12 sm:p-16 text-center shadow-md">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-5">
            Ready to Transform Your <span className="text-yellow-400">Coaching</span>?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-base mb-10">
            Join the revolution in educational management with AI-powered analytics
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-500 text-black rounded-lg font-semibold transition-transform duration-200 hover:scale-105">
              Start Demo Now
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 border border-blue-500 text-white rounded-lg font-semibold transition-colors duration-200 hover:bg-blue-600/20">
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 md:px-6 text-center text-gray-400 border-t border-gray-700">
        © 2025 CoachPro · All Rights Reserved · Powered by AI
      </footer>

    </div>
  );
};

export default Landing;
