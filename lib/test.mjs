import { getLicense } from "./licenceUtils";
import prisma from "@/lib/prisma";

async function main() {
  const skolekode = "salyj";
  const license = await getLicense(skolekode);
  console.log(license);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });