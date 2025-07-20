

import { useState, useEffect, useRef } from 'react';
import { 
  PaperAirplaneIcon, 
  XMarkIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  UserIcon,
  HeartIcon,
  DeviceTabletIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';

export default function MedicalWebsite() {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MedicalLogo className="h-10 w-10" />
              </div>
              <span className="ml-3 text-2xl font-bold text-blue-800">HealthCare+</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-800 font-medium hover:text-blue-600 transition duration-300">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition duration-300">Doctors</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white pb-4 px-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-blue-800 font-medium hover:text-blue-600 px-3 py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 px-3 py-2">Doctors</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Medical Care When You Need It</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Compassionate healthcare with cutting-edge technology and personalized treatment plans.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105">
                Book Appointment
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition duration-300 transform hover:scale-105">
                Our Services
              </button>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform -translate-y-10 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <ClockIcon className="h-8 w-8" />, 
                title: "Opening Hours", 
                text: "Mon-Fri: 8:00 AM - 8:00 PM\nSat-Sun: 9:00 AM - 4:00 PM",
                bgColor: "bg-white"
              },
              { 
                icon: <PhoneIcon className="h-8 w-8" />, 
                title: "Emergency", 
                text: "Emergency Line: (555) 123-4567\nAfter Hours: (555) 987-6543",
                bgColor: "bg-blue-600 text-white"
              },
              { 
                icon: <MapPinIcon className="h-8 w-8" />, 
                title: "Location", 
                text: "123 Medical Drive\nHealthcare City, HC 12345",
                bgColor: "bg-white"
              }
            ].map((item, index) => (
              <div key={index} className={`${item.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105`}>
                <div className={`${item.bgColor.includes('white') ? 'text-blue-600' : 'text-white'} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className={`${item.bgColor.includes('white') ? 'text-gray-600' : 'text-gray-200'} whitespace-pre-line`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive healthcare services for all your medical needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {medicalServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialist Doctors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experienced professionals dedicated to your health</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {doctorsData.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About HealthCare+</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, HealthCare+ has been providing exceptional medical care to our community. 
                  Our state-of-the-art facility is equipped with the latest medical technology.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe in a patient-centered approach, where your health and comfort are our top priorities. 
                  Our team of board-certified physicians and healthcare professionals are committed to delivering 
                  personalized care tailored to your unique needs.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center">
                  Learn More <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
              </div>
              <div className="bg-gray-200 rounded-xl h-96 overflow-hidden">
                {/* Placeholder for clinic image */}
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white">
                  <span className="text-xl font-medium">Our Medical Facility</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">What our patients say about us</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get in touch with our medical team</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Address</h4>
                      <p className="text-gray-600">123 Medical Drive, Healthcare City, HC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">Main: (555) 123-4567</p>
                      <p className="text-gray-600">Emergency: (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Location Map</h4>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-600">Medical Center Location Map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MedicalLogo className="h-8 w-8 mr-2" /> HealthCare+
              </h3>
              <p className="text-gray-400 mb-4">Compassionate care with cutting-edge technology for all your healthcare needs.</p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                      {social.charAt(0)}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Services', 'Doctors', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {medicalServices.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for health tips and updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} HealthCare+. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
}

// Chatbot Component
const Chatbot = () => {
  const [messages, setMessages] = useState([{
    id: 1,
    text: "Hello! 👋 I'm your HealthCare+ assistant. How can I help you today?",
    sender: 'bot',
    options: ['Book appointment', 'Clinic hours', 'Emergency contact', 'Find a doctor'],
  }]);
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    department: null,
    doctor: null,
    time: null
  });
  const messagesEndRef = useRef(null);

  // Doctor data for chatbot
  const chatbotDoctors = {
    'General Medicine': [
      { id: 1, name: 'Dr. Sarah Smith', experience: '10 years', slots: ['10:00 AM', '2:00 PM'] },
      { id: 2, name: 'Dr. Michael Johnson', experience: '8 years', slots: ['9:00 AM', '3:30 PM'] }
    ],
    'Cardiology': [
      { id: 3, name: 'Dr. Emily Williams', experience: '15 years', slots: ['11:00 AM'] }
    ],
    'Pediatrics': [
      { id: 4, name: 'Dr. Lisa Chen', experience: '7 years', slots: ['8:30 AM', '1:00 PM'] }
    ]
  };

  const clinicInfo = {
    hours: "Monday-Friday: 8:00 AM - 8:00 PM\nSaturday-Sunday: 9:00 AM - 4:00 PM",
    emergency: "Emergency Line: (555) 123-4567\nAfter Hours: (555) 987-6543\nFor life-threatening emergencies, call 911"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      handleBotResponse(input);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (option) => {
    const userMessage = {
      id: messages.length + 1,
      text: option,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      handleBotResponse(option);
      setIsTyping(false);
    }, 1000);
  };

  const handleBotResponse = (userInput) => {
    let botResponse = {};
    const lowerInput = userInput.toLowerCase().trim();

    // Greetings
    if (['hi', 'hello', 'hey'].includes(lowerInput)) {
      botResponse = {
        text: "Hi there! 😊 I'm your HealthCare+ assistant. How can I help you today?",
        options: ['Book appointment', 'Clinic hours', 'Emergency contact', 'Find a doctor']
      };
    }
    // Book appointment flow
    else if (lowerInput.includes('book') || lowerInput.includes('appointment')) {
      botResponse = {
        text: "Which department would you like to book an appointment in?",
        options: Object.keys(chatbotDoctors)
      };
    }
    // Department selection
    else if (Object.keys(chatbotDoctors).some(dept => lowerInput.includes(dept.toLowerCase()))) {
      const department = Object.keys(chatbotDoctors).find(dept => 
        lowerInput.includes(dept.toLowerCase())
      );
      
      setAppointmentData(prev => ({...prev, department}));
      
      const doctorOptions = chatbotDoctors[department].map(doc => 
        `${doc.name} (${doc.experience})`
      );
      
      botResponse = {
        text: `For ${department}, we have these specialists available:`,
        options: [...doctorOptions, 'Back to departments']
      };
    }
    // Doctor selection
    else if (Object.values(chatbotDoctors).flat().some(doc => 
      lowerInput.includes(doc.name.toLowerCase())
    )) {
      const department = appointmentData.department;
      const doctor = chatbotDoctors[department].find(doc => 
        lowerInput.includes(doc.name.toLowerCase())
      );
      
      if (doctor.slots.length === 0) {
        botResponse = {
          text: `Dr. ${doctor.name} is currently fully booked. Would you like to:\n1. See other doctors in ${department}\n2. Try a different department\n3. Get notified when slots open`,
          options: ['Other doctors', 'Different department', 'Notify me']
        };
      } else {
        setAppointmentData(prev => ({...prev, doctor}));
        
        botResponse = {
          text: `Dr. ${doctor.name} has these available slots:`,
          options: [...doctor.slots, 'Other doctors']
        };
      }
    }
    // Time slot selection
    else if (appointmentData.doctor?.slots.some(slot => 
      lowerInput.includes(slot.toLowerCase())
    )) {
      const time = appointmentData.doctor.slots.find(slot => 
        lowerInput.includes(slot.toLowerCase())
      );
      
      setAppointmentData(prev => ({...prev, time}));
      
      botResponse = {
        text: `✅ Appointment Confirmed!\n\n📅 Department: ${appointmentData.department}\n👨‍⚕️ Doctor: Dr. ${appointmentData.doctor.name}\n⏰ Time: ${time}\n\nWe'll send a confirmation to your email. Would you like to:`,
        options: ['Book another', 'Main menu']
      };
    }
    // Clinic hours
    else if (lowerInput.includes('hours') || lowerInput.includes('time') || lowerInput.includes('schedule')) {
      botResponse = {
        text: `🏥 Clinic Hours:\n\n${clinicInfo.hours}`,
        options: ['Book appointment', 'Emergency contact', 'Main menu']
      };
    }
    // Emergency contact
    else if (lowerInput.includes('emergency') || lowerInput.includes('urgent')) {
      botResponse = {
        text: `🚨 Emergency Contacts:\n\n${clinicInfo.emergency}`,
        options: ['Clinic hours', 'Main menu']
      };
    }
    // Find a doctor
    else if (lowerInput.includes('doctor') || lowerInput.includes('find')) {
      botResponse = {
        text: "Which type of specialist are you looking for?",
        options: Object.keys(chatbotDoctors)
      };
    }
    // Navigation options
    else if (lowerInput.includes('menu') || lowerInput.includes('main')) {
      botResponse = {
        text: "Returning to main menu. How can I help you?",
        options: ['Book appointment', 'Clinic hours', 'Emergency contact', 'Find a doctor']
      };
    }
    // Default response
    else {
      botResponse = {
        text: "I didn't quite understand that. Please choose one of these options:",
        options: ['Book appointment', 'Clinic hours', 'Emergency contact', 'Find a doctor']
      };
    }

    setMessages(prev => [...prev, {
      id: prev.length + 2,
      sender: 'bot',
      ...botResponse
    }]);
  };

  return (
    <>
      {/* Chatbot Launcher */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center 
          bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl hover:shadow-2xl 
          transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Open medical assistant"
        >
          <MedicalLogo className="h-8 w-8 text-white" />
        </button>
      )}

      {/* Chatbot Window */}
      {showChatbot && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 z-50">
          {/* Chatbot header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <MedicalLogo className="h-6 w-6 mr-2" />
              <h2 className="text-lg font-semibold">HealthCare+ Assistant</h2>
            </div>
            <button 
              onClick={() => setShowChatbot(false)} 
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  {message.options && (
                    <div className="mt-2 space-y-2">
                      {message.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickReply(option)}
                          className="block w-full text-left px-3 py-1 text-sm rounded border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Type your message"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Send message"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

// Medical Logo Component
const MedicalLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="url(#gradient)" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 14H16V16H8V14Z" fill="currentColor"/>
    <path d="M10 10H14V14H10V10Z" fill="currentColor"/>
    <circle cx="9" cy="8" r="1" fill="currentColor"/>
    <circle cx="15" cy="8" r="1" fill="currentColor"/>
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563eb"/>
        <stop offset="100%" stopColor="#1e40af"/>
      </linearGradient>
    </defs>
  </svg>
);

// Service Card Component
const ServiceCard = ({ service }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 transform hover:-translate-y-1">
    <div className="text-blue-600 mb-4">
      <service.icon className="h-10 w-10" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
    <p className="text-gray-600 mb-4">{service.description}</p>
    <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
      Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
    </a>
  </div>
);

// Doctor Card Component
const DoctorCard = ({ doctor }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center transform hover:-translate-y-1">
    <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 overflow-hidden">
      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-bold">{doctor.name}</h3>
    <p className="text-blue-600 mb-2">{doctor.specialty}</p>
    <p className="text-gray-600 text-sm mb-4">{doctor.experience} experience</p>
    <div className="flex space-x-2">
      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-300 flex-grow">
        View Profile
      </button>
      <button className="bg-white border border-blue-600 text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-50 transition duration-300">
        Book
      </button>
    </div>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="bg-gray-200 rounded-full w-12 h-12 overflow-hidden mr-4">
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold">{testimonial.name}</h4>
        <p className="text-gray-600 text-sm">{testimonial.relation}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
    <div className="flex mt-4 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  </div>
);

// Star Icon Component (for ratings)
const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Data
const medicalServices = [
  {
    title: "General Medicine",
    description: "Comprehensive care for adults including preventive services and chronic disease management.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Cardiology",
    description: "Specialized care for heart conditions and cardiovascular health management.",
    icon: () => (
      <HeartIcon className="h-10 w-10" />
    )
  },
  {
    title: "Pediatrics",
    description: "Compassionate healthcare for infants, children, and adolescents.",
    icon: () => (
      <UserIcon className="h-10 w-10" />
    )
  },
  {
    title: "Telemedicine",
    description: "Virtual consultations with our healthcare providers from the comfort of your home.",
    icon: () => (
      <DeviceTabletIcon className="h-10 w-10" />
    )
  },
  {
    title: "Preventive Care",
    description: "Health screenings and wellness exams to prevent illness before it starts.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Health Checkups",
    description: "Comprehensive physical exams and health assessments tailored to your needs.",
    icon: () => (
      <CalendarIcon className="h-10 w-10" />
    )
  }
];

const doctorsData = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "9 years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "7 years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const testimonials = [
  {
    name: "Robert Johnson",
    relation: "Patient",
    quote: "The care I received at HealthCare+ was exceptional. The doctors took time to listen to my concerns and explained everything clearly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Williams",
    relation: "Patient",
    quote: "The telemedicine service saved me hours of travel time. The doctor was just as thorough as an in-person visit.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Kim",
    relation: "Patient's Family",
    quote: "My father's cardiologist at HealthCare+ literally saved his life. We're forever grateful for their expertise and compassion.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];