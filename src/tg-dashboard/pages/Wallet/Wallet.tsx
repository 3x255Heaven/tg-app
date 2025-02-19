import { walletItems } from "../../../mock";

import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";

const Wallet = () => {
  return (
    <AdminDashboardLayout>
      <div className="w-full p-4  flex flex-col">
        <span className="text-3xl font-bold mb-1">Wallet</span>
        <div className="w-full flex flex-col justify-center pt-6">
          <div className="bg-[#BB8F32] rounded-[10px] h-20 text-white flex items-center">
            <span className="text-[40px] ml-10 font-bold">$ 4,567</span>
          </div>
          {walletItems.map((walletItem, index) => {
            return (
              <div
                key={index}
                className="flex justify-between bg-white border border-[#0000001F] rounded-[10px] p-4"
              >
                <div className="flex flex-col ml-4">
                  <span className="text-sm text-[#666666]">Name</span>
                  <span className="font-bold">{walletItem.name}</span>
                </div>
                <div className="flex flex-col ml-4">
                  <span className="text-sm text-[#666666]">Amount</span>
                  <span className="font-bold">{walletItem.amount}</span>
                </div>
                <div className="flex flex-col ml-4">
                  <span className="text-sm text-[#666666]">Date</span>
                  <span className="font-bold">{walletItem.date}</span>
                </div>
                <div className="flex flex-col ml-4">
                  <span className="text-sm text-[#666666]">Time</span>
                  <span className="font-bold">{walletItem.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default Wallet;
