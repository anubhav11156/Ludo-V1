import { DataTable } from "@/components/ui/data-table";
import { columns, Column } from "./columns";

interface ClientProps {
  data: Column[];
}

export const UnstakeTable: React.FC<ClientProps> = ({ data }) => {
  return <DataTable searchKey="id" columns={columns} data={data} />;
};
