export const UserAvatar = ({
  name,
  width = "w-12",
  height = "h-12",
}: {
  name: string;
  width?: string;
  height?: string;
}) => {
  const getInitials = (name: string) => {
    const nameArray = name.split(" ");
    const initials = nameArray
      .map((word) => word[0].toUpperCase())
      .join("")
      .slice(0, 2);
    return initials;
  };

  const initials = getInitials(name);

  return (
    <div
      className={`${width} ${height} rounded-full flex items-center justify-center font-bold text-lg border`}
    >
      {initials}
    </div>
  );
};
