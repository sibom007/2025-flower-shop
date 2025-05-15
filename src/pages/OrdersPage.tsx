import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChevronDown,
  ChevronUp,
  CreditCard,
  Download,
  Eye,
  FileText,
  Package,
} from "lucide-react";
import { useState } from "react";

import Header from "@/components/Header";
import { mockUser } from "@/modules/dashbord/profile/ProfileConstant";

function OrdersPage() {
  const [user] = useState(mockUser);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const toggleOrderExpand = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };
  return (
    <div>
      <Header title="Orders" />
      <Card className="transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[oklch(0.554_0.225_37.417)]">
            <Package className="h-5 w-5" />
            Order History
          </CardTitle>
          <CardDescription>Your recent flower purchases</CardDescription>
        </CardHeader>
        <CardContent>
          {user.buyRecord.length > 0 ? (
            <div className="space-y-4">
              {/* Mock order data for demonstration */}
              <div
                className={`border rounded-lg p-4 hover:bg-slate-50 transition-all cursor-pointer ${
                  expandedOrder === "order-001" ? "shadow-md" : ""
                }`}
                onClick={() => toggleOrderExpand("order-001")}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Order #001</p>
                      {expandedOrder === "order-001" ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      April 15, 2024
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800">
                      Delivered
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$125.99</p>
                  </div>
                </div>

                {expandedOrder === "order-001" && (
                  <div className="mt-4 pt-4 border-t space-y-4 animate-in fade-in-50 duration-300">
                    <div>
                      <p className="text-sm font-medium mb-2">Items:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          Rose Bouquet × 1
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                          Tulip Arrangement × 1
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                          Gift Card × 1
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-2">
                          Shipping Address:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.currentAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">
                          Payment Method:
                        </p>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Credit Card ending in 4242
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        Invoice
                      </Button>
                      <div className="space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          Track
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="flex items-center gap-1 bg-[oklch(0.704_0.2_37.788)] hover:bg-[oklch(0.554_0.225_37.417)]">
                          <Download className="h-4 w-4" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`border rounded-lg p-4 hover:bg-slate-50 transition-all cursor-pointer ${
                  expandedOrder === "order-002" ? "shadow-md" : ""
                }`}
                onClick={() => toggleOrderExpand("order-002")}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Order #002</p>
                      {expandedOrder === "order-002" ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      March 22, 2024
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800">
                      Delivered
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$89.50</p>
                  </div>
                </div>

                {expandedOrder === "order-002" && (
                  <div className="mt-4 pt-4 border-t space-y-4 animate-in fade-in-50 duration-300">
                    <div>
                      <p className="text-sm font-medium mb-2">Items:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                          Lily Bouquet × 1
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          Vase × 1
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-2">
                          Shipping Address:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.homeAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">
                          Payment Method:
                        </p>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Credit Card ending in 4242
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        Invoice
                      </Button>
                      <div className="space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          Track
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="flex items-center gap-1 bg-[oklch(0.704_0.2_37.788)] hover:bg-[oklch(0.554_0.225_37.417)]">
                          <Download className="h-4 w-4" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`border rounded-lg p-4 hover:bg-slate-50 transition-all cursor-pointer ${
                  expandedOrder === "order-003" ? "shadow-md" : ""
                }`}
                onClick={() => toggleOrderExpand("order-003")}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Order #003</p>
                      {expandedOrder === "order-003" ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      February 10, 2024
                    </p>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800">
                      Delivered
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$64.75</p>
                  </div>
                </div>

                {expandedOrder === "order-003" && (
                  <div className="mt-4 pt-4 border-t space-y-4 animate-in fade-in-50 duration-300">
                    <div>
                      <p className="text-sm font-medium mb-2">Items:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          Sunflower Arrangement × 1
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          Plant Food × 1
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-2">
                          Shipping Address:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.currentAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">
                          Payment Method:
                        </p>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Credit Card ending in 4242
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        Invoice
                      </Button>
                      <div className="space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          Track
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          className="flex items-center gap-1 bg-[oklch(0.704_0.2_37.788)] hover:bg-[oklch(0.554_0.225_37.417)]">
                          <Download className="h-4 w-4" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No orders found</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline">View All Orders</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default OrdersPage;
