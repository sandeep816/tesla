import React from 'react';

export default function Section(props) {
    return (
        <section className="w-full h-screen bg-slate-700 text-center flex flex-col justify-between bg-no-repeat bg-cover bg-center" 
        style={{ 
            backgroundImage: `url("images/model-3.jpg")` 
          }}
        >
            <div className="mt-20">
                <h1 className='text-5xl'>{props.title}</h1>
				<p>{props.tagline}</p>
            </div>

            <div>
                <div className="fl">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{props.leftBtn}</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{props.rightBtn}</button>
                </div>

                <img src="images/down-arrow.svg" alt="" />
            </div>
        </section>
    );
}