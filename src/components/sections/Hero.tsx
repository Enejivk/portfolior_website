import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowDown, FileText, Mail, Code, Terminal, Database, Sparkles, Hexagon } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fadeIn');
    }

    // Canvas background animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    const PARTICLE_COUNT = 50;
    const PARTICLE_RADIUS = 2;
    const PARTICLE_MAX_SPEED = 0.5;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * PARTICLE_RADIUS,
        vx: (Math.random() - 0.5) * PARTICLE_MAX_SPEED,
        vy: (Math.random() - 0.5) * PARTICLE_MAX_SPEED,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.alpha})`;
        ctx.fill();
      });

      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Add parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageContainerRef.current) return;

      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      imageContainerRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden pt-16"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-950"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Available for Work
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Full-stack developer
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  with startup experience
                </span>
              </h1>

              {/* <p className="text-xl text-gray-400 max-w-lg">
                Full-stack developer specializing in building exceptional
                digital experiences that combine innovation with pixel-perfect
                execution.
              </p> */}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Mail />}
                  onClick={() => (window.location.href = '#contact')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<FileText />}
                  className="border-gray-700 hover:border-blue-500"
                >
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <span className="mr-2 group-hover:underline">View My Work</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </button>
            </div>
          </div>

          <div className="relative h-[600px]" ref={imageContainerRef}>
            {/* Main hexagonal image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full transform hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-2 overflow-hidden rounded-full">
                  <img
                    src="/bg-removed.png"
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating skill icons */}
            <div className="absolute top-20 left-20 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute bottom-32 right-20 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Terminal className="w-8 h-8 text-purple-400" />
            </div>
            <div className="absolute top-40 right-24 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Database className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute bottom-40 left-16 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
              <Hexagon className="w-8 h-8 text-yellow-400" />
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-blue-500/10 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-2 border-purple-500/10 rounded-full animate-spin-slow-reverse"></div>
              </div>
            </div>

            {/* Background shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;