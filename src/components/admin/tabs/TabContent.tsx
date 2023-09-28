import React, { ReactNode } from "react";

interface TabContentProps {
  id: string;
  activeTab: string;
  children: ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
};

export default TabContent;
