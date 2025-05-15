import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DistributorStatCard({
  title,
  count,
  color,
}: {
  title: string;
  count: number;
  color: string;
}) {
  return (
    <Card className={`bg-${color}-50 transition-all hover:shadow-md`}>
      <CardHeader className="pb-2">
        <CardTitle className={`text-lg text-${color}-700`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-3xl font-bold text-${color}-700`}>{count}</p>
      </CardContent>
    </Card>
  );
}
export default DistributorStatCard;
