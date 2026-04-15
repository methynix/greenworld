import { cn } from "../utils/cn";

const Button = ({ children, variant = "primary", className, ...props }) => {
  const styles = {
    primary: "bg-gw-leaf hover:bg-gw-forest text-white shadow-lg shadow-gw-leaf/20",
    outline: "border-2 border-white text-white hover:bg-white hover:text-gw-forest",
    ghost: "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20",
    dark: "bg-gw-forest text-white hover:bg-gw-leaf"
  };

  return (
    <button className={cn("px-8 py-4 rounded-full font-bold transition-all active:scale-95 flex items-center gap-2", styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
export default Button;