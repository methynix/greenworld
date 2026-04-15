import { cn } from "../utils/cn";

const ServiceCard = ({ title, description, icon: Icon, colorClass }) => (
  <div className="group p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-emerald-50/50 flex flex-col items-start text-left">
    <div className={cn("p-4 rounded-2xl mb-6 transition-colors", colorClass)}>
      <Icon className="text-3xl" />
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
      {title}
    </h3>
    <p className="text-slate-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export default ServiceCard;