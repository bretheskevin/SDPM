import { DashboardActionList } from "@dashboard/DashboardActionList";
import { getScopedI18n } from "@/locales/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default async function DashboardPage() {
  const scopedT = await getScopedI18n("dashboard");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{scopedT("title")}</h1>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{scopedT("noticeTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{scopedT("noticeDescription")}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="actions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="actions">{scopedT("tabs.actions")}</TabsTrigger>
          <TabsTrigger value="analytics">{scopedT("tabs.playlists")}</TabsTrigger>
        </TabsList>
        <TabsContent value="actions" className="space-y-4">
          <DashboardActionList />
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>{scopedT("playlists.title")}</CardTitle>
              <CardDescription>{scopedT("playlists.description")}</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{scopedT("playlists.alertTitle")}</AlertTitle>
                <AlertDescription>{scopedT("playlists.alertDescription")}</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
