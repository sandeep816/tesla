import React from 'react';

export default function Section(props) {
    return (
        <section className="w-full h-screen bg-slate-700 text-center flex flex-col pt-36 justify-between bg-no-repeat bg-cover bg-center" 
        style={{ 
            backgroundImage: `url(${props.modelImage})` 
          }}
        >
            <div className="w-full">
                <h1 className='text-5xl font-semibold mb-5'>{props.title}</h1>
				<p>{props.tagline}</p>
                {props.bg}
            </div>
            <div className='w-full h-44'>
                <div className="flex justify-center w-full">
                    <button className='w-60 rounded-3xl bg-stone-800 text-white p-2 mx-3'>{props.leftBtn}</button>
                    {props.rightBtn &&
					<button className='w-60 rounded-3xl bg-slate-200 text-black p-2 mx-3'>{props.rightBtn}</button>}
                </div>

                {props.arrow &&
                <div className='flex'>
                    <img src="images/down-arrow.svg" alt="" className='w-20 h-20 m-auto' />
                </div>
                }
            </div>
        </section>
    );
}