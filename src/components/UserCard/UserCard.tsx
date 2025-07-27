"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export interface UserCardProps {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  email,
  avatarUrl,
}: UserCardProps) => {
  const router = useRouter();

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center space-x-4">
      <Image
        src={avatarUrl}
        alt={name}
        width={64}
        height={64}
        className="rounded-full"
      />
      <>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>
        <button
          className="mt-2 text-blue-500 hover:underline"
          onClick={() => router.push(`/profile/${id}`)}
        >
          View Profile
        </button>
      </>
    </div>
  );
};

export default UserCard;
