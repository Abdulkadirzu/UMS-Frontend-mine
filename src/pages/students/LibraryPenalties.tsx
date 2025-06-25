import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const LibraryPenalties = () => {
  // Mock data for penalties
  const penalties = [
    {
      id: "P001",
      bookTitle: "Introduction to Algorithms",
      amount: 1500,
      reason: "Late return",
      status: "unpaid",
      dueDate: "2024-03-20",
    },
    {
      id: "P002",
      bookTitle: "Database Systems",
      amount: 500,
      reason: "Book damage",
      status: "paid",
      paidDate: "2024-03-15",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Library Penalties</h1>
        <p className="text-gray-500 mt-1">
          View and manage your library penalties
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Penalties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {penalties.map((penalty) => (
              <Card key={penalty.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{penalty.bookTitle}</h3>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-500">
                          Reason: {penalty.reason}
                        </p>
                        <p className="text-sm font-medium">
                          Amount: KES {penalty.amount}
                        </p>
                        {penalty.status === "unpaid" ? (
                          <div className="flex items-center text-red-600">
                            <AlertCircle className="h-4 w-4 mr-2" />
                            <span>Due: {penalty.dueDate}</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-green-600">
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            <span>Paid on {penalty.paidDate}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {penalty.status === "unpaid" && <Button>Pay Now</Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryPenalties;
