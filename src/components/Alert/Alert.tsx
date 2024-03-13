import { useEffect, useState } from "react";

function Alert() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) {
    return null;
  }

  return <div id="join-alert">Thank you for checking out my website!</div>;
}

export default Alert;
