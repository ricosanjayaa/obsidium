export default function Page() {
  return (
    <div>
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 transition-all duration-500">
        <p className="text-4xl md:text-6xl lg:text-7xl font-semibold transition-all duration-500">
          HEY, I'M RICO SANJAYA.
        </p>
        <p className="text-base sm:text-lg md:w-2/3 md:text-xl lg:w-3/4 lg:text-3xl transition-all duration-500">
          By implementing visionary art direction and cutting-edge web development, I facilitate global business expansion for companies.
        </p>
      </div>
      <button className="mt-4 lg:mt-8 py-2 px-4 md:py-3 md:px-6 md:text-lg lg:px-8 lg:text-xl text-[#E9E9E9] bg-[#222222] md:font-medium rounded-lg shadow-[4px_4px_rgba(32,32,32,0.5)] hover:shadow-[6px_6px_rgba(32,32,32,0.5)] hover:-translate-y-1 transition-all duration-500">
        Let's connect
      </button>
    </div>
  )
}
