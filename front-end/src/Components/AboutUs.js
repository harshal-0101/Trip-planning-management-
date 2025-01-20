import React from 'react'
import './components.css'
import Nav from './Nav'

export default function AboutUs() {
  return (
    <div>
<Nav/>

    <section id="home" class="hero">
    <div class="hero-content">
      <h2>Plan Your Dream Vacation</h2>
      <p>Find the best destinations, plan your itinerary, and manage your travel budget all in one place!</p>
      <a href="#features" class="cta-button">Get Started</a>
    </div>
  </section>

  <section id="features" class="features">
    <h2>Features</h2>
    <div class="feature-cards">
      <div class="card">
        <h3>Custom Itinerary Builder</h3>
        <p>Create personalized itineraries and manage your trip efficiently.</p>
      </div>
      <div class="card">
        <h3>Accommodation Finder</h3>
        <p>Find the best places to stay that match your budget and preferences.</p>
      </div>
      <div class="card">
        <h3>Budget Tracker</h3>
        <p>Track your trip expenses and stay on top of your budget.</p>
      </div>
      <div class="card">
        <h3>Activity Suggestions</h3>
        <p>Get personalized activity recommendations based on your interests.</p>
      </div>
    </div>
  </section>

  <section id="pricing" class="pricing">
    <h2>Pricing</h2>
    <p>Choose a plan that fits your needs:</p>
    <div class="pricing-cards">
      <div class="card">
        <h3>Free Plan</h3>
        <p>Basic trip planning tools and features.</p>
        <button>Sign Up</button>
      </div>
      <div class="card">
        <h3>Premium Plan</h3>
        <p>Access all features with additional tools and unlimited trips.</p>
        <button>Upgrade</button>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <p>Have any questions? Feel free to reach out to us!</p>
    <form action="mailto:info@tripmaster.com" method="POST">
      <input type="email" name="email" placeholder="Your Email" required/>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

    </div>
  )
}
