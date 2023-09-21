"use client";

import { useEffect } from "react";

const ErrorUI = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  });
  return (
    <div>
      <h2>Oops... something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorUI;
