"use client";
import { supabaseClient } from '@/util/supabase';
import React from 'react'

export const BookCallBtn: React.FC = () => {
  //isLoading state
  const [isLoading, setIsLoading] = React.useState(false);
  //handleClick function
  const handleClick = async () => {
    setIsLoading(true);
    const { data, error } = await supabaseClient.functions.invoke('create-stripe-checkout');
    if (error) {
      console.error(error)
    }
    setIsLoading(false);
    const { url }: { url: string } = JSON.parse(data);
    // Redirect to Stripe Checkout
    window.location.href = url;
  }
  return (
    <a onClick={handleClick} className="cursor-pointer px-4 py-2 text-sm duration-500 text-white bg-zinc-500 hover:bg-zinc-400 rounded-md">
      {isLoading ? <span>Loading...</span> : <span className=''>Book a call</span>}
    </a>

  )
}