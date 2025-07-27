"use client";

import Button from "@/components/Button/Button";
import UserCard from "@/components/UserCard/UserCard";

export default function HomePage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome</h1>

      <Button
        label="Click me"
        onClick={() => alert("Hi")}
        variant="secondary"
      />

      <UserCard
        id="user-002"
        name="Alex Johnson"
        email="alex@email.com"
        avatarUrl="https://i.pravatar.cc/150?img=12"
      />
    </main>
  );
}
