"use client"; // Add this line at the top

import { useRef, useEffect, useState } from "react";

export default function ClientComponent() {
  const homeRef = useRef(null);
  const infoRef = useRef(null);
  const buyRef = useRef(null);
  const loginRef = useRef(null);
  const [popupContainer, setPopupContainer] = useState(null);

  function handleScrollToHome() {
    homeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handleScrollToInfo() {
    infoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handleScrollToBuy() {
    buyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handlePopUpToLogin() {
    const popupDiv = addPopupToMapWidget(map);
    setPopupContainer(popupDiv);
  }

  return <div></div>;
}
