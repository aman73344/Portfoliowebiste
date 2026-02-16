'use client'

import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a href="mailto:aman723344@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>aman723344@gmail.com</span>
              </a>
              <a href="tel:+923084824939" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span>(+92) 308-4824939</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="space-y-4">
              <a href="https://github.com/aman73344" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/aman-ali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <p><a href="#home" className="hover:text-primary transition-colors">Home</a></p>
              <p><a href="#projects" className="hover:text-primary transition-colors">Projects</a></p>
              <p><a href="#skills" className="hover:text-primary transition-colors">Skills</a></p>
              <p><a href="#experience" className="hover:text-primary transition-colors">Experience</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; 2024 Khawaja Aman Ali. All rights reserved.</p>
          <p className="text-secondary-foreground/70 mt-2">Data Analyst | Developer | Problem Solver</p>
        </div>
      </div>
    </footer>
  )
}
