import CustomersTable from "@/app/ui/customers/table";
import FormattedCustomersTable from "@/app/lib/definitions";
import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {
  const customers: FormattedCustomersTable[] = await fetchCustomers();
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
}
