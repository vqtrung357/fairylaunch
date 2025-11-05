import { useState } from "react";
import { Button } from "./ui/button";

const TABS = ["Trending", "Newest", "Top Volume", "Holder Growth"];

export const SortTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="bg-card/50 backdrop-blur-lg border border-white/10 rounded-full p-1 flex items-center gap-1">
      {TABS.map((tab) => (
        <Button
          key={tab}
          variant={activeTab === tab ? "primary" : "ghost"}
          className="rounded-full"
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};