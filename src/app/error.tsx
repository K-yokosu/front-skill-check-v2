"use client";

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <h2>{error.message ?? "Something went wrong!"}</h2>
    </div>
  );
}
