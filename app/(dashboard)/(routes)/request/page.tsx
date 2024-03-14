"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const RequestPage = () => {
  const router = useRouter();
  const [paperName, setPaperName] = useState('');

  const handleRequest = async () => {
    try {
      // Send request email
      await sendRequestEmail(paperName);

      // Show success message
      toast.success('Request sent');

      // Redirect to '/past-papers'
      router.push('/past-papers');
    } catch (error) {
      console.error('Error sending request:', error);
      toast.error('Failed to send request. Please try again.');
    }
  };

  const sendRequestEmail = async (paperName: string) => {
    // Implement sending request email to 'makokhafranklin08@gmail.com'
    // This can be done using your preferred method, like sending an API request to a backend server that handles sending emails
    // For demonstration purposes, let's assume it's a simple console log
    console.log(`Requesting past paper: ${paperName}`);
  };

  return (
    <div>
      <h1>Request Past Paper</h1>
      <div>
        <label htmlFor="paperName">Name of Past Paper:</label>
        <Input
          type="text"
          id="paperName"
          value={paperName}
          onChange={(e) => setPaperName(e.target.value)}
        />
      </div>
      <Button onClick={handleRequest}>Request</Button>
    </div>
  );
};

export default RequestPage;
