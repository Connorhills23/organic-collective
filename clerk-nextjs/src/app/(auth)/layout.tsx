export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* LEFT IMAGE */}
      <div className="w-1/2 hidden md:block relative">
        <img
          src="/garden.jpg"
          className="object-cover w-full h-full rounded-r-3xl"
        />

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold">Communication House </h1>
          <p className="mt-4 text-lg">
            Rooted in community. Harvested by neighbors.
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-1 items-center justify-center">{children}</div>
    </div>
  );
}
