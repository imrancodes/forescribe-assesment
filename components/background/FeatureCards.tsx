import Image from "next/image";
import Card from "../ui/Card";

export function PersonCard({
  name,
  subtitle,
  personSrc,
  blockBg,
}: {
  name: string;
  subtitle: string;
  personSrc: string;
  blockBg: string;
}) {
  return (
    <Card className="flex flex-col h-full bg-white">
      <div
        className={`relative w-full h-24 rounded-xl mb-3 flex items-center justify-center ${blockBg}`}
      >
        <Image
          src={personSrc}
          alt={name}
          width={64}
          height={64}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="py-14 text-center">
        <h3 className="font-semibold text-gray-900 text-lg mb-2">{name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">“{subtitle}”</p>
      </div>
    </Card>
  );
}

export function BrandCard({
  name,
  subtitle,
  bg,
  blockBg,
  logoSrc,
}: {
  name: string;
  subtitle: string;
  bg: string;
  blockBg: string;
  logoSrc: string;
}) {
  return (
    <Card className={`flex flex-col ${bg}`}>
      <div
        className={`relative rounded-xl p-6 mb-3 flex items-center justify-center ${blockBg}`}
      >
        <Image
          src={logoSrc}
          alt={name}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="py-14 text-center">
        <h3 className="font-semibold text-gray-900 text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </Card>
  );
}