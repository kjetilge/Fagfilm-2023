export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
      &copy; 2023{" "}<a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://paretofilm.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pareto Film AS
        </a>. Alle rettigheter reservert.{" "}

      </p>
    </div>
  );
}