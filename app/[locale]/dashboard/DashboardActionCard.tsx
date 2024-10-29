"use client";

import React from "react";
import { DashboardAction } from "@dashboard/action-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardActionCardProps {
  action: DashboardAction;
}

export const DashboardActionCard: React.FC<DashboardActionCardProps> = ({ action }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{action.title}</CardTitle>
        <CardDescription>{action.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={action.modalMethod} className="w-full">
          {action.buttonIcon}
          {action.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
