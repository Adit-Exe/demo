'use client'
import Image from 'next/image';
import React, { useState } from 'react';

function Card(props) {
  const [text, setText] = useState('fa fa-play');

  const handleClick = () => {
    setText(text === 'fa fa-play' ? 'fa fa-pause' : 'fa fa-play');
  };

  return (

    <div className="h-96 min-w-[240px] rounded-lg shadow-2xl border-8 border-white flex flex-col justify-evenly scale-50 bg-white sm:scale-75 ">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<a href={props.link}         className=" flex self-center shadow-xl mt-2 transition transform hover:-translate-y-5 duration-500 ease-out ">
          <Image className='rounded-lg'
        src={props.image}
        width={190}
        height={190}
        alt="Picture of the "
      />
</a>


      <h1 className="text-2xl font-semibold">{props.title}</h1>
      <p className="w-100 text-gray-500">{props.artist}</p>
      <div className="flex gap-2 flex-wrap">
        <p className="bg-gray-300 text-white rounded-full w-max px-2 flex items-center justify-center font-medium scale-95">
          Genre
        </p>
        <p className="bg-gray-300 text-white rounded-full w-max px-2 flex items-center justify-center font-medium scale-95">
          Sub Genre
        </p>
      </div>
      <div className="flex items-end justify-end">
        <button
          onClick={handleClick}
          className="border-2 border-black bg-black text-white rounded-full h-10 w-10 flex justify-center items-center relative left-7 transform active:-translate-y-5 duration-300 ease-out hover:scale-110"
        >
          <i class={text}></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
