'use client'
import React, { useState } from 'react';

const About = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      console.log('บันทึกสำเร็จ:', data);
    } catch (err) {
      console.error('ผิดพลาด:', err);
    }
  };

  return (
    <div>
      <h1>เกี่ยวกับเรา</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="กรอกชื่อ"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">ส่ง</button>
      </form>
    </div>
  );
};

export default About;
