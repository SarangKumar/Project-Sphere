import { CircleCheckBig } from "lucide-react";
import React from "react";

const FeatureListItem = ({ feature }: { feature: string }) => {
  return (
    <li className="flex items-center gap-x-2 text-sm">
      <CircleCheckBig size={16} /> {feature}
    </li>
  );
};

export default FeatureListItem;
