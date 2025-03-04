"use client";
import React from "react";

function Title({ titleRight, title, subtitle }) {
  return (
    <div className="mt-24" >
      <div className="mb-8">
        <h6 className="text-lg font-semibold uppercase tracking-wide inline-block px-7 py-2 text-lg uppercase tracking-wide rounded-full border border-white/50">
          {title}
        </h6>
        <h2 className="text-4xl font-bold uppercase text-white tracking-wide leading-[3rem] mt-4">
          {subtitle}
        </h2>
      </div>
    </div>
  );
}

function Text({ titleRight, text, callToAction }) {
  return (
    <div className={`mt-24 flex flex-col`}>
      <p className="text-xl leading-relaxed ">
        {text}
      </p>
      <div className="mt-12">
        {callToAction && (
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg transition duration-300 hover:bg-blue-700">
            {callToAction}
          </button>
        )}
      </div>
    </div>
  );
}

function TextPart({ titleRight = true, data }) {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {titleRight ? (
            <>
              <Title titleRight={titleRight} title={data.title} subtitle={data.subtitle} />
              <Text titleRight={titleRight} text={data.text} callToAction={data.callToAction} />
            </>
          ) : (
            <>
              <Text titleRight={titleRight} text={data.text} callToAction={data.callToAction} />
              <Title titleRight={titleRight} title={data.title} subtitle={data.subtitle} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default TextPart;
