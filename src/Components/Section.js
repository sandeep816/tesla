import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Section(props) {
    return (
        <section className="w-full h-screen bg-slate-700 text-center flex flex-col pt-36 justify-between bg-no-repeat bg-cover bg-center" 
        style={{ 
            backgroundImage: `url(${props.modelImage})` 
          }}
        >
            <div className="w-full">
                <Fade bottom>
                    <h1 className='text-5xl font-semibold mb-5'>{props.title}</h1>
                </Fade>
                <Fade bottom>
				<p>{props.tagline}</p>
                </Fade>
            </div>
            <div className='w-full h-44'>
                <div className="flex justify-center w-full">
                <Fade left>
                    <button className='w-60 rounded-3xl bg-stone-800 text-white p-2 mx-3'>{props.leftBtn}</button>
                    </Fade>

                    <Fade right>
                    {props.rightBtn &&
					<button className='w-60 rounded-3xl bg-slate-200 text-black p-2 mx-3'>{props.rightBtn}</button>}
                    </Fade>
                </div>

                {props.arrow &&
                <div className='flex mt-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
                </div>
                }
            </div>
        </section>
    );
}