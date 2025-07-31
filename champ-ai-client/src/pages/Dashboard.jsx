import { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkle } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItem from "../component/CreationItem";

const Dashboard = () => {
  const [creation, setCreation] = useState([]);

  const getCreationData = async () => {
    setCreation(dummyCreationData);
  };

  useEffect(() => {
    getCreationData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creation Card */}
        <div
          className="flex justify-between items-center w-72 p-4 px-6
        bg-white rounded-xl border border-gray-200"
        >
          <div className="text-slate-600">
            <p className="text-sm">Total Creation</p>
            <h2 className="text-xl font-semibold">{creation.length}</h2>
          </div>
          <div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from -[#3588F2] to-[#0BB0D7]
           text-white flex justify-center items-center"
          >
            <Sparkle className="w-5 text-white" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div
          className="flex justify-between items-center w-72 p-4 px-6
        bg-white rounded-xl border border-gray-200"
        >
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-xl font-semibold">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </h2>
          </div>
          <div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from -[#FF61C5] to-[#9E53EE]
           text-white flex justify-center items-center"
          >
            <Gem className="w-5 text-white" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creation</p>
        {creation.map((item, index) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
