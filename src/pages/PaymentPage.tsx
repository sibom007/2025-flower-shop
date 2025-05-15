import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

import { CreditCard, Download, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import {
  formatDate,
  mockUser,
} from "@/modules/dashbord/profile/ProfileConstant";

function PaymentPage() {
  const [user] = useState(mockUser);
  return (
    <div>
      <Header title="Payment" />
      <Card className="transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[oklch(0.554_0.225_37.417)]">
            <CreditCard className="h-5 w-5" />
            Payment History
          </CardTitle>
          <CardDescription>Your recent transactions</CardDescription>
        </CardHeader>
        <CardContent>
          {user.userPayment && user.userPayment.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">ID</th>
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-right py-3 px-4 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.userPayment.map((payment, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4">{payment.id}</td>
                      <td className="py-3 px-4">{formatDate(payment.date)}</td>
                      <td className="py-3 px-4">
                        ${payment.amount.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          className={
                            payment.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : payment.status === "pending"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                          }>
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No payment records found</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Export History</Button>
          <Button variant="outline">View All Transactions</Button>
        </CardFooter>
      </Card>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-[oklch(0.554_0.225_37.417)]">
              Payment Methods
            </CardTitle>
            <CardDescription>Manage your payment options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-[oklch(0.704_0.2_37.788)]" />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">
                      Expires 04/2025
                    </p>
                  </div>
                </div>
                <Badge>Default</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-[oklch(0.704_0.2_37.788)]" />
                  <div>
                    <p className="font-medium">Mastercard ending in 8888</p>
                    <p className="text-sm text-muted-foreground">
                      Expires 09/2026
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Set Default
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Add Payment Method
            </Button>
          </CardFooter>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-[oklch(0.554_0.225_37.417)]">
              Billing Summary
            </CardTitle>
            <CardDescription>Overview of your spending</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">This Month</p>
                <p className="font-medium">$125.99</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Last Month</p>
                <p className="font-medium">$89.50</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Year to Date</p>
                <p className="font-medium">$280.24</p>
              </div>
              <Separator />
              <div className="flex justify-between items-center pt-2">
                <p className="font-medium">Total Spent</p>
                <p className="font-bold text-lg">$280.24</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Detailed Report
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default PaymentPage;
