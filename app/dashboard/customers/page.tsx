import CustomersTable from "@/app/ui/customers/table";
import { fetchCustomers } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";

export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <div className="w-full">
      <Suspense>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
