import { notificationsItems } from "../../../mock";

import NotificationItemIcon from "@assets/svgs/icons/NotificationItemIcon";
import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";

const Notifications = () => {
  return (
    <AdminDashboardLayout>
      <div className="w-full p-4  flex flex-col">
        <span className="text-3xl font-bold mb-1">Notifications</span>
        <div className="w-full flex flex-col justify-center">
          {notificationsItems.map((notificationItem, index) => {
            return (
              <div
                key={index}
                className={`flex bg-white p-4 rounded-2xl mt-4 ${
                  index === 0 || index === 1 ? "border-2 border-[#BB8F32]" : ""
                }`}
              >
                <NotificationItemIcon />
                <div className="flex flex-col ml-4">
                  <span
                    className={`${
                      index === 0 || index === 1
                        ? "text-[#BB8F32] font-bold"
                        : ""
                    }`}
                  >
                    {notificationItem.title}
                  </span>
                  <span className="font-extralight">
                    {notificationItem.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default Notifications;
