import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, FileText, BarChart2, PieChart } from "lucide-react";

interface Report {
  id: string;
  title: string;
  type: "academic" | "financial" | "attendance" | "other";
  date: string;
  format: "pdf" | "excel" | "csv";
  status: "generated" | "pending" | "failed";
}

const Reports = () => <div>Reports Page</div>;
export default Reports;
