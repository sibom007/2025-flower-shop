import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MemberStatCard from "./MemberStatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  formatDate,
  getMembershipColor,
} from "@/modules/dashbord/profile/ProfileConstant";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { IUser, MembershipTier } from "@/Types/User.types";
import { Award, Clock, CreditCard, Package } from "lucide-react";

interface ProfileMembershipProps {
  user: IUser | null;
  isLoading: boolean;
  error?: string | null;
}

export default function ProfileMembership({
  user,
  isLoading,
  error,
}: ProfileMembershipProps) {
  const getMembershipProgress = (tier: MembershipTier, points: number) => {
    const tiers = {
      [MembershipTier.SILVER]: { min: 0, max: 1000 },
      [MembershipTier.GOLD]: { min: 1000, max: 2500 },
      [MembershipTier.DIAMOND]: { min: 2500, max: 5000 },
      [MembershipTier.PLATINUM]: { min: 5000, max: 10000 },
      [MembershipTier.TITANIUM]: { min: 10000, max: 10000 },
    };

    const currentTier = tiers[tier];
    const nextTier =
      tier === MembershipTier.TITANIUM
        ? null
        : tiers[
            Object.values(MembershipTier)[
              Object.values(MembershipTier).indexOf(tier) + 1
            ]
          ];

    if (!nextTier) return 100;
    const progress =
      ((points - currentTier.min) / (nextTier.min - currentTier.min)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const getNextTier = (tier: MembershipTier) => {
    const tiers = Object.values(MembershipTier);
    const currentIndex = tiers.indexOf(tier);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  };

  const getPointsToNextTier = (tier: MembershipTier, points: number) => {
    const nextTier = getNextTier(tier);
    if (!nextTier) return 0;

    const tierThresholds = {
      [MembershipTier.SILVER]: 0,
      [MembershipTier.GOLD]: 1000,
      [MembershipTier.DIAMOND]: 2500,
      [MembershipTier.PLATINUM]: 5000,
      [MembershipTier.TITANIUM]: 10000,
    };

    return tierThresholds[nextTier] - points;
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-3 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-md" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-destructive">Membership Error</CardTitle>
          <CardDescription>{error || "User data unavailable."}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const nextTier = getNextTier(user.membership);
  const pointsToNext = getPointsToNextTier(user.membership, user.point);
  const progress = getMembershipProgress(user.membership, user.point);

  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[oklch(0.554_0.225_37.417)]">
          <Award className="h-5 w-5" />
          Membership & Rewards
        </CardTitle>
        <CardDescription>
          Your current membership status and progress
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge className={getMembershipColor(user.membership)}>
                  {user.membership}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {user.point} points
                </span>
              </div>

              {nextTier && (
                <p className="text-sm mt-2">
                  <span className="text-muted-foreground">Next tier: </span>
                  <Badge variant="outline" className="ml-1">
                    {nextTier}
                  </Badge>
                  <span className="text-muted-foreground ml-1">
                    ({pointsToNext} points needed)
                  </span>
                </p>
              )}
            </div>

            <Button
              variant="outline"
              className="transition-all hover:scale-105">
              View Benefits
            </Button>
          </div>

          {nextTier && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{user.membership}</span>
                <span>{nextTier}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <MemberStatCard
              icon={<Package className="h-4 w-4" />}
              title="Available Points"
              value={user.point}
            />
            <MemberStatCard
              icon={<CreditCard className="h-4 w-4" />}
              title="Purchases"
              value={user.buyRecord.length}
            />
            <MemberStatCard
              icon={<Clock className="h-4 w-4" />}
              title="Member Since"
              value={formatDate(user.createdAt).split(",")[0]}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
