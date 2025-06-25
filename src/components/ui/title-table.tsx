import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TitleTableProps {
  title: string;
  description?: string;
  headers: string[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
  actions?: React.ReactNode;
}

const TitleTable: React.FC<TitleTableProps> = ({
  title,
  description,
  headers,
  data,
  renderRow,
  actions,
}) => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        {actions && <div className="flex space-x-4">{actions}</div>}
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>{data.map((item, index) => renderRow(item))}</TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default TitleTable;
