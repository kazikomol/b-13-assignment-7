import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                
                <p className="text-9xl font-black text-emerald-500 animate-bounce tracking-widest selection:bg-emerald-500 selection:text-white">
                    404
                </p>
                
                
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Lost in Space?
                </h1>
                
                
                <p className="mt-6 text-base leading-7 text-slate-600 max-w-md mx-auto">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or perhaps it never existed in this universe.
                </p>

               
                <div className="my-10 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
                </div>

                
                <div className="flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 hover:shadow-emerald-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;