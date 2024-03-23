import { useEffect, useRef } from "react";

export default function Modal({ open, children }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

 

  return <dialog ref={dialog} className="m-0 h-auto bg-transparent" >
    
    {children}</dialog>;
}
