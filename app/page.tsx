'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">StartupHub</h1>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-gray-700">{user.email}</span>
                  <Link
                    href="/admin/dashboard"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Welcome to StartupHub</h2>
          <p className="text-xl text-gray-600 mb-8">
            A collaborative platform for startup founders to discuss ideas, share solutions, and network with like-minded entrepreneurs.
          </p>
          {!user && (
            <div className="flex justify-center space-x-4">
              <Link
                href="/auth/signup"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Get Started
              </Link>
              <Link
                href="/auth/login"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Share Ideas</h4>
            <p className="text-gray-600">Post your startup ideas and get instant feedback from experienced entrepreneurs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Discuss Solutions</h4>
            <p className="text-gray-600">Engage in meaningful discussions about startup challenges and solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Network</h4>
            <p className="text-gray-600">Connect with co-founders, investors, and mentors in the startup ecosystem.</p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-blue-600 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Forum & Ideas Coming Soon</h3>
          <p className="text-lg mb-4">Start exploring startup ideas, create discussions, and build your network.</p>
          {user && (
            <p className="text-sm text-blue-100">
              Logged in as: <strong>{user.email}</strong>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
