import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 relative bg-black text-white">
        <img
          src="/shopping.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 p-10 flex flex-col justify-end">
          <h1 className="text-5xl font-bold">Communication House </h1>
          <p className="mt-4 text-lg text-gray-200">
            Rooted in community. Harvested by neighbors.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <SignIn
          fallbackRedirectUrl="/dashboard"
          signUpFallbackRedirectUrl="/dashboard"
          appearance={{
            elements: {
              card: "shadow-xl rounded-2xl",
              formButtonPrimary:
                "bg-green-600 hover:bg-green-700 text-white rounded-full",
            },
          }}
        />
      </div>
    </div>
  );
}
