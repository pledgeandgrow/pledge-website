"use client"
import React, { useRef, useEffect } from "react";
import Splitting from "splitting";

const Split = ({ tag, href, className, children }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (targetRef.current) {
        Splitting({ target: targetRef.current });
      }
    }
  }, [targetRef]);

  if (tag === 'span') return <span ref={targetRef}>{children}</span>;
  else if (tag === 'a') return <a href={href} className={className} ref={targetRef}>{children}</a>;
  return <div ref={targetRef}>{children}</div>;
};

export default Split;