import React, { useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Button from '../ui/Button';

const VideoPresentation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="video-presentation"
      ref={sectionRef}
      className="py-20 bg-[rgb(2,6,15)] opacity-0 transition-opacity duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Watch My Story
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn about my journey, projects, and expertise through this personal presentation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
            {/* Video placeholder - replace src with your actual video */}
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              muted
            >
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between bg-gradient-to-t from-gray-900 to-transparent">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePlay}
                  className="hover:bg-white/10"
                  icon={isPlaying ? <Pause size={20} /> : <Play size={20} />}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  className="hover:bg-white/10"
                  icon={isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                >
                  {isMuted ? 'Unmute' : 'Mute'}
                </Button>
              </div>
            </div>
          </div>

          {/* Video description */}
          <div className="mt-8 bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              About This Presentation
            </h3>
            <p className="text-gray-400 mb-4">
              In this video, I walk you through my professional journey, showcase my key projects, 
              and demonstrate my technical expertise. Learn about my problem-solving approach and 
              how I can contribute to your next project.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                Project Demos
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                Technical Skills
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                Work Process
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                Problem Solving
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;