/* eslint-disable react/prop-types */
import  { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



export const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-transparent text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PricingContent = () => {
  return (
    <div className="bg-black p-6 w-52 rounded-xl">
      <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009706/Frokerassets/froker-1-3-10_pb9yln.jpg'} className="h-40 w-full" alt="QR Code" />
    </div>
  );
};

