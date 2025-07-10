import Image from "next/image";

export default function Logo() {
  return (
    <div className="mb-[54px]">
      <Image
        src="/logo-light.svg"
        width={152.53}
        height={25.22}
        alt="logo-icon"
      />
    </div>
  );
}
