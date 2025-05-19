'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import { siteConfig } from '@/src/configs/config';
import { Button, Input, Textarea } from '@heroui/react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Fungsi sanitize input sederhana
function sanitizeInput(input: string): string {
  // Hilangkan tag HTML
  let output = input.replace(/<[^>]*>?/gm, '');
  // Escape karakter untuk mencegah XSS
  output = output
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  return output;
}

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (siteConfig.contact.debug) {
      (async () => {
        try {
          const res = await fetch('https://ipapi.co/json/');
          const data = await res.json();
          setUserInfo({
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            region: data.region,
            timezone: data.timezone,
            isp: data.org,
            browser: navigator.userAgent,
            platform: navigator.platform,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            os: navigator.platform,
            domain: window.location.href,
          });
        } catch (err) {
          console.error('Error fetching user info:', err);
        }
      })();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value), // sanitize input on every change
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Sanitasi ulang sebelum submit (double safety)
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      message: sanitizeInput(formData.message),
    };

    try {
      const res = await fetch(`${window.location.origin}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...sanitizedData, userInfo }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Network error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold">Thank you! 🎉</h2>
        <p>Your message has been sent successfully to {siteConfig.social.email}.</p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
          }}
          className="mt-6 px-5 py-3 bg-teal-500 text-white rounded-lg"
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        id="contactme"
        title="Contact Me"
        content="Fill out the form below to contact me. I’ll get back to you as soon as I can!"
      />

      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-4">
        <Input
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          name="phone"
          type="tel"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {error && <p className="text-red-500">{error}</p>}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center rounded-xl px-5 py-3 text-white bg-black hover:bg-gray-800 transition ease mx-auto"
        >
          {isSubmitting ? 'Sending…' : 'Send'}
        </Button>
      </form>
    </AnimationContainer>
  );
};

export default ContactMe;
