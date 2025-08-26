import React from "react";

export default function Head() {
  return (
    <>
      <meta name="application-name" content="603-design-phantom" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Phantom" />
      <meta name="description" content="Interactive 3D model viewer built with Next.js and React Three Fiber." />
      <meta name="theme-color" content="#0ea5a4" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/icons/icon-192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/icons/maskable-icon-512.png" color="#0ea5a4" />
    </>
  );
}