import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TitleTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const TitleText = React.forwardRef<HTMLHeadingElement, TitleTextProps & { containerClassName?: string; lineClassName?: string }>(({ className, containerClassName, lineClassName, children, ...props }, ref) => {
  return (
    <motion.div className={cn("inline-block relative", containerClassName)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <h2 ref={ref} className={cn("text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide", className)} {...props}>
        {children}
      </h2>
      <motion.div className={cn("h-1 bg-[#08C9EC] mt-4", lineClassName)} initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
    </motion.div>
  );
});

TitleText.displayName = "TitleText";
