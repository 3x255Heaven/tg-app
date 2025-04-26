export const UserAvatar = ({ name }: { name: string }) => {
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
    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border">
      {initials}
    </div>
  );
};
